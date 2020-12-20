const path = require('path');
const fs = require('fs');
const express = require('express');
const https = require('https');
const app = express();
const privateKey  = fs.readFileSync('sslcert/server.key', 'utf8');
const certificate = fs.readFileSync('sslcert/server.crt', 'utf8');
const credentials = {key: privateKey, cert: certificate};

const publicPath = path.join(__dirname, 'build');
app.use(express.static(publicPath));
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});
const httpsServer = https.createServer(credentials, app);
httpsServer.listen(8443);
