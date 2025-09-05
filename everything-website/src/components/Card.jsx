import {Link} from "react-router-dom"

export function Card(props){
    return(
        
            <div key={props.id} className="card">
                <Link to="/" className="card-link">
                    <div className="card-link">
                        <h3>{props.heading}</h3>
                        <p>{props.description}</p>
                    </div>
                </Link>
            </div>
        
    );
}