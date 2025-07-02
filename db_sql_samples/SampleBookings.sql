-- Step 1: Clear the booking table
DELETE FROM booking;

-- Step 2: Insert 174 random bookings
-- This assumes at least one festival exists in the `festival` table

INSERT INTO booking (festival_id, email, full_name)
SELECT
    f.id AS festival_id,
    CONCAT('user', LPAD(FLOOR(RAND() * 100000), 5, '0'), '@example.com') AS email,
    CONCAT('User_', LPAD(FLOOR(RAND() * 100000), 5, '0')) AS full_name
FROM (
         SELECT id FROM festival
         ORDER BY RAND()
             LIMIT 174
     ) AS f;
