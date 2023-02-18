import Restaurant from "../models/restaurant";

export function ajoute(req, res) {
  Restaurant.findOne({ nom: req.body.nom, tel: req.body.tel , adresse: req.body.adresse})
    .then((doc) => {
      res.status(201).json(doc);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}
// get rest
export function getRest(req, res, next) {
  Restaurant.find().select('nom')
    .then((Restaurant) => {
      res.status(200).json(Restaurant);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: "Erreur serveur" });
      next(err);
    });
}

