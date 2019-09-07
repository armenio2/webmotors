import axios from 'axios';

export default async function GetModel(id) {
    return axios.get(`http://desafioonline.webmotors.com.br/api/OnlineChallenge/Model?MakeID=${id}`).then(res => res.data)
}