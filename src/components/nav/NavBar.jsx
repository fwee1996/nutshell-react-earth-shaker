import { Link } from "react-router-dom"
import "./NavBar.css"
import { useNavigate } from "react-router-dom"

export const NavBar = () => {
    const navigate = useNavigate()

    return ( <ul className="navbar">
        <li className="navbar-item">
        <Link to ="/home">Home</Link>
         </li>
        
         <li className="navbar-item">
            <Link to ="/news">News</Link>
        </li>
       
        <li className="navbar-item">
            <Link to ="/events">Events</Link>
        </li>
        <li className="navbar-item">
          <Link to ="/profile">My Profile</Link>
        </li>

        {localStorage.getItem("current_user") ? (
  <li className="navbar-item navbar-logout">
    <Link
      className="navbar-link"
      to=""
      onClick={() => {
        localStorage.removeItem("current_user")
        navigate("/", { replace: true })
      }}
    >
      Logout
    </Link>
  </li>
) : (
  ""
)}




    </ul>

    )
}
