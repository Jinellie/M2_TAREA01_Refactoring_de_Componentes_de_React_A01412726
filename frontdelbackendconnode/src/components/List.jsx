import PropTypes from "prop-types";
import "../App.css"


const List = (props) => {

  return (
    <div className="center">
      <ul style={{ listStyle: "none", padding: "10px", margin: "10px", border: "1px solid #ddd", borderRadius: "5px" }}>
        {props.notes.map((note) => (
          <li key={note.id} style={{ padding: "5px", backgroundColor: "#f5f5f5", marginBottom: "5px" }}>
            {note.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

List.propTypes = {
    notes: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        content: PropTypes.string.isRequired,
        important: PropTypes.bool.isRequired,
        date: PropTypes.string
      })
    )
  };

export default List;
