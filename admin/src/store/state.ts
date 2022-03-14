import { value } from '@/utils/variable'
export default {
    get token(){
        return localStorage.getItem(value.TOKEN)||''
    },
    get layout(){
        return localStorage.getItem(value.LAYOUT)||'classic'
    },
    mobile:false,
    collapse:false,
    cachedViews: new Set(),
    roles:[]
}
