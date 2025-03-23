import axios from 'axios'
import router from '../router'

const api = axios.create({
  baseURL:
    import.meta.env.MODE === 'production'
      ? `https://gunno.com.br/api`
      : 'http://localhost:3001/',
})

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.status === 401 || error.response.status === 401) {
      // const useUser = useUserStore()
      // useUser.logout()

      // router.push('/login')
    }
    return Promise.reject(error)
  },
)

export default api
