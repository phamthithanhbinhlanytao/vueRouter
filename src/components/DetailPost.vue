<template>
 <div class="mt-3">
<table class="table">
  <thead>
    <tr >
      <th scope="col">Id</th>
      <th scope="col">Title</th>
      <th scope="col">Content</th>
      <th scope="col">Author</th>
      <th scope="col">Option</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(post,index) in posts " :key="index">
      <th scope="row">{{post.id}}</th>
      <td>{{post.title}}</td>
      <td>{{post.content}}</td>
      <td>{{post.author}}</td>
      <td><router-link v-bind:to="'/posts/'+post.id"><button class="btn btn-success">Show Detail: {{post.id}}</button></router-link></td>
    </tr>
  </tbody>
</table>
</div>
</template>

<script>
export default {
  name: "post",
  data() {
    return {
      posts: [
      {id:1,title:'Despacito',content:'Nếu không có gì thay đổi',author:'Nghĩa'},
      {id:2,title:'How do you do',content:'Thì tết năm nay có thể',author:'Bình'},
      {id:3,title:'Walking in the sun',content:'Mình vẫn không có gấu ',author:'Bích'},
      {id:4,title:'Undo',content:'Và vẫn nghèo như các năm khác',author:'Quê'},
      {id:5,title:'Alone',content:'Năm nay coi như bỏ. Chả làm được gì ^0^',author:'Ngân'}
    ],
    }
  },
};
</script>

