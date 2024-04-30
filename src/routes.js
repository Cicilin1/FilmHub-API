import { Router } from "express";
import { getHello } from "./controllers/MovieController.js";

const routes = Router()

routes.get('/', getHello) 


export default routes;