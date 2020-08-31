const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const sequelize = require("./utils/database");
const UserLost = require("./models/UserLost");
const UserLostImage = require("./models/UserLostImage");


const port = 3000;
const mainRoute = require("./routes/main");
const lostRoute = require("./routes/lost");
const foundRoute = require("./routes/found");


app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", mainRoute);
app.use("/lost", lostRoute);
app.use("/found", foundRoute);




async function start() {
  try {
    // await sequelize.sync();
    await sequelize.sync();
    app.listen(port, () =>
      console.log(`topilma.uz server started at port ${port}`)
    );
  } catch (e) {
    console.log(e);
  }
}

start();
