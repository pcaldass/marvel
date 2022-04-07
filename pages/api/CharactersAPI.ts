import axios from "axios";
import md5 from "md5";

const publicKey = "b08347347bd7de7326620648761cfdf1";
const privateKey = "8e21201675cdc46048eca7504d993fa74cfce8df";

const ts = Number(new Date());

const hash = md5(ts + privateKey + publicKey);

const api = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public/',
  params: {
    ts,
    apikey: publicKey,
    hash,
    limit: 96,
    offset: 1234
  }
})

export default api