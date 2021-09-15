
import React, { useContext} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';
const element =  <FontAwesomeIcon icon= {faHeart}/>

const CardPlanets = (props) => {

const{actions} = useContext(Context)

const Agregarelementos = () => {
  const nombre = props.data.name
  actions.getLista(nombre)
}


  return (
    <div className = "d-flex flex-row">
      <div className="card m-3 w-20" style = {props.style}>
        <img src={props.image} className="card-img-top" alt="..." />
        <div className="card-body pb-2">
          <h5 className="card-title gold" value= {props.data.name}>Name: {props.data.name}</h5>
          <p className="card-text">Population: {props.data.population}</p>
          <p className="card-text">Terrain: {props.data.terrain}</p>
        </div>
        <div className="d-flex justify-content-between mb-3 px-3 mt-0">
            <Link to={"/Planetsinfo?nombre="+ props.data.name+ "&population=" + props.data.population + "&terrain=" + props.data.terrain} className="btn btn-primary px-4">Learn More!</Link>
            <span className = "icono" onClick ={Agregarelementos}>{element}</span>  
        </div>
      </div>
  </div>
  
  )
}
  export default CardPlanets