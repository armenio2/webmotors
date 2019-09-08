import axios from 'axios';

export default async function GetVersion(id) {
    return axios.get(`http://desafioonline.webmotors.com.br/api/OnlineChallenge/Version?ModelID=${id}`).then(res => res.data)
}