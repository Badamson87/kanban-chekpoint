<template>
  <div id="app">

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <i class="fas fa-box-open box"></i>
      <a class="navbar-brand" href="#">Cardboard</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="/board">Home</a>
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

      }
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
    background-image: url("./img/cardboard.jpg");
    height: 100vh;
    background-size: cover;
  }

  .box {
    color: white;
  }
</style>