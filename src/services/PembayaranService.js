import axios from 'axios';

const PEMBAYARAN_API_BASE_URL = "http://localhost:5000/pembayaran";

class PembayaranService {
    getPembayaran = async () => {
        try {
            return await axios.get(PEMBAYARAN_API_BASE_URL);
        } catch (error) {
            throw error;
        }
    }

    getPembayaranByBulanTahun = async (bulan, tahun) => {
        try {
            return axios.get(PEMBAYARAN_API_BASE_URL + '/' + bulan + '/' + tahun);
        } catch (error) {
            throw error;
        }
    }

    createPembayaran = async (request) => {
        try {
            await axios.post(PEMBAYARAN_API_BASE_URL, request);
        } catch (error) {
            throw error;
        }
    }

    updatePembayaran = async (request) => {
        try {
            await axios.post(PEMBAYARAN_API_BASE_URL, request);
        } catch (error) {
            throw error;
        }
    }

}

export default new PembayaranService()