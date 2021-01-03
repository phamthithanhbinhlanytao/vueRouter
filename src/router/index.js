import Vue from 'vue'
import Router from 'vue-router'
import PageHeader from '@/components/layout/Header'
import ErrorPage from '@/components/layout/Error404'
import HeaderAcc from '@/components/layout/HeaderAcc'
import Footer from '@/components/layout/Footer'
import Home from '@/components/HelloWorld'

import About from '@/components/About'
import ListPost from '@/components/ListPost'
import PostDetail from '@/components/PostDetails'
import DetailPost from '@/components/DetailPost'

Vue.prototype.$http = axios
Vue.use(Router)

export default new Router({
  //loại bỏ dấu # trong url
  mode: 'history',
  
  routes: [
    {
      //đường dẫn
      path: '/',
      //tên định danh cho đường dẫn(dùng cho redirect)
      name: 'Hello',
      //các thành phần (ít component, nhiều components)
      components:{
        default:Home, 'page-header':PageHeader
      }
    },
    {
      path: '/about',
      name: 'About',
      components:{
        default:About, 'page-header':PageHeader
      }
    },
    {
      path: '/posts',
      name: 'ListPost',
      components: {default:ListPost,'header-acc':HeaderAcc},
      children:[
        { path:"", props:true ,name:"detailPost",component:DetailPost },
        {path:"/posts/:id",props:true,name:"postDetail",component:PostDetail}
      ]
    },
    {
      path:'/404',name:'errorPage',component:ErrorPage
    },
    {
      path:'*',redirect:'/404'
    }
  ]
})
