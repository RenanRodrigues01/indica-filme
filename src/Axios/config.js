import axios from "axios";

const booksFetch = axios.create({
    baseURL: "https://livraria-node.onrender.com",
    headers: {
        "content-Types": "application/json"
    }
})

export default booksFetch