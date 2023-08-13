import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import store from "../../app/store";
import { userApiSlice } from "../users/usersApiSlice";
import { noteApiSlice } from "../Notes/notesApiSlice";

const Prefetch = () => {
  useEffect(() => {
    console.log("substring");

    //manual subscription to note and users

    const notes = store.dispatch(noteApiSlice.endpoints.getNotes.initiate());
    const users = store.dispatch(userApiSlice.endpoints.getUsers.initiate());

    //called when the component is unounted
    return () => {
      console.log("unscribing");
      notes.unsubscribe();
      notes.unsubscribe();
    };
  }, []);

  return <Outlet />;
};

export default Prefetch;
