import React, {useState} from "react";
import './task-list.css'
import { IoSearch } from "react-icons/io5";

const TaskList = () => {

    return(
        <div className="header">
            <h1 className="titulo-principal">Lista de tareas</h1>
            <hr />

            <div className="buscador">
                <IoSearch className="search-icon"/> <input type="search" name="" placeholder="Buscar tarea..."/>
            </div>
        </div>
    )
}

export {TaskList}