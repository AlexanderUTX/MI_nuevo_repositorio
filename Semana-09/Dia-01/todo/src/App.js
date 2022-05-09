import {useState} from "react";
import TareaComponents from "./Components/TareaComponents";
import InputTareaComponent from "./Components/InputTareaComponent";

export default function App() {
    const [tareas, setTareas] = useState(["Bañar al perro"]);
    const [nuevatarea, setNuevaTarea] = useState("");
    const agregarTarea = () =>{
        setTareas([...tareas, nuevatarea])
    }
    const eliminarTarea = (indice) => {
        let tareasTmp = [...tareas]
        tareasTmp.splice(indice, 1)
        setTareas(tareasTmp)
      }

  return (
    <div>
        <h1>ToDo App</h1>
        {tareas.map((item, i) => (
            <TareaComponents
                key={i}
                tarea ={item}
                eliminarTarea={eliminarTarea} 
                indice={i}       
            />
        ))}
        <InputTareaComponent
        nuevatarea={nuevatarea}
        setNuevaTarea={setNuevaTarea}
        agregarTarea={agregarTarea}
        />
    </div>
  );
}
