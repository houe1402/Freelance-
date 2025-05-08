const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'atelier',
    password: 'password',
    port: 5432,
});

app.get('/interventions', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM interventions');
        res.json(result.rows);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.post('/interventions', async (req, res) => {
    const { description, date } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO interventions (description, date) VALUES ($1, $2) RETURNING *',
            [description, date]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.delete('/interventions/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM interventions WHERE id = $1', [id]);
        res.status(204).send();
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
