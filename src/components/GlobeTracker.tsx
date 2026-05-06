import { useEffect, useMemo, useRef, useState } from 'react';
import Globe from 'react-globe.gl';
import { getCountry } from '../lib/countries';

interface GlobeTrackerProps {
  originCountry: string;
  destinationCountry: string;
  transportMode: string;
  progress: number;
}

// Waypoints maritimes pour bateaux (Chine -> Afrique via Océan Indien & Atlantique)
// Permet de suivre une route maritime réaliste plutôt qu'une ligne droite traversant des terres
const SEA_WAYPOINTS_CN_AFRICA: [number, number][] = [
  [22.0, 114.0], // Hong Kong
  [10.0, 105.0], // Mer de Chine méridionale
  [1.5, 104.0], // Singapour (détroit Malacca)
  [5.0, 95.0], // Océan Indien Nord
  [0.0, 80.0],
  [-5.0, 65.0],
  [-10.0, 50.0], // Près de Madagascar
  [-25.0, 35.0], // Mozambique
  [-34.5, 20.0], // Cap de Bonne Espérance
  [-15.0, 5.0], // Atlantique Sud
  [0.0, 5.0], // Golfe de Guinée
];

function buildSeaRoute(
  from: { lat: number; lng: number },
  to: { lat: number; lng: number }
): [number, number][] {
  // Si trajet Chine/Asie -> Afrique, on utilise les waypoints
  const isAsia = from.lng > 60;
  const isAfricaWest = to.lng < 25 && to.lat > -35 && to.lat < 30;
  if (isAsia && isAfricaWest) {
    return [
      [from.lat, from.lng],
      ...SEA_WAYPOINTS_CN_AFRICA,
      [to.lat, to.lng],
    ];
  }
  // Fallback: grand cercle échantillonné
  const pts: [number, number][] = [];
  for (let i = 0; i <= 32; i++) {
    const t = i / 32;
    pts.push(greatCircle(from, to, t));
  }
  return pts;
}

function greatCircle(
  from: { lat: number; lng: number },
  to: { lat: number; lng: number },
  t: number
): [number, number] {
  const lat1 = (from.lat * Math.PI) / 180;
  const lng1 = (from.lng * Math.PI) / 180;
  const lat2 = (to.lat * Math.PI) / 180;
  const lng2 = (to.lng * Math.PI) / 180;
  const d =
    2 *
    Math.asin(
      Math.sqrt(
        Math.sin((lat2 - lat1) / 2) ** 2 +
          Math.cos(lat1) * Math.cos(lat2) * Math.sin((lng2 - lng1) / 2) ** 2
      )
    );
  if (d === 0) return [from.lat, from.lng];
  const A = Math.sin((1 - t) * d) / Math.sin(d);
  const B = Math.sin(t * d) / Math.sin(d);
  const x = A * Math.cos(lat1) * Math.cos(lng1) + B * Math.cos(lat2) * Math.cos(lng2);
  const y = A * Math.cos(lat1) * Math.sin(lng1) + B * Math.cos(lat2) * Math.sin(lng2);
  const z = A * Math.sin(lat1) + B * Math.sin(lat2);
  return [
    (Math.atan2(z, Math.sqrt(x * x + y * y)) * 180) / Math.PI,
    (Math.atan2(y, x) * 180) / Math.PI,
  ];
}

// Position le long d'une polyligne selon t [0..1]
function positionAlong(path: [number, number][], t: number): [number, number] {
  if (path.length < 2) return path[0];
  const idx = t * (path.length - 1);
  const i = Math.floor(idx);
  const frac = idx - i;
  if (i >= path.length - 1) return path[path.length - 1];
  const a = path[i];
  const b = path[i + 1];
  return [a[0] + (b[0] - a[0]) * frac, a[1] + (b[1] - a[1]) * frac];
}

