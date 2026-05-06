-- Ajout des codes pays ISO-2 et du mode de transport pour la visualisation globe
ALTER TABLE shipments
  ADD COLUMN IF NOT EXISTS origin_country text,
  ADD COLUMN IF NOT EXISTS destination_country text,
  ADD COLUMN IF NOT EXISTS transport_mode text;

COMMENT ON COLUMN shipments.origin_country IS 'Code ISO-2 du pays d''origine (ex: CN, FR)';
COMMENT ON COLUMN shipments.destination_country IS 'Code ISO-2 du pays de destination (ex: CM, NG)';
COMMENT ON COLUMN shipments.transport_mode IS 'Mode de transport: sea ou air';
