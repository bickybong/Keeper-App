import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [clickState, setClickState] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function changeClickState() {
    setClickState(true);
  }

  return (
    <div>
      <form className="create-note">
        {clickState ? (
          <input
            name="title"
            placeholder="Title"
            onChange={handleChange}
            value={note.title}
          />
        ) : null}

        <textarea
          onClick={changeClickState}
          name="content"
          placeholder="Take a note..."
          rows={clickState ? "3" : "1"}
          value={note.content}
          onChange={handleChange}
        />
        <Zoom in={clickState}>
          <Fab
            onClick={(e) => {
              props.addNotes(note);
              setNote({
                title: "",
                content: "",
              });
              e.preventDefault();
            }}
          >
            <AddCircleIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
