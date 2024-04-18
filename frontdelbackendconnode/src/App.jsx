import { useState, useEffect } from "react"; // Para el manejo de estados
import axios from "axios"; // Para la conexión con el backend
// Importamos nuestros componentes
import Header from "./components/Header";
import List from "./components/List";
import Formulario from "./components/Formulario";

const baseUrl = "http://localhost:3001/api/notes";

const App = () => {
  // Se declara el estado de la lista de notas como un array vacío
  const [notes, setNotes] = useState([]);

  // Se utiliza useEffect para obtener las notas de la API una vez después del renderizado inicial
  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      // Se actualiza el estado de las notas con los datos recibidos de la API
      setNotes(response.data);
    });
  }, []);

  // Función para manejar la creación de una nueva nota
  const handleNewNote = (newNote) => {
    // Se actualiza el estado de las notas agregando la nueva nota al final del array
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
    <div style={{ padding: "20px", borderRadius: "10px", border: "4px dotted #ccc", width: "50%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <Header />
      <List notes={notes} />
      <Formulario onNewNote={handleNewNote} />
    </div>
  </div>
  );
};

export default App;

