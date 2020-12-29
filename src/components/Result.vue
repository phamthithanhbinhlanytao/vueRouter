<template>
  <div>
    <h1>Ví dụ thực tế về getter : {{result}}</h1>
    
    <hr>
    <button class="btn btn-danger" @click="tb">alert</button>
  </div>
</template>

<script>
export default {  
    data(){
        return{

        }
    },
    //computed luôn chạy trước khi được load
    computed:{
      result(){
        return this.$store.getters.nameResult;
      }
    },
    methods:{
      tb(){
        alert('getter là : '+this.$store.getters.nameResult)
      }
    }
}
</script>

