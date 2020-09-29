import React, { Fragment } from 'react';

const Formulario = () => {
    return ( 
        <Fragment>
            <h2>Crear cita</h2>
            <form>
                <label>Nombre mascota</label>
                <input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota"/>
            </form>
            <form>
                <label>Nombre dueño</label>
                <input type="text" name="dueño" className="u-full-width" placeholder="Nombre Dueño de la mascota"/>
            </form>
            <form>
                <label>Fecha</label>
                <input type="date" name="fecha" className="u-full-width"/>
            </form>
            <form>
                <label>Hora</label>
                <input type="time" name="mascota" className="u-full-width"/>
            </form>
        </Fragment>
     );
}
 
export default Formulario;