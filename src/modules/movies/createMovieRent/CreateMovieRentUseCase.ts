import { AppError } from "../../../errors/AppError";
import { prisma } from "../../../prisma/client";
import { CreateMovieRentDTO } from "../dtos/CreateMovieRentDTO";

export class CreateMovieRentUseCase{
    async execute({ movieId, userId}: CreateMovieRentDTO): Promise<void>{

        const movieExists = await prisma.movie.findUnique({
            where: {
                id: movieId
            }
        });
        if(!movieExists){
            throw new AppError("Filme não existe!");
        }

        const movieAlreadyRented = await prisma.movieRent.findFirst({
            where: {
                movieId
            }
        });

    if(movieAlreadyRented){
        throw new AppError("Filme alugado!");
    }

    const userExists = await prisma.user.findUnique({
        where: {
            id: userId
        }
    });

    if (!userExists){
        throw new AppError("Usuário não existe!")
    }

    await prisma.movieRent.create({
        data: {
            movieId,
            userId,
        },
    });

    }
}