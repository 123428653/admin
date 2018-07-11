import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
// import HelloWorld from '@/components/HelloWorld'
// console.log(ElementUI)
Vue.use(ElementUI)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
