import axios from 'axios'

const instance = axios.create({
  // baseURL: 'http://192.168.1.7:8080/api/v1'
  baseURL: 'http://localhost:8080/api/v1'
})

export default instance
