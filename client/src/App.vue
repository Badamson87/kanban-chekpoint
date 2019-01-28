<template>
  <div id="app">

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

      <router-link class="navbar-brand hover" :to="{name: 'boards'}"><i class="fas fa-box-open box"></i>Cardboard</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link hover" :to="{name: 'boards'}">Home</router-link>
          </li>
          <li class="nav-item action">
            <a class="nav-link" @click="logout">Logout</a>
          </li>
        </ul>
      </div>
    </nav>


    <router-view />
  </div>
</template>



<script>
  export default {




    methods: {
      logout() {
        this.$store.dispatch('logout')

      },


    }
  }



</script>







<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  body {
    background: fixed;
    background-image: url("./img/cardboard.jpg");
    height: 100vh;
    background-size: cover;

  }

  .box {
    color: white;
    font-size: 25px
  }
</style>