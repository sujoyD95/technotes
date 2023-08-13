import { useState } from "react";

import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout";

import Public from "./components/public";

import Login from "./features/auth/login";

import DashLayout from "./components/dashLayout";

import Welcome from "./features/auth/welcome";

import UsersList from "./features/users/userList";

import NotesList from "./features/Notes/notesList";

import EditUser from "./features/users/editUser";
import NewUserForm from "./features/users/newUserForm";

import EditNotes from "./features/Notes/editNotes";
import NewNote from "./features/Notes/newNote";

import Prefetch from "./features/auth/prefetch";
import RequireAuth from "./features/auth/requireAuth";

import { ROLES } from "./config/roles";

function App() {
  return (
    <>
      <Routes>
        {/* parent of everything */}
        <Route path="/" element={<Layout />}>
          {/* child routes */}

          <Route index element={<Public />} />

          <Route path="login" element={<Login />} />

          {/* start of dash */}
          <Route element={<RequireAuth allowedRoles={Object.values(ROLES)} />}>
            <Route element={<Prefetch />}>
              <Route path="dash" element={<DashLayout />}>
                <Route index element={<Welcome />} />

                <Route
                  element={
                    <RequireAuth allowedRoles={[ROLES.Admin, ROLES.Manager]} />
                  }
                >
                  <Route path="users">
                    <Route index element={<UsersList />} />
                    <Route path=":id" element={<EditUser />} />
                    <Route path="new" element={<NewUserForm />} />
                  </Route>
                </Route>

                <Route path="notes">
                  <Route index element={<NotesList />} />
                  <Route path=":id" element={<EditNotes />} />
                  <Route path="new" element={<NewNote />} />
                </Route>
              </Route>
              {/* end of dash */}
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
