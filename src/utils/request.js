import axios from 'axios'
import { message } from 'ant-design-vue'

const service = axios.create({
    baseURL: '/',
    timeout: 5000
})

// request interceptor
service.interceptors.request.use()

// response interceptor
service.interceptors.response.use(
    response => {
        const res = response.data
        if (res.code && res.code !== 200 && res.code !== 0) {
            message.info(res.msg)
            return Promise.reject(new Error(res.msg || 'Error'))
        }else {
            return res
        }
    },
    error => {
        message.info(error.message)
        return Promise.reject(error)
    }
)

export default service