import Vue from 'vue';
import Router from 'vue-router';
import StudentsIndex from './views/StudentsIndex.vue';
import StudentsShow from './views/StudentsShow.vue';


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'students-index',
      component: StudentsIndex
    },
    {
      path: '/student/:id',
      name: 'students-show',
      component: StudentsShow
    }
  
  ]
});
