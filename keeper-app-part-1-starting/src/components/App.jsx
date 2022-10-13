import React, { useState } from "react";
import Heading from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  const [id, setId] = useState(0);

  function addNotes(title, content) {
    setNotes((prevNotes) => {
      return [...prevNotes, { id, title, content }];
    });
    setId(id + 1);
  }

  function deleteNotes(id) {
    console.log(id);
    setNotes((prevNotes) => {
      return prevNotes.filter((item, index) => {
        return index !== id;
      });
    });
  }

  // function deleteItem(id) {
  //   setItems((prevItems) => {
  //     return prevItems.filter((item, index) => {
  //       return index !== id;
  //     });
  //   });
  // }

  return (
    <div>
      <Heading />
      <CreateArea addNotes={addNotes} />
      {notes.map((obj) => (
        <Note
          key={obj.id}
          id={obj.id}
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
