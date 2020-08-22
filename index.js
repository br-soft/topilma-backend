const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const mainRoute = require("./routes/main");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", mainRoute);

// app.get('/', (req, res) => {
//   res.send('Hello from base url');
// })

app.listen(port, () =>
  console.log(`topilma.uz server started at port ${port}`)
);
