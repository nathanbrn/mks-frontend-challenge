import axios from "axios";

export async function getProducts() {
    try {
        const response = await axios.get('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=ASC');
        return response.data.products;
    } catch (error) {
        console.error('Erro ao buscar os produtos:', error);
        throw new Error('Erro ao buscar os produtos');
    }
}