const express = require("express");
const router = express.Router();

const loginControler = require("../controller/login.controller");

router.get("/login", loginControler.getIndex);
router.post("/login/dologin", loginControler.Login);

module.exports = router;
