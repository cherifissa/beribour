const pool = require("../database/index");

const Beribour = {
  getIndex: async (req, res) => {
    try {
      res.render("login", { user: req.session.user });
    } catch (error) {
      console.log(error);
    }
  },
  Login: async (req, res) => {
    try {
      const [rows, fields] = await pool.query("select * from users");
      res.json({ users: rows });
    } catch (error) {
      console.log(error);
    }
  },

  //get data in
};

module.exports = Beribour;
