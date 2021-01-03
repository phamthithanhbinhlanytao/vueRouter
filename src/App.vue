<template>
  <div id="app">
  
    <!-- vuejs router -->
    <router-view name="page-header" />
    <router-view name="header-acc" />
    <div class="container">
       <transition name="slide">
      <router-view />
       </transition>
    </div>
    <router-view name="footer"/>


    
  </div>
</template>

<script>
export default {
  name: "app",
  data(){
    return{
      counter:0
    }
  },
  components:{

  },
  methods:{

  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/* cái này của bên vue router */
 .slide-leave-active{
  transition: opacity 1s ease;
  opacity: 0;
  animation: ntn 1s ease-in-out forwards;
}
.slide-leave{
  opacity: 1;
  transform: translateX(0);
}
@keyframes ntn{
  0%{
    transform: translateX(0);
  }
  100%{
    transform: translateX(30px);
  }
}
</style>
