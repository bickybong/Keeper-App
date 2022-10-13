import React, {useState} from "react";
import Heading from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

const [notes, setNotes] = useState([])

function addNotes(title, content){
  setNotes((prevNotes) =>{
    return [prevNotes, {title, content}]
  })
}

function App() {
  return (
    <div>
      <Heading />
      <CreateArea 
        addNotes = {addNotes}
      />
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
