const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const sequelize = require("./utils/database");
const port = 3000;
const mainRoute = require("./routes/main");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", mainRoute);

async function start() {
  try {
   // await sequelize.sync();
    await sequelize.authenticate();
    app.listen(port, () =>
      console.log(`topilma.uz server started at port ${port}`)
    );
  } catch (e) {
    console.log(e);
  }
}

start();
