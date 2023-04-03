import { createApp } from 'vue'
import App from './App'
import uiComponents from '@/components/UI';
import addingForms from '@/components/Forms/Adding';
import editingForms from '@/components/Forms/Editing';
import router from '@/router/router'

const app = createApp(App)

uiComponents.forEach(component => {
    app.component(component.name, component)
})
addingForms.forEach(component => {
    app.component(component.name, component)
})
editingForms.forEach(component => {
    app.component(component.name, component)
})

app
    .use(router)
    .mount('#app')
