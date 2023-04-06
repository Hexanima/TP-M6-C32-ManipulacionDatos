const db = require("../database/models");

module.exports = {
  list: (req, res) => {
    db.Movie.findAll().then((movies) => {
      return res.render("moviesList", {
        movies,
      });
    });
  },
  new: (req, res) => {
    db.Movie.findAll({
      order: [["release_date", "DESC"]],
      limit: 5,
    }).then((movies) => {
      return res.render("newestMovies", {
        movies,
      });
    });
  },
  recomended: (req, res) => {
    db.Movie.findAll({
      order: [["rating", "DESC"]],
    }).then((movies) => {
      return res.render("recommendedMovies", {
        movies,
      });
    });
  },
  detail: (req, res) => {
    let movieId = req.params.id;

    db.Movie.findByPk(movieId).then((movie) => {
      return res.render("moviesDetail", {
        movie,
      });
    });
  },
};
