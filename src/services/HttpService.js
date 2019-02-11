import axios from 'axios'

const createAxios = () => {
  return axios.create({
    headers: { 'Content-Type': 'application/json' },
    params: { cors: true }
  })
}
export default createAxios
// curl -H "Access-Control-Request-Method: GET" -H "Origin: http://localhost" --head http://www.example.com/
