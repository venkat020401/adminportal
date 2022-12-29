import "./App.css";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import "./sbadmin.css";
import Dashboard from "./Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserList from "./UserList";
import Login from "./Login";
import Portal from "./Portal";
import CreateUser from "./CreateUser";
import Createaccount from "./Createaccount";
import Userview from "./Userview";
import UserEdit from "./UserEdit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="create-account" element={<Createaccount />} />
        <Route path="/portal" element={<Portal />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="user-list" element={<UserList />} />
          <Route path="create-user" element={<CreateUser />} />
          <Route path="user-view/:id" element={<Userview />} />
          <Route path="user-edit/:userid" element={<UserEdit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
