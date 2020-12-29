<template>
  <div>
    <h1>ví dụ thực tế về Center State :  {{nameResult}}</h1>
    
    <hr>
    <h2>Đây là vid dụ về mapgetters: {{tenResult}}</h2>
    <hr>
    <button class="btn btn-primary" @click="tb">alert</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {  
    //luôn chạy trước khi được load
     computed: {
    // trộn các getters được tính toán với toán tử lây lan đối tượng
    ...mapGetters([
      'nameResult',
      'tenResult',
      // ...
    ])
  },
    methods:{
      tb(){
        alert('Center State : '+this.$store.state.result)
      }
    }
};
</script>

