INSERT INTO articles (title, img, url, date, topic, description)
    VALUES($1, $2, $3, $4, $5, $6)
    RETURNING *;