import { Link } from "react-router-dom";

function Card({titulo, texto, link = "/", linktexto="Ver post"}){
    return (
        <>
            <div className="card mb-4" >
                <div className="card-body">
                    <h3 className="card-titulo">{titulo}</h3>
                    <p className="card-texto">{texto}</p>
                    <Link to={linktexto} className="btn btn-primary">Ver post</Link>
                </div>
            </div>
        </>
        
    );
}

export default Card;