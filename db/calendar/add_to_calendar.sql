INSERT INTO calendar (event, date, time, location) 
    VALUES($1, $2, $3, $4)
    RETURNING *