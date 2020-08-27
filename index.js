const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const sequelize = require("./utils/database");

const port = 3000;
const mainRoute = require("./routes/main");
const lostRoute = require("./routes/lost");
const foundRoute = require("./routes/found");
const uploadRoute = require("./routes/upload");

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", mainRoute);
app.use("/lost", lostRoute);
app.use("/found", foundRoute);
app.use("/upload", uploadRoute);

async function start() {
  try {
    // await sequelize.sync();
    await sequelize.sync({ force: true });
    app.listen(port, () =>
      console.log(`topilma.uz server started at port ${port}`)
    );
  } catch (e) {
    console.log(e);
  }
}

start();
