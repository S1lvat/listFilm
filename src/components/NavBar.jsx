import { useState} from "react"
import { Link, useNavigate } from "react-router-dom"
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi"

import "../styles/NavBar.css"

const NavBar = () => {

  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    let searchUp1 = search.split(" ")

    for(let i=0; i < searchUp1.length; i++) {
      searchUp1[i] = searchUp1[i].charAt(0).toUpperCase() + searchUp1[i].slice(1)
    }

    const searchup2 = searchUp1.join(' ')
    
    if(!search){
      return
    } 
     navigate(`/search?q=${searchup2}`)

     setSearch('')
  }

  return (
    <nav id="navBar">
      <h2>
        <Link to={'/'}>
          <BiCameraMovie /> FilmList
        </Link>
      </h2>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Pesquise um filme" 
                onChange={e => { setSearch(e.target.value)}} 
                value={search}
                />
        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </form>

    </nav>
  )
}

export default NavBar
