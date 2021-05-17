<template>
  <div id="app" class="container">
    <nav class="navbar navbar-expand-sm bg-light">
      <img src="./assets/FUBU_logo.png" alt="FUBU logo">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link :to="{ name: 'Home' }" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Products' }" class="nav-link">Products</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Orders' }" class="nav-link">Orders</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'About' }" class="nav-link">About</router-link>
        </li>
      </ul>
    </nav>
    <transition name="fade">
      <div class="gap">
        <router-view></router-view>        
      </div>
    </transition>
    <AddItem></AddItem>
  </div>  
</template>

<script>

export default {
}
</script>

<style>
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
      opacity: 0
    }
    .gap {
      margin-top: 50px;
    }
</style>