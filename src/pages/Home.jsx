import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react"

import '../styles/movieGrid.css'

const apiURL = import.meta.env.VITE_API_URL
const apiKEY = import.meta.env.VITE_API_KEY

const Home = () => {

    const [topRated, setTopRated] = useState([])

    const getTopRated = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setTopRated(data.results)
    }

    useEffect(() => {
        getTopRated(`${apiURL}top_rated?${apiKEY}`)
    }, [])


    return (
        <div className="container">
            <h2 className="title">Melhores filmes:</h2>
            <div className="movies-container">
                {topRated.length === 0 && <p>Carregando...</p>}
                {topRated && topRated.map(movie => 
                    <MovieCard 
                        key={movie.id}
                        movie = {movie}
                        showLink = {true}
                    />
                )}
            </div>
        </div>
    )
}

export default Home