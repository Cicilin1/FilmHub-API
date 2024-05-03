import Movie from '../models/Movie.js'
import Category from '../models/Category.js'

export const getMovie = async (req, res) => {
    const movies = await Movie.find();

    return res.status(200).json(movies);
}

export const getMovieAndCategories = async (req, res) => {
    const movies = await Movie.find();
    const categories = await Category.find();

    return res.status(200).json({ movies, categories });
}

export const createMovie = async (req, res) => {
    const movies = req.body

    const newMovies = movies.map(async (movie) => {
        await Movie.create(movie)
    })

    return res.status(201).json(newMovies)
}

export const deleteMovie = async (req, res) => {
    const { id } = req.params

    await Movie.findByIdAndDelete({ _id: id })
    return res.status(200).json({ response: 'Movie deleted' })
}

export const updateMovie = async (req, res) => {
    const { id } = req.params

    const updateMovie = req.body

    await Movie.findByIdAndUpdate({ _id: id }, updateMovie)
    return res.status(201).json({ response: 'Movie update' })
}