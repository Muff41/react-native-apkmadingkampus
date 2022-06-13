import axios from 'axios'
import { BASE_URL } from './api'
import { Config } from 'react-native-config'

export const headlineNewsApi = () => {
  return axios
    .get(`${BASE_URL}/${Config.NEWS_API}`)
}

console.log(BASE_URL)