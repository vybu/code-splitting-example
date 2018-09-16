const express = require('express');
const path = require('path');

const PORT = 3000;
const distPath = path.join(__dirname, '../../dist');
const indexHtmlPath = path.join(distPath, 'index.html');

const app = express();

app.use(express.static(distPath));

app.get(['/', '/stats', '/create-post'], (req, res) => {
  console.log(`Express GET: ${req.path}`);
  res.sendFile(indexHtmlPath);
});

app.listen(PORT, () => console.log(`Express app listening on ${PORT}`));
