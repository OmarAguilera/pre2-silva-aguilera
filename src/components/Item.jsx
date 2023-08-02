import {Link} from "react-router-dom";

export function Item({candy}){
    return (
        <div className="item">
            <h4>{candy.product_name}</h4>
            <img src={candy.photo} alt={candy.name} />
            <h5>${candy.price}</h5>
            <Link className="info" to={`/item/${candy.id}`}>Más información</Link>
        </div>
    )
}