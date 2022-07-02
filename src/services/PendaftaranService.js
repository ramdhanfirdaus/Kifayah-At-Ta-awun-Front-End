import axios from 'axios';

const PENDAFTARAN_API_BASE_URL = "http://localhost:5000/pendaftaran";

class PendaftaranService {
    getPendaftaran = async () => {
        try {
            return await axios.get(PENDAFTARAN_API_BASE_URL);
        } catch (error) {
            throw error;
        }
    }

    getPendaftaranByNo = async (no) => {
        try {
            return axios.get(PENDAFTARAN_API_BASE_URL + '/' + no);
        } catch (error) {
            throw error;
        }
    }

    createPendaftaran = async (request, options) => {
        try {
            await axios.post(PENDAFTARAN_API_BASE_URL, request, options);
        } catch (error) {
            throw error;
        }
    }

    updatePendaftaran = async (no, request, options) => {
        try {
            await axios.put(PENDAFTARAN_API_BASE_URL + '/' + no, request, options);
        } catch (error) {
            throw error;
        }
    }

}

export default new PendaftaranService()