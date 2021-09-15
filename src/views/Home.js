
import React, { useEffect,  useContext } from 'react';
import Card from "../components/CardPersonajes"
import CardPlanets from '../components/CardPlanets';
import { Context } from '../store/appContext';
import CardTransport from '../components/CardVehicles';

const Home = () => {
    const{store, actions} = useContext(Context)

    useEffect(() => {
        actions.getPeople()
        actions.getPlanets()
        actions.getTransport()
          })
    
   const fotospersonaje= ["https://picsum.photos/id/1001/400/300", "https://picsum.photos/id/1002/400/300", "https://picsum.photos/id/1003/400/300","https://picsum.photos/id/1004/400/300", "https://picsum.photos/id/1005/400/300", "https://picsum.photos/id/1006/400/300","https://picsum.photos/id/10/400/300", "https://picsum.photos/id/1008/400/300", "https://picsum.photos/id/1009/400/300", "https://picsum.photos/id/1010/400/300"]

   const fotosplaneta = ["https://picsum.photos/id/201/400/300", "https://picsum.photos/id/202/400/300", "https://picsum.photos/id/203/400/300","https://picsum.photos/id/204/400/300", "https://picsum.photos/id/305/400/300", "https://picsum.photos/id/206/400/300","https://picsum.photos/id/307/400/300", "https://picsum.photos/id/208/400/300", "https://picsum.photos/id/209/400/300", "https://picsum.photos/id/220/400/300"]

   
   const fotostransporte = ["https://picsum.photos/id/610/400/300", "https://picsum.photos/id/602/400/300", "https://picsum.photos/id/603/400/300","https://picsum.photos/id/604/400/300", "https://picsum.photos/id/605/400/300", "https://picsum.photos/id/606/400/300","https://picsum.photos/id/607/400/300", "https://picsum.photos/id/608/400/300", "https://picsum.photos/id/609/400/300", "https://picsum.photos/id/610/400/300"]
    
   return(
    <>
    <div className = "container">

        <h1 className = "m-3 text-danger">Characters</h1>
        <div className = "d-flex">
        {store.people.map((personaje, i) => <Card data={personaje} key={i} indice={i} image ={fotospersonaje[i]}/>)} 
        </div>
        <h1 className = "m-3 text-danger">Planets</h1>
        <div className = "d-flex">
        {store.planets.map((planeta, i) => <CardPlanets data={planeta} key={i} indice={i} image={fotosplaneta[i]}/>)} 
        </div>
        <h1 className = "m-3 text-danger">Vehicles</h1>
        <div className = "d-flex">
        {store.transport.map((transportes, i) => <CardTransport data={transportes} key={i} indice={i} image={fotostransporte[i]}/>)} 
        </div>
       
    </div>
    </>
);

}

export default Home