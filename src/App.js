import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import UserListComponent from "./components/UserListComponent";
import UpdateUserComponent from './components/UpdateUserComponent';
import CreateUserComponent from './components/CreateUserComponent';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/users" element={<UserListComponent />}></Route>
          <Route path="/users/detail/:nik" element={<UpdateUserComponent />}></Route>
          <Route path="/users/add-user" element={<CreateUserComponent />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
