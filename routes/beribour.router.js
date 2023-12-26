const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const beribourControler = require("../controller/beribour.controller");

router.get("/", beribourControler.getIndex);
router.get("/beribour", beribourControler.getAll);
router.get("/beribour/create", beribourControler.createForm);
router.post("/beribour/store", [
  check("nom_prenom", "Le nom et le prénom sont requis").notEmpty(),
  check("numero_telephone", "Le numéro de téléphone est requis").notEmpty(),
  check("numero_whatsapp", "Le numéro de whatsapp est requis").notEmpty(),
  check("photo_visage", "La photo est requise").notEmpty(),
  check("race", "La race est requise").notEmpty(),
  check("keri", "Le keri est requis").notEmpty(),
  check("keribour", "Le keribour est requis").notEmpty(),
  check("keribourbour", "Le keribour est requis").notEmpty(),
  check("keri_du_pere", "Le keri du père est requis").notEmpty(),
  check("keribour_du_pere", "Le keribour du père est requis").notEmpty(),
  check("village_natal", "Le village natal est requis").notEmpty(),
  check("niveau_etudes", "Le niveau d'études est requis").notEmpty(),
  check("option_etude", "L'option d'étude est requise").notEmpty(),
  check("ecole_universite", "L'école/université est requise").notEmpty(),
  check("annee_arrivee", "L'année d'arrivée est requise").notEmpty(),
  beribourControler.createUsers,
]);
module.exports = router;
