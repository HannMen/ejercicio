const { peliculas } = require("../database/db");
const { v4: uuid } = require("uuid");

const obtenerPeliculas = (req, res) => {
  return res.json({
    ok: true,
    msg: "Peliculas obtenidos",
    data: peliculas,
  });
};

const crearPelicula = (req, res) => {
  const { title, year, price } = req.body;

  const pelicula = {
    id: uuid(),
    title: title,
    year: year,
    price: price,
  };

  peliculas.push(pelicula);

  return res.json({
    ok: true,
    msg: "Pelicula creada",
    data: pelicula,
  });
};

const actualizarPelicula = (req, res) => {
  const { id } = req.params;
  const { title, year, price } = req.body;

  const pelicula = peliculas.find((pelicula) => pelicula.id === id);

  pelicula.title = title;
  pelicula.year = year;
  pelicula.price = price;

  return res.json({
    ok: true,
    msg: "Pelicula actualizada",
    data: pelicula,
  });
};

const eliminarPeliculas = (req, res) => {
  const { id } = req.params;

  const pelicula = peliculas.find((pelicula) => pelicula.id === id);
  const index = peliculas.indexOf(pelicula);
  peliculas.splice(index, 1);

  return res.json({
    ok: true,
    msg: "Pelicula eliminada",
    data: pelicula,
  });
};

module.exports = {
  obtenerPeliculas,
  crearPelicula,
  actualizarPelicula,
  eliminarPeliculas,
};
