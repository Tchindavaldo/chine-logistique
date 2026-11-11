/** Suggestions only: the reason is free text (the admin can type anything). */
export const PAUSE_REASONS: string[] = [
  'Escale',
  'Contrôle douanier',
  'Conditions météo',
  'Problème technique',
  'Documents manquants',
  'En attente de paiement',
];

// Old records stored codes instead of labels.
const LEGACY: Record<string, string> = {
  escale: 'Escale', douane: 'Contrôle douanier', meteo: 'Conditions météo',
  technique: 'Problème technique', documents: 'Documents manquants', paiement: 'En attente de paiement', autre: '',
};
export const reasonLabel = (reason?: string): string => {
  const r = (reason || '').trim();
  return r in LEGACY ? LEGACY[r] : r;
};

const toUTC = (iso: string): number => {
  const d = new Date(iso);
  return Date.UTC(d.getFullYear(), d.getMonth(), d.getDate());
};

/** Whole days between an ISO date and today (>= 0). */
export const daysSince = (iso?: string): number => {
  if (!iso) return 0;
  const d = new Date(iso);
  if (isNaN(d.getTime())) return 0;
  const now = new Date();
  const today = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.max(0, Math.floor((today - toUTC(iso)) / 86400000));
};

export interface PauseFields {
  is_paused?: boolean;
  paused_at?: string;
  paused_days?: number;
}

/** Total paused days so far (past pauses + current ongoing pause). */
export const totalPausedDays = (s: PauseFields): number =>
  (s.paused_days || 0) + (s.is_paused ? daysSince(s.paused_at) : 0);

/** Days effectively travelled since departure, excluding paused days. */
export const effectiveElapsedDays = (departureISO: string, totalDays: number, s: PauseFields): number =>
  Math.max(0, Math.min(totalDays, daysSince(departureISO) - totalPausedDays(s)));

const fmt = (iso?: string) => (iso ? new Date(iso).toLocaleDateString('fr-FR') : '…');
const todayISO = () => new Date().toISOString().slice(0, 10);

/** Date appended to the text. Empty for today (the text already says « aujourd'hui »). */
export const formatPauseDate = (iso?: string) => (iso && iso !== todayISO() ? fmt(iso) : '');

/** Automatic client text WITHOUT the date (the date is appended, never editable). */
export const autoPauseMessage = (reason?: string, place?: string, pausedAt?: string): string => {
  const label = reasonLabel(reason) || 'Pause';
  const where = place?.trim() ? ` à ${place.trim()}` : '';
  if (!pausedAt) return `${label}${where}`;
  const today = todayISO();
  if (pausedAt > today) return `${label}${where} prévue le`;
  if (pausedAt === today) return `${label}${where} aujourd'hui`;
  return `${label}${where} depuis le`;
};

/** Text shown to the client: (custom or automatic text) + fixed date. */
export const renderPauseMessage = (s: { pause_message?: string; pause_reason?: string; pause_reason_detail?: string; paused_at?: string }): string => {
  const text = s.pause_message?.trim() || autoPauseMessage(s.pause_reason, s.pause_reason_detail, s.paused_at);
  return [text, formatPauseDate(s.paused_at)].filter(Boolean).join(' ');
};
