<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <router-link to="/" class="navbar-brand">Home</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <!-- cách 1 -->
        <router-link to="/friends/Nguyễn Trọng Nghĩa" tag="li" class="nav-item"> <a class="nav-link">Friends</a></router-link>
        
      <router-link to="/contact" tag="li" class="nav-item"> <a class="nav-link">About</a></router-link>
<!-- cách 2 -->
      <li class="nav-item dropdown">
        <router-link to="/account" class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          List post
        </router-link>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <router-link to="account/1" class="dropdown-item">Account detail</router-link>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
</template>
<script>
export default {

}
</script>
<style></style>