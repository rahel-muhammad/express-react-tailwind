const path = require('path');
const express = require('express');

const app = express();
const pathToPublic = path.resolve(__dirname, '..', 'public');

// middleware
app.use(express.json());
app.use(express.static(pathToPublic));

// API routes
app.get('/api/some-data', (req, res, next) => {
    res.send({
        message: 'API response',
    });
});

// send react client
app.get('*', (req, res, next) => {
    res.sendFile(pathToPublic + '/index.html');
});

// global error handler
app.use((err, req, res, next) => {
    res.status(400).send({ error: 'some error happend' });
});

module.exports = app;
