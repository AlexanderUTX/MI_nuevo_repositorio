import React from 'react'
import {useState} from "react"



export default function App() {
  const[tareas, setTareas] = useState(["lavar la ropa", "comprar te","juntarse con amigos"])
  const [nuevaTarea, setNuevaTarea] = useState("")

  const agregarTarea = () => {
    // let tareasTmp = [...tareas]
    // console.log({tareasTmp})
    // tareasTmp.push(nuevaTarea)
    // setTareas(tareasTmp)
    setTareas([...tareas, nuevaTarea])
  }

  const eliminarTarea = (indice) => {
    let tareasTmp = [...tareas]
    tareasTmp.splice(indice, 1)
    setTareas(tareasTmp)
  }

  return (
    <>
    <div>
      <h1>ToDo App</h1>
      <ul>
      {tareas.map ((item, i) =>(
        <div key={i}>
        <li>{item}</li>
        <button onClick={() => {eliminarTarea(i)}}>
          Eliminar
          </button>
        </div>
      ))}
      </ul>
      <input
      type="text"
      placeholder="Lavar Ropa"
      value={nuevaTarea}
      onChange={(e)=>{setNuevaTarea(e.target.value)}}
      />
      <button onClick={()=>{agregarTarea()}}>
        Añadir Tarea
      </button>
     </div>
    </>
  )
}
