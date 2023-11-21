// Cada vez que creemos una carpeta o archivo con algun componente debemos importar react
import React from 'react'

// importamos los estilos
import './task-item.css'

//Importación de iconos
import { FaRegCircle, FaTrash } from "react-icons/fa";


// componente de los items de tareas, el cual recibe las priopiedades de manera desestructurada
const TaskItem = ({ nombre, descipcion, fechaInicio, fechaCierre }) => {

    return (

        <div className='container'>

            <div className='box'>

                <div className='circle-box'>
                    <FaRegCircle className='circle-icon' />
                </div>

                <div className='task-item1'>
                    <span className='title'>{nombre}</span>
                    <span className='description'>{descipcion}</span>
                    <div className='fechas'>
                        <span className='fecha-inicio'>{fechaInicio} | </span>
                        <span className='fecha-cierre'>{fechaCierre}</span>
                    </div>
                </div>

                <div className='trash-icon'>
                    <FaTrash />
                </div>

            </div>

            <div className='box'>

                <div className='circle-box'>
                    <FaRegCircle className='circle-icon' />
                </div>

                <div className='task-item1'>
                    <span className='title'>{nombre}</span>
                    <span className='description'>{descipcion}</span>
                    <div className='fechas'>
                        <span className='fecha-inicio'>{fechaInicio} | </span>
                        <span className='fecha-cierre'>{fechaCierre}</span>
                    </div>
                </div>

                <div className='trash-icon'>
                    <FaTrash />
                </div>

            </div>

            <div className='box'>

                <div className='circle-box'>
                    <FaRegCircle className='circle-icon' />
                </div>

                <div className='task-item1'>
                    <span className='title'>{nombre}</span>
                    <span className='description'>{descipcion}</span>
                    <div className='fechas'>
                        <span className='fecha-inicio'>{fechaInicio} | </span>
                        <span className='fecha-cierre'>{fechaCierre}</span>
                    </div>
                </div>

                <div className='trash-icon'>
                    <FaTrash />
                </div>

            </div>

            
            <div className='box'>

                <div className='circle-box'>
                    <FaRegCircle className='circle-icon' />
                </div>

                <div className='task-item1'>
                    <span className='title'>{nombre}</span>
                    <span className='description'>{descipcion}</span>
                    <div className='fechas'>
                        <span className='fecha-inicio'>{fechaInicio} | </span>
                        <span className='fecha-cierre'>{fechaCierre}</span>
                    </div>
                </div>

                <div className='trash-icon'>
                    <FaTrash />
                </div>

            </div>



        </div>


    )
}

// lo exportamos al app.jsx para que tome este componente
export { TaskItem }
