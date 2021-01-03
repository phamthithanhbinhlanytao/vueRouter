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
          <th scope="col">Show</th>
        </tr>
      </thead>
      <tbody>
        <tr >
          <th scope="row">{{id}}</th>
          <td>{{title}}</td>
          <td>{{content}}</td>
          <td>{{author}}</td>
          <td><button class="btn btn-info" @click="getID()">Show data</button></td>
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
      posts: [
    {id:1,title:'Despacito',content:'Nếu không có gì thay đổi',author:'Nghĩa'},
      {id:2,title:'How do you do',content:'Thì tết năm nay có thể',author:'Bình'},
      {id:3,title:'Walking in the sun',content:'Mình vẫn không có gấu ',author:'Bích'},
      {id:4,title:'Undo',content:'Và vẫn nghèo như các năm khác',author:'Quê'},
      {id:5,title:'Alone',content:'Năm nay coi như bỏ. Chả làm được gì ^0^',author:'Ngân'}
      ],
      title: '',
      content: '',
      author: ''
    }
  },
  methods: {
    filterPost: function () {
      return this.posts.filter(function (post) {
        return post.id.indexOf(this.ids) >= 0;
      });
    },
    getID(){
      var el = this.id -1;
      this.title = this.posts[el].title;
      this.content = this.posts[el].content;
      this.author = this.posts[el].author;
    }
  },

};
</script>
<style>
</style>