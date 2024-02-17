import axios from "axios";
const WS_path = import.meta.env.VITE_URL_API;


const loginService = async (data) => {
    console.log("Entro a loginService");
    const response = await axios.post(WS_path + '/login', data);
    return response;
};

export {loginService};