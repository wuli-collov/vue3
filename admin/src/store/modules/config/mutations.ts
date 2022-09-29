import {set} from '@/hooks/userStorage'
export default {
    SET_THEME(state:any,theme:string){
        state.theme=Object.assign(state.theme, theme)
        set('admin-theme',state.theme)
    },
    setCssVarTheme(state:any){
        for (const key in (state.theme)) {
            setCssVar(`--${humpToUnderline(key)}`, state.theme[key])
        }
    }
}
export const setCssVar = (prop: string, val: any, dom = document.documentElement) => {
    dom.style.setProperty(prop, val)
}
export const humpToUnderline = (str: string): string => {
    return str.replace(/([A-Z])/g, '-$1').toLowerCase()
}
