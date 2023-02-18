
import Menu from "../models/menu";


export function Affmenu(req, res, next) {
  Menu.find().select('nom')
    .then((Menu) => {
      res.status(200).json(Menu);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: "Erreur serveur" });
      next(err);
    });
}




export function getmenuById(req, res, next) {
  const id = req.params.id;
  Menu.findById(id)
    .then((Menu) => {
      res.status(200).json(Menu);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: "Erreur serveur" });
      next(err);
    });
}
