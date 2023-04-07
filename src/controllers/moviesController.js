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
  add: (req, res) => {
    db.Genre.findAll().then((genres) => res.render("moviesCreate", { genres }));
  },
  create: (req, res) => {
    let { title, rating, awards, release_date, length, genre_id } = req.body;

    db.Movie.create({
      title,
      rating,
      awards,
      release_date,
      length,
      genre_id,
    })
      .then(() => res.redirect("/movies"))
      .catch((err) => res.send(err));
  },
  edit: (req, res) => {
    db.Movie.findByPk(req.params.id).then((movie) => {
      db.Genre.findAll().then((genres) =>
        res.render("moviesEdit", { genres, movie })
      );
    });
  },
  update: (req, res) => {
    let { id } = req.params;
    let { title, rating, awards, release_date, length, genre_id } = req.body;

    db.Movie.update(
      {
        title,
        rating,
        awards,
        release_date,
        length,
        genre_id,
      },
      {
        where: {
          id,
        },
      }
    )
      .then(() => res.redirect("/movies"))
      .catch((err) => res.send(err));
  },
  delete: (req, res) => {
    let { id } = req.params;

    db.Movie.destroy({ where: { id } })
      .then(() => res.redirect("/movies"))
      .catch((err) => res.send(err));
  },
};
