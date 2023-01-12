import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Fab } from '@mui/material';
import { Zoom } from '@mui/material';
function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const [expand,setExpand]=useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function handleClick(){
   return  setExpand(true);
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
    
      <form className="create-note">
      {expand && (
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        /> )}
        <textarea
          name="content"
          onClick={handleClick}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        /> 
        {expand && (
        <Zoom in='true'>
        <Fab onClick={submitNote}> <AddIcon /> </Fab>
        </Zoom> )} 
      </form>
    </div>
  );
}

export default CreateArea;
