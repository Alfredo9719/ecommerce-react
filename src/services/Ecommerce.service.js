import axios from "axios";
const WS_path = import.meta.env.VITE_URL_API;


const getProducts = async (data) => {
    const response = await axios.get(WS_path + '/products', data);
    return response;
};

export {getProducts};