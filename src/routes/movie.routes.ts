import { Router } from "express";
import { CreateMovieRentController } from "../modules/movies/createMovieRent/CreateMovieRentController";
import { CreateMovieController } from "../modules/movies/useCases/createMovie/CreateMovieController";
import { GetMoviesByReleaseDateUseController } from "../modules/movies/useCases/getMoviesByReleaseDate/GetMoviesByReleaseDateController";

const createMovieController = new CreateMovieController();
const getMoviesByReleaseDateUseController = new GetMoviesByReleaseDateUseController();
const createMovieRentController = new CreateMovieRentController();

const movieRoutes = Router();

movieRoutes.post("/", createMovieController.handle);
movieRoutes.get("/release", getMoviesByReleaseDateUseController.handle);
movieRoutes.post("/rent", createMovieRentController.handle);

export { movieRoutes };