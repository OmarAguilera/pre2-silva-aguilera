import { Link } from "react-router-dom";
import { CartWidget } from "./CartWidget";

let linkStyles = { display: "flex", justifyContent: "center", marginLeft: "35px", fontSize: "20px" };
let menuStyles = { textDecoration: "none", listStyleType: "none", color: "inherit", marginRight: "10px", color: "brown" };

export function NavBar(){
  return(
    <nav >
      <CartWidget/>
      <ul style={linkStyles}>
        <li style={menuStyles}><Link to="/">Home</Link></li>
        <li style={menuStyles}><Link to="/category/chocolates">Chocolates</Link></li>
        <li style={menuStyles}><Link to="/category/gummies">Gummies</Link></li>
        <li style={menuStyles}><Link to="/profile">Profile</Link></li>
      </ul>
    </nav>
  )
}