<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <!-- cách 1 -->
<!-- cách 2 -->
      <li class="nav-item dropdown">
        <router-link to="/account" class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Account
        </router-link>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <router-link to="account/1" class="dropdown-item">Account detail</router-link>
        </div>
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