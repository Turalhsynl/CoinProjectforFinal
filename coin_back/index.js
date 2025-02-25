require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3001;
const mysql = require("mysql");

app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

connection.connect((err) => {
    if (err) {
        console.error("Error connecting to database: " + err.stack);
        return;
    }
    console.log("MySQL connected succesfully");
});

app.get('/categories', (req, res) => {
    connection.query(
        "SELECT * FROM categories", (err, data) => {
            res.json(data)
        }
    )
})

app.get('/categories/:id', (req, res) => {
    const id = +req.params.id;

    connection.query(
        `SELECT * FROM coins WHERE category_id = ${id}`, (err, data) => {
            if (!err) {
                res.json(data)
            } else {
                res.status(500).json()
            }
        }
    )
})

app.get('/categories/:id/:coinId', (req, res) => {
    const coinId = +req.params.coinId;

    connection.query(
        `SELECT * FROM coins WHERE id = ${coinId};`, (err, coin) => {
            if (!err) {
                connection.query(
                    `SELECT * FROM text WHERE text_id=${coinId}`, (err, text_text) => {
                        if (!err) {
                            res.json({
                                coin: coin[0],
                                text_text
                            });
                        } else {
                            console.log('error: ', err);
                            res.status(500).json();
                        }
                    }
                );
            }
        }
    )
}
);

app.get('/search', (req, res) => {
    const searchQuery = req.query;
    const searchQueryArr = []

    if (searchQuery.length === 0) {
        connection.query('SELECT * FROM coins;', (err, data) => {
            if (!err) {
                res.json(data)
            } else {
                res.status(500).send()
                console.log(err)
            }
        })
    } else {
        if (searchQuery.search) {
            searchQueryArr.push(`title LIKE '%${searchQuery.search}%' OR short_desc LIKE '%${searchQuery.search}%'`)
        }
        if (searchQuery.metal) {
            searchQueryArr.push(`composition LIKE '%${searchQuery.metal}%'`)
        }
        if (searchQuery.quality) {
            searchQueryArr.push(`quality LIKE '%${searchQuery.quality}%'`)
        }
        if (searchQuery.fromPrice) {
            searchQueryArr.push(`price >= '${searchQuery.fromPrice}'`)
        }
        if (searchQuery.toPrice) {
            searchQueryArr.push(`price <= '${searchQuery.toPrice}'`)
        }
        if (searchQuery.toYear) {
            searchQueryArr.push(`year <= '${searchQuery.toYear}'`)
        }
        if (searchQuery.fromYear) {
            searchQueryArr.push(`year >= '${searchQuery.fromYear}'`)
        }
        if (searchQuery.country) {
            searchQueryArr.push(`issuing_country LIKE '%${searchQuery.country}%'`)
        }

        const finalQuery = searchQueryArr.join(' AND ')

        connection.query(`SELECT * FROM coins WHERE ${finalQuery};`, (err, data) => {
            if (!err) {
                res.json(data)
            } else {
                res.status(500).send()
                console.log(err)
            }
        })

    }


})

app.get('/all/', (req, res) => {

    connection.query(
        `SELECT * FROM coins`, (err, data) => {
            if (!err) {
                res.json(data);
            } else {
                res.status(500).json();
            }
        }
    );
});

app.get('/all/:id', (req, res) => {
    const id = req.params.id;

    connection.query(
        `SELECT * FROM coins WHERE id = ${id}`, (err, data) => {
            if (!err) {
                res.json(data);
            } else {
                res.status(500).json();
            }
        }
    );
});

app.delete('/all/:id', (req, res) => {
    const id = req.params.id;

    connection.query(
        `DELETE FROM coins WHERE id = ${id}`, (err, data) => {
            if (!err) {
                res.json(data);
            } else {
                res.status(500).json();
            }
        }
    );
});

app.put('/all/:id', (req, res) => {
    const id = +req.params.id;
    const coin = req.body;

    connection.query(
        `UPDATE coins SET ? WHERE id = ?`,
        [coin, id],
        (err, result) => {
            if (!err) {
                if (result.affectedRows === 0) {
                    res.status(404).json({ error: 'Coin not found' });
                } else {
                    res.status(200).json(result);
                }
            } else {
                console.log(err);
                res.status(500).json({ error: 'Error updating coin' });
            }
        }
    );
});

app.post('/all', (req, res) => {
    const coin = req.body;
    connection.query(
        'INSERT INTO coins SET ?',
        coin,
        (err, result) => {
            if (!err) {
                res.status(201).json({ message: 'Coin added successfully', coin });
            } else {
                console.log(err);
                res.status(500).json({ error: 'Error adding coin' });
            }
        }
    );
});

app.post('/acces', (req, res) => {
    const { email, password } = req.body

    connection.query(`SELECT * from users where email = '${email}'`, (err, data) => {
        if (err) {
            res.status(400).json({ err })
        } else {
            if (data.length > 0 && data[0].password) {
                const adminUser = data[0]
                if (adminUser.password === password) {
                    res.json({
                        isAdmin: true
                    })
                } else {
                    res.json({
                        authError: 'Invalid password'
                    })
                }
            } else {
                res.json({
                    authError: 'User not found'
                })
            }
        }
    })
})

app.get("/options", (req, res) => {
    const queryCountry = "SELECT DISTINCT issuing_country FROM coins";
    const queryComposition = "SELECT DISTINCT composition FROM coins";
    const queryQuality = "SELECT DISTINCT quality FROM coins";

    connection.query(queryCountry, (err, countryResults) => {
        if (err) {
            res.status(500).json();
        } else {
            const uniqueCountries = countryResults.map((row) => row.issuing_country);
            connection.query(queryComposition, (err, compositionResults) => {
                if (err) {
                    res.status(500).json();
                } else {
                    const uniqueCompositions = compositionResults.map((row) => row.composition);
                    connection.query(queryQuality, (err, qualityResults) => {
                        if (err) {
                            res.status(500).json();
                        } else {
                            const uniqueQualities = qualityResults.map((row) => row.quality);
                            res.json({ countries: uniqueCountries, compositions: uniqueCompositions, qualities: uniqueQualities });
                        }
                    });
                }
            });
        }
    });
});

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://main--beautiful-sfogliatella-c42822.netlify.app');
    next();
});

app.listen(PORT, () => {
    console.log('listening to port: ', PORT)
})