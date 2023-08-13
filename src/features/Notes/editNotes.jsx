import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectNotesById } from "./notesApiSlice";
import { selectAllUser } from "../users/usersApiSlice";
import EditNoteForm from "./EditNoteForm";

const EditNote = () => {
  const { id } = useParams();

  const note = useSelector((state) => selectNotesById(state, id));
  const users = useSelector(selectAllUser);

  const content =
    note && users ? (
      <EditNoteForm note={note} users={users} />
    ) : (
      <p>Loading...</p>
    );

  return content;
};
export default EditNote;
