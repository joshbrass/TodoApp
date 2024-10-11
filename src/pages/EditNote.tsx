import { Link, useParams, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from 'react-icons/io';
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState, FormEvent } from "react";
import useCreateDate from "../components/UseCreateDate";

interface Note {
  id: string;
  title: string;
  details: string;
  date: string;
}

interface EditNoteProps {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const EditNote: React.FC<EditNoteProps> = ({ notes, setNotes }) => {
  const { id } = useParams<{ id: string }>();
  const note = notes.find((item) => item.id === id);
  const [title, setTitle] = useState<string>(note?.title || '');
  const [details, setDetails] = useState<string>(note?.details || '');
  const date = useCreateDate();
  const navigate = useNavigate();

  const handleForm = (e: FormEvent) => {
    e.preventDefault();

    if (title && details) {
      const newNote: Note = { ...note!, title, details, date };
      const newNotes = notes.map((item) => (item.id === id ? newNote : item));
      setNotes(newNotes);
    }

    // Redirect to home page
    navigate('/');
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete?')) {
      const newNotes = notes.filter((item) => item.id !== id);
      setNotes(newNotes);
      navigate('/');
    }
  };

  return (
    <section>
      <header className="create-note__header">
        <Link to='/' className="btn"><IoIosArrowBack /></Link>
        <button className="btn lg primary" onClick={handleForm}>Save</button>
        <button className="btn danger" onClick={handleDelete}><RiDeleteBin6Line /></button>
      </header>
      <form className="create-note_form" onSubmit={handleForm}>
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

export default EditNote;
