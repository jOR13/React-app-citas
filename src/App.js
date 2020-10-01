import React, { Fragment, useState } from "react";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";
function App() {
  //Arreglo de citas
  const [citas, guardarCitas] = useState([]);

  //FUncion que toma las citas actuales y agregue la nueva

  const crearCita = (cita) => {
    guardarCitas([...citas, cita]);
  };

  return (
    <Fragment>
      <h1>Admin</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">
            <h1>Administra tus citas</h1>
            {citas.map((cita) => (
              <Cita key={cita.id} cita={cita} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
