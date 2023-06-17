const { Router } = require("express");
const {
    obtenerPeliculas,
    crearPelicula,
    actualizarPelicula,
    eliminarPeliculas,
} = require("../controllers/peliculas.controller");

const router = Router();

router.get("/", obtenerPeliculas);

router.post("/", crearPelicula);

router.put("/:id", actualizarPelicula);

router.delete("/:id", eliminarPeliculas);

module.exports = router;