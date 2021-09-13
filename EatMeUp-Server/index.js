const express = require("express");
const cors = require("cors");
const app = express();
const port = 80;
const { sequelize } = require("./models");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  }),
);

sequelize
  .sync({ force: false })
  .then(() => console.log("db접속 성공"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server open`);
});
