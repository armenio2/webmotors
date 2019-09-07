import axios from 'axios';

export default async function GetMake() {
    return axios.get(`http://desafioonline.webmotors.com.br/api/OnlineChallenge/Make`).then(res => res.data)
}