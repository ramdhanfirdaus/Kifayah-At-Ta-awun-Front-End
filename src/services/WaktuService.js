import axios from 'axios';

const WAKTU_API_BASE_URL = "http://localhost:5000/waktu";

class WaktuService {
    getWaktu = async () => {
        try {
            return await axios.get(WAKTU_API_BASE_URL);
        } catch (error) {
            throw error;
        }
    }

    getLastWaktu = async (nik) => {
        try {
            return axios.get(WAKTU_API_BASE_URL + '/ ');
        } catch (error) {
            throw error;
        }
    }

    createWaktu = async (request) => {
        try {
            await axios.post(WAKTU_API_BASE_URL, request);
        } catch (error) {
            throw error;
        }
    }

}

export default new WaktuService()