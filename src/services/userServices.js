import axios from "axios";

const baseURL = "http://localhost:3000";

export function signup(data){
    delete data.confirmPassword;
    const body = {
        ...data,
        username: generateUserName(data.name),
        avatar: "https://i.imgur.com/xmI2QAo.jpg",
        background: "https://i.imgur.com/XbRg9D7.png"
    }

    const response = axios.post(`${baseURL}/user/`, body); //é assincrono aqui, sai da front e vai p/ o back pegar os dados
    return response;
}

function generateUserName(name){
    const nameLowerCaseWithoutSpaces = name.replace(/\s/g, "").toLowerCase();
    const randomNumber = Math.floor(Math.random() * 1000);
    return `${nameLowerCaseWithoutSpaces}-${randomNumber}`;
}