

export default function TareaComponents({tarea, eliminarTarea, indice}) {
  return (
    <li>
        <span>{tarea}</span>
        <button onClick={(e) =>{eliminarTarea(indice)}}>
            Eliminar
        </button>
    </li>
  )
}
