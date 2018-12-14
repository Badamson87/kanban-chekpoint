<template>
  <div class="login m-5">
    <h1 class="text m-5">Welcome to Cardboard</h1>
    <form v-if="loginForm" @submit.prevent="loginUser">
      <div>
        <input type="email" v-model="creds.email" placeholder="email">
      </div>
      <div>
        <input type="password" class="m-3" v-model="creds.password" placeholder="password">

      </div>
      <button type="submit" class="mb-3">Login</button>
    </form>
    <form v-else @submit.prevent="register">
      <div>
        <input type="text" v-model="newUser.name" placeholder="name">

      </div>
      <div>
        <input type="email" class="m-3" v-model="newUser.email" placeholder="email">

      </div>
      <div>
        <input type="password" v-model="newUser.password" placeholder="password">

      </div>
      <button type="submit" class="m-3 btn btn-primary">Create Account</button>
    </form>
    <div @click="loginForm = !loginForm">
      <div class="text action">
        <p v-if="loginForm">No account? Click here to Register</p>
        <p v-else>Already have an account? Click here to Login</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        loginForm: true,
        creds: {
          email: "",
          password: ""
        },
        newUser: {
          email: "",
          password: "",
          name: ""
        }
      };
    },
    methods: {
      register() {
        this.$store.dispatch("register", this.newUser);
      },
      loginUser() {
        this.$store.dispatch("login", this.creds);
      }
    }
  };
</script>