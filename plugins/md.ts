// @ts-nocheck
import marked from 'marked'

const mdToJs = str => {
  const content = JSON.stringify(marked(str))
  return `export default ${content}`
}

const md = () => ({
    transform: (code, id) => {
      if (id.endsWith('.md')) {
        return mdToJs(code);
      }
    }
})

export { md };