export const get = function (name:any){
    let val = localStorage.getItem(name)
    if(val){
        let obj = JSON.parse(val)
        return obj.value
    }
    return val
}
export const set = function (name:any,value:any){
    let obj = {}
    if(value){
        const type = typeof value
        obj= new Getval(type,value)
    }
    const copyObj = JSON.stringify(obj)
    value?localStorage.setItem(name,copyObj):localStorage.removeItem(name)
}
class Getval{
    type:String;
    value:any;
    constructor(type:String,value:any){
        this.type = type
        this.value = value
    }
}
