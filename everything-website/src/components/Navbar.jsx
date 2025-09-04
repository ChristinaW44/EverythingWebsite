import {Link} from "react-router-dom"

export function Navbar(){

    return(<>
        <Link to="/">Home</Link>
        <Link to="/games">Games</Link>
        <Link to="/jobs">Jobs</Link>
    </>)

}