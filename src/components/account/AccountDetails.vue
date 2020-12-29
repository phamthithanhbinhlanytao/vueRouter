<template>
  <div>
    <h1>Account Detail</h1>
    <p>User With : {{ id }}</p>
    <!-- hoặc {{$route.params.id}} -->
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
          <th scope="row">1</th>
          <td>Nghĩa</td>
          <td>21</td>
          <router-link :to="link" tag="button">edit</router-link>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      name: this.$route.params.name,
      age: this.$route.params.age,
      link: {
        name: "accountEdit",
        params: {
          id: 1,
          name: 'nghĩa',
          age: 21
        },
        query:{
            locate:'vi',
            browser:'chrome'
        },
        hash:'#hello'
      }
    }
  },
  //xử lý trước khi url khác được gọi
  beforeRouteEnter(to,from,next){
      //nếu false thì k thể xem detail
      if(true){
          next()
      } else{
           alert('bạn k có quyền');
          next(false);
      }
  },
  computed: {},
};
</script>
<style>
</style>