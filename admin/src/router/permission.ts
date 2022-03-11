import router from './index'
import store from '../store/index'
import {inject} from 'vue'
router.beforeEach(async (to,from,next)=>{
    const state = store.state
    // @ts-ignore
    const token = state.token
    if(!token){
        if(to.path==='/login'){
            next()
        }
        next('/login')
    } else {
        //若用户角色已附加则说明动态路由已经添加
        const state = store.state
        // @ts-ignore
        const hasRoles:boolean = state.roles&&state.roles.length>0
        if(hasRoles){
          /*  if(to.path==='/login'){
                next('/')
            }*/
            //角色存在
            next()
        }else {
            try{
                //  获取用户角色
                // @ts-ignore
                const {roles} =await store.dispatch('getRoles')
                // 根据当前用户角色动态生成路由
                // @ts-ignore
                const accessRoutes = await store.dispatch('generateRoutes',roles)
                // @ts-ignore
                router.addRoute(accessRoutes)
                // 继续路由切换,确保addRoutes完成
                next({...to,replace: true})
            }catch (error){
                // store.mutations.setToken()
                // @ts-ignore
                store.commit('SET_TOKEN')
                next(`/login?redirect=${to.path}`)
            }
        }

    }

})
