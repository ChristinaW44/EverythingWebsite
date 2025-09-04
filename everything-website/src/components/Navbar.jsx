import {Link} from "react-router-dom"

export function Navbar(){

    return(
        <div className="nav-container">
            <span className="navbar">
                <Link to="/">
                    <button className="nav-left">Home</button>
                </Link>
                <Link to="/games">
                    <button>Games</button>
                </Link>
                <Link to="/jobs">
                    <button className="nav-right">Jobs</button>
                </Link>
            </span>
        </div>
    )

}