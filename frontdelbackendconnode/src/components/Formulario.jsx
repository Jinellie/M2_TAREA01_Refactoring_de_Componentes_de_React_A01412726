import { useState } from "react";
import axios from "axios";
import "../App.css";
import PropTypes from "prop-types";

const baseUrl = "http://localhost:3001/api/notes";

const Formulario = ({ onNewNote }) => {
  // Declaramos una variable de estado `newNote` para almacenar el contenido de la nueva nota usando useState
  const [newNote, setNewNote] = useState("");

  // Función para manejar los cambios en el campo de entrada
  const handleNoteChange = (event) => {
    // Actualizamos el estado `newNote` con el nuevo valor del campo de entrada
    setNewNote(event.target.value);
  };

  // Función para manejar el envío del formulario (agregar una nueva nota)
  const addNote = async (event) => {
    event.preventDefault(); // Evita el comportamiento predeterminado del envío del formulario

    // Creamos un nuevo objeto de nota con contenido, indicador de importancia y marca de tiempo
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5, // Establece la importancia aleatoriamente
      date: new Date().toISOString(),
    };

    try {
      // Enviamos una solicitud POST al end-point de la API con el nuevo objeto de nota
      const response = await axios.post(baseUrl, noteObject);

      // Llamamos a la función `onNewNote` del componente padre para pasar los datos de la nueva nota agregada
      onNewNote(response.data);

      // Reiniciamos el estado `newNote` para limpiar el campo de entrada
      setNewNote("");
    } catch (error) {
      console.error("Error al agregar la nota:", error);
    }
  };

  return (
    <div style={{ padding: "20px", borderRadius: "10px", border: "4px solid #ccc" }}>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit" style={{ backgroundColor: "teal", color: "white" }}>guardar</button>
      </form>
    </div>
  );
};

Formulario.propTypes = {
  onNewNote: PropTypes.func.isRequired,
};

export default Formulario;
