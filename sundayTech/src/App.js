import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserList } from './components/UserList';
import { Login } from './components/Login';
import { Registration } from './components/Registration';
import { UserDetails } from './components/UserDetails';

function App() {
  return (
    <div className="App">
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
