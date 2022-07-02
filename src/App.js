import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePageComponent from './components/HomePageComponent';
import UserListComponent from "./components/Not Used/UserListComponent";
import DetailUserComponent from './components/Not Used/DetailUserComponent';
import CreateUserComponent from './components/Not Used/CreateUserComponent';
import PembayaranComponent from './components/PembayaranComponent';
import DaftarAnggotaComponent from './components/DaftarAnggotaComponent';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (<>
    <Navbar />
    <Router>
      <div className="">
        <Routes>
          <Route path="/" element={<HomePageComponent />}></Route>
          <Route path="/pembayaran" element={<PembayaranComponent />}></Route>
          <Route path="/daftar-anggota" element={<DaftarAnggotaComponent />}></Route>
          <Route path="/daftar-anggota/:nik" element={<UserListComponent />}></Route>
          <Route path="/daftar-anggota/pendaftaran/:no" element={<DetailUserComponent />}></Route>
          <Route path="/tambah-anggota" element={<CreateUserComponent />}></Route>
        </Routes>
      </div>
    </Router>
    <Footer />
  </>
  );
}

export default App;
