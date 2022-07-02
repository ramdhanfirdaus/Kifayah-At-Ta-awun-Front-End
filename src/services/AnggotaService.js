import axios from 'axios';

const ANGGOTA_API_BASE_URL = "http://localhost:5000/anggota";

class AnggotaService {
    getAnggota = async () => {
        try {
            return await axios.get(ANGGOTA_API_BASE_URL);
        } catch (error) {
            throw error;
        }
    }

    getAnggotaByNik = async (nik) => {
        try {
            return axios.get(ANGGOTA_API_BASE_URL + '/' + nik);
        } catch (error) {
            throw error;
        }
    }

    createAnggota = async (request, options) => {
        try {
            await axios.post(ANGGOTA_API_BASE_URL, request, options);
        } catch (error) {
            throw error;
        }
    }

    updateAnggota = async (nik, request, options) => {
        try {
            await axios.put(ANGGOTA_API_BASE_URL + '/' + nik, request, options);
        } catch (error) {
            throw error;
        }
    }

}

export default new AnggotaService()