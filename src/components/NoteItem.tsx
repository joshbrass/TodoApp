import { Link } from 'react-router-dom';

interface Note {
  id: string;
  title: string;
  date: string;
}

interface NoteItemProps {
  note: Note;
}

const NoteItem: React.FC<NoteItemProps> = ({ note }) => {
  return (
    <Link to={`/edit-note/${note.id}`} className="note">
      <h4>
        {note.title.length > 30 ? note.title.substr(0, 30) + '...' : note.title}
      </h4>
      <p>{note.date}</p>
    </Link>
  );
};

export default NoteItem;
