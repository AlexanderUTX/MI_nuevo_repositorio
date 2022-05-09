//nombres de componentes tienen que comenzar con mayuscula
import {useState, useEffect} from "react"
import List from "./components/List"
const App = () =>{
  //todos los archivos que utilicemos debe estar en la carpeta src
  //todo componente debe tener un return
  //dentro del return estara el JSX el simbolo en parentesis
  // el return solo puede retornar un elemento de HTML
  //los estados de un componente son inmutables

  //let [estadi, FuncionQueActualizaElEstado]=useState(estadoInicial)

  let [contador,setContador] = useState(0);
  let [nombre, setNombre] = useState("Alexander")


  let miTexto="Hola desde Javascript!!"
  // para ecribir esto en el JSX se usa{}

  let subtitulo = "Lista subtitulo"
  useEffect(() => {
    console.log("Cambie el estado")
  }, [nombre])
  const saludo = () =>{
    return "Hola desde una función"
  }
  return(
    <>
    <div>
      <p>Hola Mundo!</p>
    </div>
    <div>
      <p>{miTexto}</p>
      <p>{saludo()}</p>
      <p>contador: {contador}</p>
      <p>nombre: {nombre}</p>
    </div>
    <button onClick={() => {setContador(contador ++)}}>
      Aumentar
    </button>
    <button onClick={() => {setNombre("Alexander Bolivar")}}>
    Cambiar Nombre
    </button>
    <hr/>
    {/* ojo: cuando ponemos etiquetas tenemos que asegurarnos que este cerrado */}
    <List subtitle = {subtitulo}/>
    <List/>
    <List/>
    </>
  )
}
// todo compenete debe ser exportado por defecto
 export default App















































// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
