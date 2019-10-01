import { axiosConfig as axios } from "../../configs/axios.config";

const login = (credentials) => {
    if (credentials.username && credentials.password) {
        return axios.post('/login', credentials).then(token => {
            return token;
        }, error => {
            console.warn(error)
        });
    } else {

    }
}

const logout = () => {
    return 'logout';
}

const loginService = {
    doLogin: login,
    doLogout: logout
}

export default loginService;
