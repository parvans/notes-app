import React,{useState} from 'react'

function Addnotes({handleAddnotes}) {
    //adding new notes
    const [noteText, setNotetext] = useState("");
    // here I have fixed the note input limit with 300 characters ,
    //but you can change this limit
    const limit = 100;
    const handleChange = (event) => {
      //with typing the character limit will change with the input text's length
      if (limit - event.target.value.length >= 0) {
        setNotetext(event.target.value);
      }
    };
    //this is for saving the new note
  
    const handleSaveClick = () => {
      //if there's no character in input , then we will not save the note*/}
      if (noteText.trim().length > 0) {
        handleAddnotes(noteText);
        setNotetext("");
      }
    };
  
  return (
    <div className="newnotes">
    <textarea
      placeholder="Write Something..."
      cols="30"
      rows="10"
      onChange={handleChange}
      value={noteText}
    ></textarea>
    <div className="notefooter">
      <small>{limit - noteText.length} Remaining</small>
      <div></div>
       <button className="save" onClick={handleSaveClick}>
        Save
      </button>
    </div>
  </div>
  )
}

export default Addnotes
