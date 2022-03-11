import axios,{AxiosRequestConfig} from 'axios'
import store from '../store/index'
import router from '../router/index'
import { message } from 'ant-design-vue'

const baseUrl = process.env.VUE_APP_BASE_API
var instance = axios.create({
    timeout:60000,
    baseURL:baseUrl,
    validateStatus (status):boolean{
        switch (status){
            case 400:
                console.log('请求出错')
                break;
            case 401:
                message.error('用户权限不够')
                break;
        }
        return status>=200 && status<300
    }
})
/*添加请求拦截器*/
instance.interceptors.request.use(
    (config:AxiosRequestConfig):any=>{
        // @ts-ignore
        let token=store.state.token
        if(token){
            let header = config.headers||{Authorization:''}
            header.Authorization = `${token}`
        }
        return config
    },
    error=>{
        return Promise.reject(error)
    }
)
/*接口返回拦截器异常处理*/
instance.interceptors.response.use(
    response=>{
        return response
    },
    error=>{
        return Promise.reject(error)
    }
)
/*get请求*/
var http={
    get:function (url:string,options:any):any{
        return new Promise((resolve, reject) =>{
            instance.get(url,options).then(response=>{
                if (response.status === 200) {
                    resolve(response.data)
                } else {
                    reject(response)
                }
            }).catch(e => {
                console.log(e);
            })
        })
    },
    post:function (url:string, options:any) {
        return new Promise((resolve, reject) => {
            instance.post(url, options, {headers: {"Content-Type": "application/x-www-form-urlencoded"}}).then(response => {
                if (response.status === 200) {
                    resolve(response.data)
                } else {
                    reject(response)
                }
            }).catch(e => {
                console.log(e);
            })
        })
    }
}
export default http
