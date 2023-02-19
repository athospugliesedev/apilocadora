import { Router } from "express";
import { CreateMovieRentController } from "../modules/movies/createMovieRent/CreateMovieRentController";
import { CreateMovieController } from "../modules/movies/useCases/createMovie/CreateMovieController";

const createMovieController = new CreateMovieController();
const createMovieRentController = new CreateMovieRentController();

const movieRoutes = Router();

movieRoutes.post("/", createMovieController.handle);
movieRoutes.post("/rent", createMovieRentController.handle);

export { movieRoutes };