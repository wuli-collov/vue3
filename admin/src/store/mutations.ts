import { value } from '@/utils/variable'
import {asyncRoutes} from "@/router/routers";
import { unref } from 'vue'
export default {
    SET_TOKEN(state:any,val:string=''):void{
        val? localStorage.setItem(value.TOKEN,val):localStorage.removeItem(value.TOKEN)
    },

    getRoles(state:any): any {
        // @ts-ignore
        return new Promise(resolve => {
            const roles: [string] = ['admin']
            // @ts-ignore
            state.roles = roles || []
            resolve({roles})
        })
    },
    generateRoutes(state:any,roles: [string]): any {
        return new Promise(resolve => {
            let accessedRoutes;
            if (roles.includes('admin')) {
                accessedRoutes = asyncRoutes || []
            } else {
                accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
            }
            resolve(accessedRoutes)
        })
    }
}


function filterAsyncRoutes(routers: any, roles: [string]):any {
    let res:any = []
    routers.forEach((route: any) => {
        const tmp = {...route}
        if (hasPermission(roles, tmp)) {
            if (tmp.children) {
                tmp.children = filterAsyncRoutes(tmp.children, roles)
            }
            res.push(tmp)
        }
    })
    return res
}

/**
 * 根据路由meta.role 确定是否当前用户拥有访问权限
 * @roles 用户拥有角色
 * @route 待判定路由
 *
 *
 *
 */
function hasPermission(roles: any, route: any) {
    // 如果当前路由有roles 字段则需要判断用户访问权限
    if (route.meta && route.meta.roles) {
        // 若用户拥有的角色中有被包含在待定路由角色表中的则拥有访问权限
        return roles.some((role: any) => route.meta.roles.includes(role))
    } else {
        // 没有设置roles 则无需判定即可访问
        return true;
    }
}
