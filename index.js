const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from base url');
})

app.listen(port, () => console.log(`topilma.uz server started at port ${port}`));