import axios from "axios";

const ClientApiUrl = 'http://localhost:3002';
const api = axios.create({
    baseURL: ClientApiUrl

});
export default api;