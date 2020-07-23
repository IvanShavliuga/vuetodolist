import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Edit from '../views/Edit.vue'
/*
const EditPage = {
  template: '<Edit :id="$route.params.id"></Edit>',
  components: Edit
}
*/
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/edit',
    name: 'Edit',
    component: Edit
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
