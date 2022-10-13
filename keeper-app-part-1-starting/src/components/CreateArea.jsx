import React, {useState} from "react";

function CreateArea(props) {
    const [titleText, setTitleText] = useState("")
    const [contentText, setContentText] = useState("")

    function handleTitle(event){
        const titleToAdd = event.target.value
        setTitleText(titleToAdd)
    }

    function handleContent(event){
        const titleToAdd = event.target.value
        setContentText(titleToAdd)
        console.log(contentText);
    }

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={handleTitle} value={titleText}/>
        <textarea name="content" placeholder="Take a note..." rows="3" value={contentText} onChange={handleContent}/>
        <button onClick={()=>{
            props.addNotes(titleText,contentText)}}>
            Add</button>
      </form>
    </div>
  );
}

export default CreateArea;