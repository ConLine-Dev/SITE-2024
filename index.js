// Import packages
const express = require('express');
const http = require('http');
const path = require('path');
const cors = require('cors');

// Middlewares
const app = express();

app.use(express.json());
app.use(cors()); // Use CORS na instância do Express

// Import routes pages
const listApp = require('./routes/app');
const api = require('./routes/api');

// Statics
app.use('/assets', express.static(path.join(__dirname, 'public/assets')))

// Routes
app.use('/', listApp);
app.use('/api', api);

// Create an HTTP server using the Express app
const server = http.createServer(app);

// connection
const port = process.env.PORT || 9001;
server.listen(port, () =>
  console.log(`Listening to port http://localhost:${port} Node.js v${process.versions.node}!`)
);
