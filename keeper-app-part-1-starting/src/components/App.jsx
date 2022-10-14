import React, { useState } from "react";
import Heading from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNotes(note) {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });  }

  function deleteNotes(id) {
    console.log(id);
    setNotes((prevNotes) => {
      return prevNotes.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Heading />
      <CreateArea addNotes={addNotes} />
      {notes.map((obj, index) => (
        <Note
          key={index}
          id={index}
          title={obj.title}
          content={obj.content}
          deleteNotes={deleteNotes}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
