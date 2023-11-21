import React from 'react'

// se importa el index css para los estilos
import './index.css'

// se importan los 3 componentes a utilizar
import { TaskForm, TaskItem, TaskList } from './components'


function App() {

  // Acá llamo a mis componentes y funciones creadas dentro de un div padre
  return (

    <div className='padre'>
      <TaskList></TaskList>

      <TaskItem nombre='Trabajo' descipcion='Mandar mensaje a Vivian' fechaCierre='Marzo 20, 2023' fechaInicio='Marzo 17, 2023'></TaskItem>

      <TaskForm></TaskForm>

    </div>

  )
}

export default App


