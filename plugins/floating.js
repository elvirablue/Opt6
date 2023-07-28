import Vue from 'vue'
import 'floating-vue/dist/style.css'
import FloatingVue from 'floating-vue'

const options = {
    distance: 10,
    themes: {
        tooltip: {
            placement: 'bottom',
        }
    }
}

Vue.use(FloatingVue, options)