import axios from 'axios'

const instance = axios.create({
  // baseURL: import.meta.env.VITE_mobileURI
  baseURL: import.meta.env.VITE_localhostURI
  // baseURL: import.meta.env.VITE_hostedURI
})

export default instance
