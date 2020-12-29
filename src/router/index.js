import Vue from 'vue'
import Router from 'vue-router'
import PageHeader from '@/components/layout/Header'
import ErrorPage from '@/components/layout/Error404'
import HeaderAcc from '@/components/layout/HeaderAcc'
import Footer from '@/components/layout/Footer'
import Home from '@/components/HelloWorld'
import Account from '@/components/Account'
import About from '@/components/Contact'
import ListPost from '@/components/Friends'
import AccountID from '@/components/account/AccountDetails'
import ListAccount from '@/components/account/AccountBegin'
import Edit from '@/components/account/AccountEdit'

Vue.use(Router)

export default new Router({
  //loại bỏ dấu # trong url
  mode: 'history',
  //roll đến id chỉ định(ở đây roll đến thành phần trong đoạn văn có gắn id)
  scrollBehavior(to,from,savedPosition){
    if(to.hash){
      return {selector:to.hash}
    }
  },
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
      components: {default:ListPost,'footer':Footer,'header-acc':HeaderAcc},
      children:[
        { path:"",name:"listAccount",component:ListAccount },
        //beforeEnter : đã chuyển hướng component mới xuất hiện
        { path:":id",name:"accountID",component:AccountID,beforeEnter:(to,from,next)=>{console.log('beforeEnter'); next();} },
        { path:":id/:name/:age/edit",name:"accountEdit",component:Edit }
      ]
    },
    {
      path:'/auth', redirect:{name:'Hello'}
    },
    {
      path:'/404',name:'errorPage',component:ErrorPage
    },
    {
      path:'*',redirect:'/404'
    }
  ]
})
