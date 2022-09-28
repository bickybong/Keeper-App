import React from "react";
import Heading from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes"

function App() {
  return (
    <div>
      <Heading />
      {notes.map((obj) => 
        <Note 
          key = {obj.key}
          title = {obj.title}
          content = {obj.content}
        />
      )}
     
      <Footer />
    </div>
  );
}

export default App;
