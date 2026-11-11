/*
  Pause support for shipments (stopover, customs, weather, other).
  paused_days = cumulated days of finished pauses; paused_at = start of the current pause.
*/
ALTER TABLE shipments
  ADD COLUMN IF NOT EXISTS is_paused boolean DEFAULT false,
  ADD COLUMN IF NOT EXISTS pause_reason text DEFAULT '',
  ADD COLUMN IF NOT EXISTS pause_reason_detail text DEFAULT '',
  ADD COLUMN IF NOT EXISTS paused_at date,
  ADD COLUMN IF NOT EXISTS paused_days integer DEFAULT 0;
