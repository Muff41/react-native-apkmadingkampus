import axios from 'axios'
import { BASE_URL } from './api'
import { Config } from 'react-native-config'

export const searcNewsApi = (keyword) => {
  return axios
    .get(`${BASE_URL}/${keyword}&apiKey=${Config.NEWS_API}`)
}