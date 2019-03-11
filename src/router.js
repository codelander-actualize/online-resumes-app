import Vue from 'vue';
import Router from 'vue-router';
import StudentsIndex from './views/StudentsIndex.vue';


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'students-index',
      component: StudentsIndex
    }
  
  ]
});
