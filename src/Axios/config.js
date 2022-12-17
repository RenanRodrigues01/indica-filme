import axios from "axios";

const booksFetch = axios.create({
    baseURL: "https://livraria-node.onrender.com",
})

export default booksFetch