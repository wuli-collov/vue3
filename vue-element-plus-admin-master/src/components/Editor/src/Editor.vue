<script setup lang="ts">
import { onBeforeUnmount, computed, PropType, unref, nextTick, ref, watch } from 'vue'
import { Editor, Toolbar, getEditor, removeEditor } from '@wangeditor/editor-for-vue'
import { IDomEditor, IEditorConfig, i18nChangeLanguage } from '@wangeditor/editor'
import { propTypes } from '@/utils/propTypes'
import { isNumber } from '@/utils/is'
import { ElMessage } from 'element-plus'
import { useLocaleStore } from '@/store/modules/locale'

const localeStore = useLocaleStore()

const currentLocale = computed(() => localeStore.getCurrentLocale)

i18nChangeLanguage(unref(currentLocale).lang)

const props = defineProps({
  editorId: propTypes.string.def('wangeEditor-1'),
  height: propTypes.oneOfType([Number, String]).def('500px'),
  editorConfig: {
    type: Object as PropType<IEditorConfig>,
    default: () => undefined
  },
  defaultHtml: propTypes.string.def('')
})

const emit = defineEmits(['change'])

// 编辑器配置
const editorConfig = computed((): IEditorConfig => {
  return Object.assign(
    {
      readOnly: false,
      customAlert: (s: string, t: string) => {
        switch (t) {
          case 'success':
            ElMessage.success(s)
            break
          case 'info':
            ElMessage.info(s)
            break
          case 'warning':
            ElMessage.warning(s)
            break
          case 'error':
            ElMessage.error(s)
            break
          default:
            ElMessage.info(s)
            break
        }
      },
      autoFocus: false,
      scroll: true,
      uploadImgShowBase64: true
    },
    props.editorConfig || {}
  )
})

const editorStyle = computed(() => {
  return {
    height: isNumber(props.height) ? `${props.height}px` : props.height
  }
})

// 回调函数
const handleChange = (editor: IDomEditor) => {
  emit('change', editor)
}

// 组件销毁时，及时销毁编辑器
onBeforeUnmount(() => {
  const editor = getEditor(props.editorId)
  if (editor == null) return

  // 销毁，并移除 editor
  editor.destroy()
  removeEditor(props.editorId)
})

const getEditorRef = async (): Promise<IDomEditor> => {
  await nextTick()
  return getEditor(props.editorId) as IDomEditor
}

defineExpose({
  getEditorRef
})

const show = ref(true)

watch(
  () => props.defaultHtml,
  () => {
    show.value = false
    setTimeout(() => {
      show.value = true
    }, 0)
  }
)
</script>

<template>
  <div v-if="show" class="border-1 border-solid border-[var(--tags-view-border-color)]">
    <!-- 工具栏 -->
    <Toolbar
      :editorId="editorId"
      class="border-bottom-1 border-solid border-[var(--tags-view-border-color)]"
    />
    <!-- 编辑器 -->
    <Editor
      :editorId="editorId"
      :defaultConfig="editorConfig"
      :defaultHtml="defaultHtml"
      :style="editorStyle"
      @on-change="handleChange"
    />
  </div>
</template>

<style src="@wangeditor/editor/dist/css/style.css"></style>
