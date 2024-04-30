import { Router } from "express";
import { createMovie, deleteMovie, getMovie } from "./controllers/MovieController.js";

const routes = Router()

routes.get('/movies', getMovie) 
routes.post('/movie', createMovie) 
rputes.delete('/movie/:id', deleteMovie)

export default routes;