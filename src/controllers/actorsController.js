const db = require("../database/models");

module.exports = {
  list: (req, res) => {
    db.Actor.findAll().then((actors) => {
      return res.render("actorsList", {
        actors,
      });
    });
  },
  recomended: (req, res) => {
    db.Actor.findAll({
      order: [["rating", "DESC"]],
    }).then((actors) => {
      return res.render("recommendedActors", {
        actors,
      });
    });
  },
  detail: (req, res) => {
    let actorId = req.params.id;

    db.Actor.findByPk(actorId).then((actor) => {
      db.Movie.findByPk(actor.favorite_movie_id).then((movie) => {
        return res.render("actorsDetail", {
          actor,
          movie,
        });
      });
    });
  },
};
