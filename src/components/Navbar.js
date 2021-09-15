import  React, { useContext} from "react"
import { Link } from "react-router-dom";
import { Context } from '../store/appContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash} from "@fortawesome/free-solid-svg-icons";
const icon =  <FontAwesomeIcon icon= {faTrash}/>

export const Navbar = () => {
  const{store, actions} = useContext(Context)
  

  const Listaelem = store.Lista.map((item, indice) => {
    return <div key ={indice}>
              <li className="w-100">
                  <span>{item}</span>
                  <i className="m-2" onClick ={() => {
                    actions.removerlista(indice)}}>{icon}</i></li>
            </div>});
  
  return (
    <nav className="navbar gray container-fluid">
    <div className="container pb-3">
      <Link className="navbar-brand mx-3" to ="/">
        <img src ="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/375px-Star_Wars_Logo.svg.png" alt ="Imagen" className ="logo"></img>
      </Link>
      <div className="nav-item dropdown navbar bg-primary p-0">
          <a className="nav-link dropdown-toggle text-white" href="a" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Compras</a>
          <span className ="p-2 length">{Listaelem.length}</span> 
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <div className="dropdown-item pr-1">{Listaelem}</div> 
          </ul>
      </div>
    </div>
  </nav>
   
  );
}


