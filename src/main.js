import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.filter(
  'formatDate',
  function(val){
    var date = new Date(val);
    return [
      date.getDate(),
      date.getMonth() + 1,
      date.getFullYear()
      ].join('.')
  }
)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
