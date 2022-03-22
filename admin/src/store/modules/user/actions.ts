export default {
    //删除tag
    removeTag(context:any,index:number): any {
       context.state.tags.splice(index,1)
    },
    //添加tag
    addTag(context:any){

    },
    //跳转tag
    toTag(context:any,index:number){

    },

}
