export const getState = ({getActions, getStore, setStore }) => {
    return {
        store: {
            people: [],
            planets: [],
            transport:[],
            Lista: [],
        },
        actions: {
            getPeople: () => {
                fetch("https://swapi.dev/api/people", {
                    method:"GET",
                    headers: {"Content-Type": "application/json"}
                }).then(respuesta => respuesta.json())
                .then(dato => setStore({people: dato.results}))
               }, 
               getPlanets: () => {
                fetch("https://swapi.dev/api/planets", {
                    method:"GET",
                    headers: {"Content-Type": "application/json"}
                }).then(respuesta => respuesta.json())
                .then(dato => setStore({planets: dato.results}))
               },
               getTransport: () => {
                fetch("https://swapi.dev/api/starships", {
                    method:"GET",
                    headers: {"Content-Type": "application/json"}
                }).then(respuesta => respuesta.json())
                .then(dato => setStore({transport: dato.results}))
               },
               
               getLista: (item) => {
                   const store = getStore()
                   if(store.Lista.includes(item)){
                       alert("Valor ya incluido")
                   } else {setStore({Lista: store.Lista.concat(item)})}
                   
               },
               removerlista : (i) => { 
                //getActions().getLista("Felipe"). Ejecutar a la funcion GetLista y agregar Felipe a la Lista.
                const store = getStore()
                const nuevoArray = store.Lista.filter((item, indice) => {
                return indice !== i 
              }) 
              setStore({Lista: nuevoArray})
             },
            
             } 
            }}   
