
import React, { useContext } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';
const element =  <FontAwesomeIcon icon= {faHeart} />

//{"/Info/" + props.indice} 
 const CardTransport = (props) => {
  const{actions} = useContext(Context)

  const Agregarelementos = () => {
    const nombre = props.data.name
    actions.getLista(nombre)
  }

  return(
    <div className = "d-flex flex-row">
      <div className="card m-3 w-20">
        <img src= {props.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title gold">Name: {props.data.name} </h5>
          <p className="card-text">Model: {props.data.model}.</p>
          <p className="card-text">Manufacturer: {props.data.manufacturer}.</p>
          <p className="card-text">Crew: {props.data.crew}.</p>
          <p className="card-text">Passengers: {props.data.passengers}.</p>
        </div>
        <div className="d-flex justify-content-between mb-3 px-3">
            <Link to= {"/Vehiclesinfo?nombre="+ props.data.name+ "&model=" + props.data.model + "&manufacturer=" + props.data.manufacturer + "&crew=" + props.data.crew + "&passengers=" + props.data.passengers }className="btn btn-primary px-4">Learn More!</Link>
            <span className = "icono" onClick ={Agregarelementos}>{element}</span> 
        </div>
      </div>
  </div>
  )
}
  
export default CardTransport