<template>
  <div>
    <h1>Post Detail</h1>
    <p>Post With id: {{ id }}</p>
    <!-- hoặc {{$route.params.id}} -->
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">Content</th>
          <th scope="col">Author</th>
        </tr>
      </thead>
      <tbody>
        <tr >
          <th scope="row">{{id}}</th>
          <td>{{title}}</td>
          <td>{{content}}</td>
          <td>{{author}}</td>
        </tr>

      </tbody>
    </table>
  </div>
</template>
<script>
import DetailPost from '@/components/DetailPost'
export default {
  data() {
    return {
      id:this.$route.params.id,


    }
  },
  props: [
    'id',
        'title',
        'content',
        'author'
  ],
  computed: {},
  created(){

  }
};
</script>
<style>
</style>