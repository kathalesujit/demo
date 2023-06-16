import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./components/LoginModule/Login";
import { Registration } from "./components/RegistrationModule/Registration";
import { UserDetails } from "./components/UserModule/UserDetails";
import { UserList } from "./components/UserModule/UserList";

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/userlist" element={<UserList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Registration />} />
          <Route path="/userdetail" element={<UserDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
