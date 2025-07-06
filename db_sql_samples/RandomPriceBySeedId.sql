UPDATE festival
SET booking_price = CONCAT(
    FLOOR((RAND(id) * 19 + 2)) * 10 - 0.01
                    );
