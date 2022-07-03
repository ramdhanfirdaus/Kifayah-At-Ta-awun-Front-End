import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePageComponent from './components/HomePageComponent';
import DetailUserComponent from './components/Not Used/DetailUserComponent';
import PembayaranComponent from './components/PembayaranComponent';
import DaftarAnggotaComponent from './components/DaftarAnggotaComponent';
import CreateAnggotaComponent from './components/CreateAnggotaComponent';
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
          <Route path="/daftar-anggota/:nik" element={<DetailUserComponent />}></Route>
          <Route path="/daftar-anggota/pendaftaran/:no" element={<DetailUserComponent />}></Route>
          <Route path="/tambah-anggota" element={<CreateAnggotaComponent />}></Route>
        </Routes>
      </div>
    </Router>
    <Footer />
  </>
  );
}

export default App;
