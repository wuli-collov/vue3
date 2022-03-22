<template>
  <div ref="myRef">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent,computed ,ref,onMounted} from 'vue'
export default defineComponent({
  props:{
    keys: {
      type: Array,
      default: () => []
    },
  },
  setup(props, { emit, slots }){
    const myRef = ref(null)
    const parseText = (text:string) => {
      props.keys.forEach((key, index) => {
        const regexp = new RegExp(key as string, 'g')
        text = text.replace(regexp, `{{@@${index}@@}}`)
      })
      return text.split(/{{|}}/)
    }
    onMounted(()=>{
      renderText()
    })
    const renderDom =(i:number)=>{
      let val  = props.keys[i]
      return `<span class="highlight">${val}</span>`
    }
    const renderText =()=>{
      if (!slots?.default) return null
      let node = slots?.default()[0].children
      if (!node) {
        return slots?.default()[0]
      }
      const textArray = parseText(node as string)
      const regexp = /^@@[0-9]@@*$/
      const arr:Array<string>  = textArray.map((m)=>{
        if(regexp.test(m)){
          let matchs:any = m.match(/[0-9]/)||[0]
          let i = matchs[0]
          return m.replace(m,renderDom(i))
        }
        return m
      })
      const elm:string = (arr.join('')) as string
      (myRef.value as any).innerHTML = elm
      // (myRef.value as any).innerHTML = arr.join('')
    }
    return{
      myRef,
    }
  }
})
</script>
<style  lang="less">
.highlight{
  color: red;
}
</style>
