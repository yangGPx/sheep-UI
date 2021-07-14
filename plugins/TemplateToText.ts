const addSourceCode = () => ({
    transform: (code, id) => {
      if (id.indexOf('Topnav.vue') > 0) {
          console.log(id);
          
        return `export default function (Component) {
            Component.xxx = 123
          }`
      }
    }
})
export { addSourceCode }