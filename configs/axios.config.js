import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://10.17.102.6:8088/",
    headers: {
        "Authorization": 'AIidaISDH'
    }
})

export default axiosConfig = () => {
    return axiosInstance;
} 
