import axios from 'axios'
const token = localStorage.getItem('token')

const instance = axios.create({
  baseURL: 'http://localhost:8080/api/v1/admin',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  }
})

export default instance
