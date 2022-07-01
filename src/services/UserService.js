import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:5000/users";

class UserService {
    getAllUser = async () => {
        try {
            return await axios.get(USER_API_BASE_URL);
        } catch (error) {
            throw error;
        }
    }

    getUserByNIK = async (nik) => {
        try {
            return axios.get(USER_API_BASE_URL + '/' + nik);
        } catch (error) {
            throw error;
        }
    }

    createUser = async (request, options) => {
        try {
            await axios.post(USER_API_BASE_URL, request, options);
        } catch (error) {
            throw error;
        }
    }

    updateUser(nik, request) {
        return axios.put(USER_API_BASE_URL + '/' + nik, request);
    }

    deleteUser(nik) {
        return axios.delete(USER_API_BASE_URL + '/' + nik);
    }
}

export default new UserService()