import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'ea2652469e3148a6a58786f9d0e54efe'
  }
})