
import React, { useEffect, useContext } from 'react';
import { Context } from '../store/appContext';
import { useLocation } from 'react-router-dom';


function useQuery () {
  return new URLSearchParams(useLocation().search)
} 

const Cardinfo = (prop) => {

//const Param = useParams()
//const{store, actions} = useContext(Context)
const{actions} = useContext(Context)

useEffect(() => {
  actions.getPeople()
})

const query = useQuery()
return ( 
    <div className ="container">
    <div className="card mb-3 mt-4">
    <div className="row g-0">
      <div className="col-md-4">
        <img src="https://picsum.photos/id/99/400/300" className="img " alt="..." />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <p className="card-text align-items-center">  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis deleniti animi ipsa commodi repellat quam, distinctio eveniet fuga fugit minima magnam aperiam minus nulla sequi quo ratione ipsam consectetur! Neque!   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis deleniti animi ipsa commodi repellat quam, distinctio eveniet fuga fugit minima magnam aperiam minus nulla sequi quo ratione ipsam consectetur! Neque!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis deleniti animi ipsa commodi repellat quam, distinctio eveniet fuga fugit minima magnam aperiam minus nulla sequi quo ratione ipsam consectetur! Neque!</p>
        </div>
      </div>
    </div>
    </div>
    
    <div className = "d-flex justify-content-evenly mt-5">
      <div className ="d-flex flex-column align-items-center datosinfo">
          <p>Name</p>
          <p>{query.get("nombre")}</p>
      </div>
      <div className ="d-flex flex-column align-items-center datosinfo">
          <p>Gender</p>
          <p>{query.get("gender")}</p>
      </div>
      <div className ="d-flex flex-column align-items-center datosinfo">
          <p>Hair Color</p>
          <p>{query.get("haircolor")}</p>
      </div>
      <div className ="d-flex flex-column align-items-center datosinfo">
          <p>Eye Color</p>
          <p>{query.get("eyecolor")}</p>
      </div>
       
        
     
    </div>
    </div>

  
)}

export default Cardinfo 