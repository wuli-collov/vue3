import http from '../http/index'
export default {
    login:{
        login(data:object):any{
            return http.post('/login',data)
        }
    }
}
