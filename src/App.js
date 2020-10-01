import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";
function App() {

  //citas en locaStorage

  let citasIniciales = JSON.parse(localStorage.getItem('citas'));

  if (!citasIniciales) {
    citasIniciales = [];
  } 

  

  //Arreglo de citas
  const [citas, guardarCitas] = useState(citasIniciales);

  //use efect para realizar ciertas operaciones cuando el state cambia
  useEffect (()=>{
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));
    if (citasIniciales) {
      localStorage.setItem('citas', JSON.stringify(citas))
    }else{
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [citas]);

  //FUncion que toma las citas actuales y agregue la nueva

  const crearCita = (cita) => {
    guardarCitas([...citas, cita]);
  };

  //funcion eliminar
  const eliminarCita = (id) => {
    console.log("Eliminando..." + id);
    const nuevasCitas = citas.filter((cita) => cita.id !== id);
    guardarCitas(nuevasCitas);
  };

  //Mensaje condicionado

  const mensaje =  citas.length === 0 ?  'Agrega una cita' : 'Administra tus citas'


  return (
    <Fragment>
      <h1>Admin</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">
            <h1>{mensaje}</h1>
            {citas.map((cita) => (
              <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
