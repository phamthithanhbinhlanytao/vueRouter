<template>
<div>
    <h1>Account Edit</h1>
<p>Edit with id User: {{id}}</p>
<table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
       <th scope="col">Edit</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{{$route.params.id}}</th>
      <td>{{$route.params.name}}</td>
      <td>{{$route.params.age}}</td>
      <router-link to="/account/1" tag="button" class="btn btn-success">Submit</router-link>
    </tr>
  </tbody>
</table>
<div style="height:700px">
  
</div>
<h1 id="hello">hello world</h1>
<div style="height:1000px"></div>
<h2>googbyeworld</h2>
</div>
</template>
<script>
export default {
    data(){
        return{
            id:this.$route.params.id,
            name:this.$route.params.name,
            age:this.$route.params.age,
            status:false
        }
    },
    methods:{

    },
    beforeRouteLeave(to,from,next){
      if(this.status){
        next()
      }else{
        if(confirm('Bạn chắc chw? nếu thoát dữ liệu của bạn sẽ không dược lưu')){
          next()
        }else{
          next(false);
        }
      }
    }
}
</script>
<style>

</style>