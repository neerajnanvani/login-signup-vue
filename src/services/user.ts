const api = "https://reqres.in/api";
import axios from "axios";

async function registerUser(userInfo) {
    try {
        await axios.post(`${api}/register`, userInfo);
    } catch (error) {
        alert(error);
    }
}

async function loginUser(userInfo) {
    try {
        await axios.post(`${api}/login`, userInfo);
    } catch (error) {
        alert(error);
    }
}

export {registerUser, loginUser};