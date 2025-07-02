-- Delete existing data if needed
DELETE FROM festival_band;

-- Set number of associations per festival (e.g. 2–5 bands per festival)
SET @min_bands := 2;
SET @max_bands := 5;

-- Loop over each festival
INSERT INTO festival_band (festival_id, band_id)
SELECT
    f.id AS festival_id,
    b.id AS band_id
FROM (
         SELECT id FROM festival
     ) f
         JOIN (
    SELECT id FROM band ORDER BY RAND()
) b
              ON RAND() < (
                              -- This determines how many random bands to pick per festival
                              (@max_bands - @min_bands + 1) * RAND() + @min_bands
                              ) / (SELECT COUNT(*) FROM band)
ORDER BY f.id, RAND();