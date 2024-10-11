import { MdClose } from 'react-icons/md';
import { BsSearch, BsPlusLg } from "react-icons/bs";
import { Link } from "react-router-dom";
import NoteItem from '../components/NoteItem';
import { useEffect, useState } from "react";

interface Note {
  id: string;
  title: string;
  details: string;
  date: string;
}

interface NotesProps {
  notes: Note[];
}

const Notes: React.FC<NotesProps> = ({ notes }) => {
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [text, setText] = useState<string>('');
  const [filteredNotes, setFilteredNotes] = useState<Note[]>(notes);

  const handleSearch = () => {
    setFilteredNotes(
      notes.filter(note => 
        note.title.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  useEffect(handleSearch, [text, notes]); // Added notes to dependency array

  return (
    <section>
      <header className="notes__header">
        {!showSearch && <h2>My Notes</h2>}
        {showSearch && (
          <input
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              handleSearch();
            }}
            autoFocus
            placeholder='Keyword...'
          />
        )}
        <button className="btn" onClick={() => setShowSearch(prevState => !prevState)}>
          {showSearch ? <MdClose /> : <BsSearch />}
        </button>
      </header>
      <div className="notes__container">
        {filteredNotes.length === 0 && <p className='empty__notes'>No Note found</p>}
        {filteredNotes.map(note => <NoteItem key={note.id} note={note} />)}
      </div>
      <Link to='/create-note' className="btn add__btn"><BsPlusLg /></Link>
    </section>
  );
};

export default Notes;
