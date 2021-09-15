
import React, { useContext } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';
const element =  <FontAwesomeIcon icon= {faHeart} />

//{"/Info/" + props.indice} 
 const Card = (props) => {
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
          <p className="card-text">Gender: {props.data.gender}.</p>
          <p className="card-text">Hair Color: {props.data.hair_color}.</p>
          <p className="card-text">Eye Color: {props.data.eye_color}.</p>
        </div>
        <div className="d-flex justify-content-between mb-3 px-3">
            <Link to={"/Info?nombre="+ props.data.name+ "&gender=" + props.data.gender + "&haircolor=" + props.data.hair_color+ "&eyecolor=" + props.data.eye_color }className="btn btn-primary px-4">Learn More!</Link>
            <span className = "icono" onClick ={Agregarelementos}>{element}</span> 
        </div>
      </div>
  </div>
  )
}
  
export default Card
