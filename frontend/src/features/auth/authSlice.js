import axios from "axios";


const loginUser = async ({name, pass}) => {
    try {
        const response = await axios.post('/api/v1/signup', {
            username: name, password: pass,
        })
        const {token} = response.data
        localStorage.setItem("token", token);
        console.log(localStorage);
        return response.data;
    } catch (error) {
        console.log('ошибка авторизации', error);
        throw error
    }
}

export default loginUser
