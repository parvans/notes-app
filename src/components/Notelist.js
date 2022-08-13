import React from 'react'
import Addnotes from './Addnotes'
import Notes from './Notes'

function Notelist({ notes, handleAddnotes, handleDelete }) {
  return (
    <div className="notes-list">
    {/*here we are going to use .map to make each note card from notes
    and also passing the functions and other states as propas*/}
    {notes.map((note) => (
      <Notes
        id={note.id}
        text={note.text}
        date={note.date}
        handleDelete={handleDelete}
      />
    ))}
    <Addnotes handleAddnotes={handleAddnotes} />
  </div>

  )
}

export default Notelist
