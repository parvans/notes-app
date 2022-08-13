import './App.css';
import {nanoid} from 'nanoid'
import {useState,useEffect} from 'react'
import Header from './components/Header';
import Search from './components/Search';
import Notelist from './components/Notelist';

export default function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note",
      date: "03/11/2021"
    },
    {
      id: nanoid(),
      text: "This is my second note",
      date: "03/11/2021"
    },
    {
      id: nanoid(),
      text: "This is my first note",
      date: "03/11/2021"
    }
  ]);
  // search notes
  const [searcNotes, setSearch] = useState("");
  const [darkMode, setDarkmode] = useState(false);

  // this are the staes for searching text and toggle mode
  useEffect(() => {
    const saveNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));
    if (saveNotes) {
      setNotes(saveNotes);
    }
  }, []);
  // Adding New Notes

  function AddingNotes(txt) {
    const adddate = new Date();
    const newNote = {
      id: nanoid(),
      text: txt,
      date: adddate.toLocaleDateString()
    };
    const newNotess = [...notes, newNote];
    setNotes(newNotess);
  }
  // Deleting New Notes
  function DeleteNotes(id) {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }
  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleMode={setDarkmode}/>
        <Search handleSearch={setSearch}/>
        <Notelist
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searcNotes)
          )}
          handleAddnotes={AddingNotes}
          handleDelete={DeleteNotes}
        />
      </div>
    </div>
  );
}

