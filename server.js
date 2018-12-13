const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 56789;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
.then(() => {
  const ex = express();

  ex.get('*', (req, res) => {
    return handle(req, res);
  });

  ex.listen(port, (err) => {
    if (err) throw err;
    console.log(`Listening on ${port}`)
  })
})