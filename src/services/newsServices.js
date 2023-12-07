//a pasta Services é responsavel por armazenar o consumo da API
//axios é usado inclusive no back, ele faz o que o ThunderClient faz, vai na API e busca os dados 

import axios from "axios";

const baseURL = "http://localhost:3000";

export function getAllNews() {
    const response = axios.get(`${baseURL}/news`); //é assincrono aqui, sai da front e vai p/ o back pegar os dados
    return response;
}

export function getTopNews() {
    const response = axios.get(`${baseURL}/news/top`); //é assincrono aqui, sai da front e vai p/ o back pegar os dados
    return response;
}

export function searchNews(title) {
    const response = axios.get(`${baseURL}/news/search?title=${title}`); //é assincrono aqui, sai da front e vai p/ o back pegar os dados
    return response;
}