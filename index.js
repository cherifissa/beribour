const express = require("express");
const session = require("express-session");

const app = express();

require("dotenv").config();
const path = require("path");

app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // set this to true if you're using https
  })
);

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const beribourRouter = require("./routes/beribour.router");
const loginRouter = require("./routes/login.router");

// Définir EJS comme moteur de vue
app.set("view engine", "ejs");

// Définir le répertoire des vues
app.set("views", path.join(__dirname, "views"));

app.use("/", beribourRouter);
app.use("/login", loginRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Serveur écoutant sur le port ${PORT}`);
});
