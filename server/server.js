const app = require('./app');

// database connection

const { PORT } = process.env;
const server = app.listen(PORT || 3500, () => console.log('Server running'));

module.exports = server;
