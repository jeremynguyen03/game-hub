import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '648716848b1b44ce804fc848318b7a71'
  }
})