import { Link } from "react-router-dom"
import {FaStar} from "react-icons/fa"

const imgURL = import.meta.env.VITE_IMG

const MovieCard = (props) => {
    return(
        <div className="movie-card">
            <img src={imgURL + props.movie.poster_path} alt={props.movie.title}/>
            <h2>{props.movie.title}</h2>
            <p>
                <FaStar /> {props.movie.vote_average}
            </p>

            {props.showLink && <Link to={`movie/${props.movie.id}`}>Detalhes</Link>}
                
        </div>
    )
}

export default MovieCard