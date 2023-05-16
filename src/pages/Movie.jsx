import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {
  BsGraphUp, BsWallet2, BsHourglassSplit, BsFillFileEarmarkTextFill
} from "react-icons/bs"
import MovieCard from "../components/MovieCard"

const apiURL = import.meta.env.VITE_API_URL
const apiKEY = import.meta.env.VITE_API_KEY

import '../styles/movie.css'

const Movie = () => {

  const { id } = useParams()
  const [movie, setMovie] = useState(null)

  const getMovie = async (url) => {
    const res = await fetch(url)
    const data = await res.json()

    setMovie(data)
  }

  const formatCorrency = (number) => {
    return number.toLocaleString("en-US", {
      style: 'currency',
      currency: 'usd'
    })
  }

  useEffect(() => {
    getMovie(`${apiURL}${id}?${apiKEY}`)
  }, [])


  return (
    <div className="movie-page">

        {movie && <>
          <MovieCard
            movie={movie}
            key={movie.id}
            showLink= {false} 
            />
          <p className="tagline">{movie.tagline}</p>
          <div className="info">
            <h3><BsWallet2 />Orçamento</h3>
            <p>{formatCorrency(movie.budget)}</p>
          </div>
          <div className="info">
            <h3><BsGraphUp />Receita</h3>
            <p>{formatCorrency(movie.revenue)}</p>
          </div>
          <div className="info">
            <h3><BsHourglassSplit />Duração</h3>
            <p>{movie.runtime} minutos</p>
          </div>
          <div className="info description ">
            <h3><BsFillFileEarmarkTextFill />Descrição</h3>
            <p>{movie.overview}</p>
          </div>
        </>
        }
    </div>
  )
}

export default Movie