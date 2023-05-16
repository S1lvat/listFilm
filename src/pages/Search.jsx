import { useEffect, useState } from "react"
import {  useSearchParams } from "react-router-dom"
import MovieCard from "../components/MovieCard"

import '../styles/movieGrid.css'
import '../styles/loading.css'
import '../styles/notfound.css'
import Loading from "../components/Loading"
import NotFound from "../components/NotFound"

const searchURL = import.meta.env.VITE_SEARCH
const apiKEY = import.meta.env.VITE_API_KEY


const Search = () => {
    const [searchParams] = useSearchParams()

    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoanding] = useState(false)

    const query = searchParams.get('q')

    const getSearchedmovies = async (url) => {
        setIsLoanding(true)
        
        const res = await fetch(url)
        const data = await res.json()
        
        console.log(data)
        setMovies(data.results)

        setIsLoanding(false)
    }
    
    useEffect(() => {
        getSearchedmovies(`${searchURL}?${apiKEY}&query=${query}`)
    }, [query])

    return (
        <div className="container">
            <h2 className="title">Resultados para: <span className="query-text">{query}</span></h2>
                {isLoading && <Loading />}

                {movies.length === 0 && <NotFound />}
            <div className="movies-container">

                {movies && movies.map(movie => 
                    <MovieCard 
                        key={movie.id}
                        movie = {movie}
                    />
                )}
            </div>
        </div>
    )
}

export default Search