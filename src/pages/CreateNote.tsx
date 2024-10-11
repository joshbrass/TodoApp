import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from 'react-icons/io';
import { useState, FormEvent } from "react";
import { v4 as uuid } from "uuid";
import useCreateDate from "../components/UseCreateDate";

interface CreateNoteProps {
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

interface Note {
  id: string;
  title: string;
  details: string;
  date: string;
}

const CreateNote: React.FC<CreateNoteProps> = ({ setNotes }) => {
  const [title, setTitle] = useState<string>('');
  const [details, setDetails] = useState<string>('');
  const date = useCreateDate();
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (title && details) {
      const note: Note = { id: uuid(), title, details, date };
      // Add this note to the notes array
      setNotes((prevNotes) => [note, ...prevNotes]);

      // Redirect to homepage
      navigate('/');
    }
  };

  return (
    <section>
      <header className="create-note__header">
        <Link to='/' className="btn">
          <IoIosArrowBack />
        </Link>
        <button className="btn lg primary" onClick={handleSubmit}>Save</button>
      </header>
      <form className="create-note_form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
        />
        <textarea
          rows={28}
          placeholder="Note details..."
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
      </form>
    </section>
  );
};

export default CreateNote;
