import React, {useState} from "react"
import './task-form.css'

const TaskForm = () => {

    return (

        <div className='formulario'>

            <label htmlFor="titulo">Titulo: </label>
            <input type="text" id='titulo' placeholder='Ingrese el título de la tarea...' />

            <label htmlFor="descripcion">Descripción: </label>
            <input type="text" id="descripcion" minLength={10} maxLength={500}/>

            <label htmlFor="fechaInicio">Fecha de inicio: </label>
            <input type="date" id="fechaInicio"/>

            <label htmlFor="fechaCierre">Fecha de cierre: </label>
            <input type="date" id="fechaCierre"/>

            <button>Crear</button>
        </div>

    )
}

export { TaskForm }
