const pool = require("../database/index");
const { body, validationResult, check } = require("express-validator");
const session = require("express-session");

const Beribour = {
  getIndex: async (req, res) => {
    try {
      res.render("index");
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const [rows, fields] = await pool.query("select * from users");
      // pass all rows to the view render
      res.render("liste", { users: rows });
    } catch (error) {
      console.log(error);
    }
  },
  createForm: async (/*req*/ _, res) => {
    try {
      res.render("create", { errors: "" });
    } catch (error) {
      console.log(error);
    }
  },
  createUsers: async (req, res) => {
    try {
      const errors = validationResult(req);
      console.log(errors);
      if (!errors.isEmpty()) {
        return res.render("create", { errors: errors.mapped() });
      }

      const {
        nom_prenom,
        numero_telephone,
        numero_whatsapp,
        photo_visage,
        race,
        keri,
        keribour,
        keribourbour,
        keri_du_pere,
        keribour_du_pere,
        village_natal,
        niveau_etudes,
        option_etude,
        ecole_universite,
        annee_arrivee,
      } = req.body;

      const newUser = {
        nom_prenom: nom_prenom,
        numero_telephone: numero_telephone,
        numero_whatsapp: numero_whatsapp,
        photo_visage: photo_visage,
        race: race,
        keri: keri,
        keribour: keribour,
        keribourbour: keribourbour,
        keri_du_pere: keri_du_pere,
        keribour_du_pere: keribour_du_pere,
        village_natal: village_natal,
        niveau_etudes: niveau_etudes,
        option_etude: option_etude,
        ecole_universite: ecole_universite,
        annee_arrivee: annee_arrivee,
      };

      // Créer un nouvel utilisateur en utilisant Sequelize
      // const createdUser = await User.create(newUser);
      // console.log(createdUser);
    } catch (error) {
      console.log(error);
    }
  },

  //get data in
};

module.exports = Beribour;
