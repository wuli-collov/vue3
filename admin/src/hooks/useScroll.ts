export type DirectionType='left'|'right';
/*
* 滚动
* */

export const scroll = function (ele:HTMLElement,direction:DirectionType,speed:number=50) {
    let current:number =  ele.scrollLeft||0
    let total:number =  0
    let allWidth = ele.scrollWidth
    switch (direction){
        case 'left':
            total = current<=0?0:current-speed
            break;
        case 'right':
            total = current>=allWidth?allWidth:current+speed
            break;
    }

    if(ele.clientWidth>=allWidth){
        return
    }
    animate(ele,current,total,(value:number)=>{
        ele.scrollLeft=value
    })
}
export const scrollIntoView = function (ele:HTMLElement) {
    ele.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
}
export const mouse = function (wheelEle:HTMLElement,ele:HTMLElement){
    if(document.addEventListener){
        document.addEventListener('DOMMouseScroll',function (event){
            scrollFunc(event,wheelEle,ele)
            event.preventDefault&&event.preventDefault()
        },false);
    }
    // @ts-ignore
    (wheelEle as HTMLElement).onmousewheel=function (event){
        scrollFunc(event,wheelEle,ele)
    };//IE/Opera/Chrome
}
function scrollFunc(event:any,wheelEle:HTMLElement,ele:HTMLElement){
    event=(event||window.event) as MouseEvent
    let val = event.wheelDelta||event.detail
    // 向上event.wheelDelta =120 event.detail = -3
    if(val>0||event.detail<0){
        scroll(ele,'left')
    }else{
        //向下
        scroll(ele,'right')
    }
    return false
}

 /*
 * ele:需要动画的dom
 * current:现在的dom距离
 * total：移动的距离
 * call:回调函数
 * */
function animate(ele:HTMLElement,current:number, total:number,call?:Function) {
    //获取方向：>0 向右 <0向左
    var direction = total-current
    //2.处理步长
    var step =Math.ceil((total-current)/10);
    //1.清除定时器并设置定时器函数
    clearInterval((ele as any).timer);
    (ele as any).timer = setInterval(function () {
        let flag = false
        //到达了目标
        if((direction>0&&current>=total)||(direction<=0&&current<=total)){
            flag=true
        }
        if(flag){
            clearInterval((ele as any).timer);
            call&&call(total)
        }else {
            current+=step
            call&&call(current)
        }
    }, 30);
}
