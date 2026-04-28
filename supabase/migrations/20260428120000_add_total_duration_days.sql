/*
  Add total_duration_days field to shipments table.
  Used to compute automatic daily progress on the tracking page.
*/

ALTER TABLE shipments
  ADD COLUMN IF NOT EXISTS total_duration_days integer DEFAULT 0;
