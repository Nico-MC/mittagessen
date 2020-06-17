import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    filter: {
      category: [],
      distance: 0,
      price: 0,
      vege: 0
    }
  },
})

Vue.config.productionTip = false

new Vue({
  render: function (h) {
    return h(App)
  },
  store: store,
}).$mount('#app')
