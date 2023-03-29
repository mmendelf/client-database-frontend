import axios from "axios";

export const getData = async (url) => {
    try {
        const data = await axios.get(url);
        return data.data;
    }
    catch (err) {
        throw err;
    }
}

export const postData = async (data) => {
    try {
        await axios.post('http://localhost:3770/client/add', data)
    }
    catch (err) {
        throw err;
    }
}

export const deleteData = async (id) => {
    try {
        await axios.delete(`http://localhost:3770/client/${id}`)
    }
    catch (err) {
        throw err;
    }
}