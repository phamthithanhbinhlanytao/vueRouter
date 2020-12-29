<template> 
<div>
    <!-- thực hiện với v-model -->
    <input type="number" v-model="value" >
    <p>example: {{value}}</p>
    <button class="btn btn-success" @click="increment">Increment</button>
    <button class="btn btn-warning" @click="decrement">decrement</button>
    
</div>
</template>
<script> 
import { mapActions, mapMutations, mapGetters } from 'vuex';

export default{
    data(){
        return{

        }
    },
    methods:{
        increment(){
            //ví dụ về mutation
            this.$store.commit('optionIncrement',5);
        },
        decrement(){
            this.$store.commit('decrement',10);
        }
       //mapmutation sẽ chạy đồng bộ (sync)
        // ...mapMutations([
        //     'decrement'
        // ])
        //action chạy bất đồng bộ
        // ...mapActions([
        //     "increment"->tên của hàm click
        // ])
    },
    computed:{
        //dùng cho v-model
        value:{
          get(){
              return this.$store.getters.value;
          },
          set(value){
               this.$store.dispatch('updateValue',value); 
          }
        }
    }
}
</script>
<style>  </style>