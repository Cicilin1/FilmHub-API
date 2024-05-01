import { Router } from "express";
import { createMovie, deleteMovie, getMovie, updateMovie } from "./controllers/MovieController.js";

const routes = Router()

routes.get('/movies', getMovie) 
routes.post('/movie', createMovie) 
routes.delete('/movie/:id', deleteMovie)
routes.put('/movie/:id', updateMovie)

updateMovie

export default routes;