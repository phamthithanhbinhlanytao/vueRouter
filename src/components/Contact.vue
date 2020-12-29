<template>
<div class="contact">
  <h1>This is About page</h1>
  <button class="btn btn-success" @click="backHome">Back to home</button>
</div>
</template>

<script>
export default {
  methods:{
    backHome(){
      this.$router.push("/");
    }
  }
}
</script>


