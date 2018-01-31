import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ManageElasticSearch from '@/components/ManageElasticSearch'
import CreateIndex from '@/components/CreateIndex'
import MappingColumn from '@/components/MappingColumn'



// Import the styles directly. (Or you could add them via script tags.)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/manage',
      name: 'ManageElasticSearch',
      component: ManageElasticSearch
    },
    {
      path: '/create-index',
      name: 'CreateIndex',
      component: CreateIndex
    },
    {
      path: '/mapping-index',
      name: 'MappingColumn',
      component: MappingColumn
    },
  ]
})