export default function GlobeTracker({
  originCountry,
  destinationCountry,
  transportMode,
  progress,
}: GlobeTrackerProps) {
  const globeRef = useRef<any>();
  const containerRef = useRef<HTMLDivElement>(null);
  const [countries, setCountries] = useState<any>({ features: [] });
  const [size, setSize] = useState({ width: 1050, height: 760 });

  useEffect(() => {
    const update = () => {
      const w = containerRef.current?.clientWidth || window.innerWidth;
      const width = Math.min(1050, w);
      const height = Math.round(width * 0.72);
      setSize({ width, height });
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const isAir = transportMode === 'air';
  const from = useMemo(() => getCountry(originCountry), [originCountry]);
  const to = useMemo(() => getCountry(destinationCountry), [destinationCountry]);

  // Charger les frontières des pays (GeoJSON)
  useEffect(() => {
    fetch('//unpkg.com/world-atlas/countries-110m.json')
      .then((r) => r.json())
      .then((topology: any) => {
        // Convertit topojson -> geojson via une lib légère inline
        // @ts-expect-error - pas de types pour topojson-client
        import('topojson-client').then((topo: any) => {
          const geo = topo.feature(topology, topology.objects.countries) as any;
          setCountries(geo);
        }).catch(() => {
          // Fallback: charger directement geojson
          fetch('//raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson')
            .then((r) => r.json())
            .then(setCountries);
        });
      })
      .catch(() => {
        fetch('//raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson')
          .then((r) => r.json())
          .then(setCountries);
      });
  }, []);

  const path = useMemo(() => {
    if (!from || !to) return [];
    if (isAir) {
      const pts: [number, number][] = [];
      for (let i = 0; i <= 64; i++) {
        pts.push(greatCircle(from, to, i / 64));
      }
      return pts;
    }
    return buildSeaRoute(from, to);
  }, [from, to, isAir]);

  const t = Math.max(0, Math.min(1, progress / 100));
  const vehiclePos = useMemo<[number, number]>(
    () => (path.length ? positionAlong(path, t) : [0, 0]),
    [path, t]
  );
  // Bearing (cap) entre position courante et point suivant — pour orienter le bec de l'avion
  const bearing = useMemo(() => {
    if (!path.length) return 0;
    const next = positionAlong(path, Math.min(1, t + 0.005));
    const lat1 = (vehiclePos[0] * Math.PI) / 180;
    const lat2 = (next[0] * Math.PI) / 180;
    const dLng = ((next[1] - vehiclePos[1]) * Math.PI) / 180;
    const y = Math.sin(dLng) * Math.cos(lat2);
    const x =
      Math.cos(lat1) * Math.sin(lat2) -
      Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLng);
    return (Math.atan2(y, x) * 180) / Math.PI;
  }, [path, t, vehiclePos]);

  // ISO-3 mapping pour matcher avec le geojson de world-atlas
  const ISO2_TO_NAME: Record<string, string[]> = {
    CN: ['China', 'Chine'],
    HK: ['Hong Kong'],
    JP: ['Japan'],
    KR: ['South Korea', 'Korea, Republic of'],
    IN: ['India'],
    AE: ['United Arab Emirates'],
    TR: ['Turkey'],
    TH: ['Thailand'],
    VN: ['Vietnam'],
    CM: ['Cameroon'],
    NG: ['Nigeria'],
    CI: ["Côte d'Ivoire", 'Ivory Coast'],
    SN: ['Senegal'],
    GA: ['Gabon'],
    CG: ['Republic of the Congo', 'Congo'],
    CD: ['Democratic Republic of the Congo', 'Dem. Rep. Congo'],
    BJ: ['Benin'],
    TG: ['Togo'],
    BF: ['Burkina Faso'],
    ML: ['Mali'],
    MA: ['Morocco'],
    DZ: ['Algeria'],
    TN: ['Tunisia'],
    EG: ['Egypt'],
    KE: ['Kenya'],
    ZA: ['South Africa'],
    GH: ['Ghana'],
    GN: ['Guinea'],
    MR: ['Mauritania'],
    TD: ['Chad'],
    CF: ['Central African Republic', 'Central African Rep.'],
    FR: ['France'],
    BE: ['Belgium'],
    NL: ['Netherlands'],
    DE: ['Germany'],
    IT: ['Italy'],
    ES: ['Spain'],
    GB: ['United Kingdom'],
    US: ['United States of America', 'United States'],
    CA: ['Canada'],
    BR: ['Brazil'],
  };

  const matchCountry = (feat: any, iso2: string) => {
    const names = ISO2_TO_NAME[iso2] || [];
    const featName =
      feat.properties?.name || feat.properties?.NAME || feat.properties?.ADMIN || '';
    return names.includes(featName);
  };

  const getPolygonColor = (feat: any) => {
    if (from && matchCountry(feat, from.code)) return 'rgba(34,197,94,0.85)'; // vert origine
    if (to && matchCountry(feat, to.code)) return 'rgba(239,68,68,0.85)'; // rouge destination
    return 'rgba(255,255,255,0.05)';
  };

  useEffect(() => {
    if (globeRef.current && from && to) {
      const controls = globeRef.current.controls();
      if (controls) {
        controls.autoRotate = true;
        controls.autoRotateSpeed = 0.4;
      }
      const midLat = (from.lat + to.lat) / 2;
      const midLng = (from.lng + to.lng) / 2;
      globeRef.current.pointOfView({ lat: midLat, lng: midLng, altitude: 2.3 }, 1500);
    }
  }, [from, to]);

  if (!from || !to) {
    return (
      <div className="bg-yellow-50 border border-yellow-300 p-6 rounded-lg mt-6 text-yellow-800">
        ⚠️ Pays d'origine ou de destination non défini pour ce colis. Veuillez les renseigner dans l'admin.
      </div>
    );
  }

  return (
    <div ref={containerRef} className="flex justify-center bg-slate-100 rounded-lg overflow-hidden w-full mt-6">
        <Globe
          ref={globeRef}
          width={size.width}
          height={size.height}
          backgroundColor="rgba(241,245,249,1)"
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          atmosphereColor="#3b82f6"
          atmosphereAltitude={0.22}
          polygonsData={countries.features || []}
          polygonAltitude={(d: any) =>
            (from && matchCountry(d, from.code)) || (to && matchCountry(d, to.code)) ? 0.025 : 0.005
          }
          polygonCapColor={getPolygonColor}
          polygonSideColor={() => 'rgba(255,255,255,0.1)'}
          polygonStrokeColor={() => '#111'}
          polygonLabel={(d: any) =>
            `<div style="background:rgba(0,0,0,0.8);color:white;padding:4px 8px;border-radius:4px;font-size:12px">
              ${d.properties?.name || d.properties?.ADMIN || ''}
            </div>`
          }
          pathsData={[path]}
          pathPoints={(d: any) => d}
          pathPointLat={(p: any) => p[0]}
          pathPointLng={(p: any) => p[1]}
          pathColor={() => ['#fca5a5', '#fca5a5']}
          pathStroke={2.5}
          pathDashLength={0.005}
          pathDashGap={0.005}
          pathDashAnimateTime={0}
          pathPointAlt={0.01}
          htmlElementsData={[
            {
              lat: vehiclePos[0],
              lng: vehiclePos[1],
              type: isAir ? 'origin' : 'boat',
              size: isAir ? 18 : 32,
              rotate: bearing,
            },
            ...(isAir
              ? []
              : [{ lat: from.lat, lng: from.lng, type: 'origin', size: 18, rotate: 0 }]),
            { lat: to.lat, lng: to.lng, type: 'dest', size: 18, rotate: 0 },
          ]}
          htmlLat="lat"
          htmlLng="lng"
          htmlAltitude={0.04}
          htmlElement={(d: any) => {
            const el = document.createElement('div');
            el.style.pointerEvents = 'none';
            el.style.transformOrigin = 'center';
            if (d.type === 'plane') {
              // SVG avion pointant vers la droite (0° = est) — rotation par bearing direct
              el.innerHTML = `
                <svg width="${d.size}" height="${d.size}" viewBox="-12 -12 24 24" style="overflow:visible">
                  <g transform="rotate(${d.rotate})">
                    <path d="M 10 0 L -8 -6 L -4 0 L -8 6 Z M -4 0 L -10 -3 L -10 3 Z"
                          fill="#1e40af" stroke="white" stroke-width="0.8" stroke-linejoin="round"/>
                  </g>
                </svg>`;
              el.style.filter = 'drop-shadow(0 0 4px rgba(255,255,255,0.9))';
            } else if (d.type === 'boat') {
              el.innerHTML = '🚢';
              el.style.fontSize = `${d.size}px`;
              el.style.filter = 'drop-shadow(0 0 6px rgba(255,255,255,0.7))';
            } else if (d.type === 'origin') {
              el.innerHTML = '🟢';
              el.style.fontSize = `${d.size}px`;
            } else {
              el.innerHTML = '🔴';
              el.style.fontSize = `${d.size}px`;
            }
            return el;
          }}
        />
      </div>
  );
}
