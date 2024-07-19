import axios from "axios"

export const Api = () => {
    /**
     * Criação de uma instãncia para fazermos
     * o famoso CRUD.
     */
    return axios.create({
        baseURL: 'http://localhost:5000'
    });
}