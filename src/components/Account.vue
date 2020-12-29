<template>
 <div class="mt-3">
  <h1 class="text-center">Account Manager</h1>
  <p class="text-center">That is page account manager</p>
  <button class="btn btn-success btn-block" @click="backFriend">Back to Friends</button>
  <router-view/>
</div>
</template>

<script>
export default {
  methods:{
    backFriend(){
      this.$router.push("/friends/Nguyễn Trọng Nghĩa");
    }
  }
}
</script>

