import { Router } from "express";
import { createMovie, deleteMovie, getMovie, updateMovie } from "./controllers/MovieController.js";
import { getCategories, createCategory, deleteCategory, updateCategory } from "./controllers/CategoryController.js";

const routes = Router()

routes.get('/movies', getMovie) 
routes.post('/movie', createMovie) 
routes.delete('/movie/:id', deleteMovie)
routes.put('/movie/:id', updateMovie)

routes.get('/categories', getCategories) 
routes.post('/category', createCategory) 
routes.delete('/category/:id', deleteCategory)
routes.put('/category/:id', updateCategory)

export default routes;