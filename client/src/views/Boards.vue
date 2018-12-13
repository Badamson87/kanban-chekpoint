<template>
  <div class="container-fluid">
    <div class="row">
      <div class="b-page col-12">
        <h1>WELCOME TO THE BOARDS!!!</h1>
        <form @submit.prevent="addBoard">
          <input type="text" placeholder="title" v-model="newBoard.title" required>
          <input type="text" placeholder="description" v-model="newBoard.description">
          <button type="submit">Create Board</button>
        </form>
      </div>

      <div class="row justify-content-center">
        <div class="col">

          <div v-for="board in boards" :key="board._id">
            <router-link :to="{name: 'board', params: {boardId: board._id, board: board}}">{{board.title}}</router-link>
            <button @click="deleteBoard(board._id)">DELETE BOARD</button>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
  export default {
    name: "boards",
    mounted() {
      this.$store.dispatch("getBoards");
    },
    data() {
      return {
        newBoard: {
          title: "",
          description: ""
        }
      };
    },
    computed: {
      boards() {
        return this.$store.state.boards || [];
      }
    },
    methods: {
      addBoard() {
        this.$store.dispatch("addBoard", this.newBoard);
        this.newBoard = { title: "", description: "" };
      },
      deleteBoard(boardId) {
        this.$store.dispatch("deleteBoard", boardId);
      }
    }
  };
</script>

<style>
  .b-page {
    border: red;
    background-color: lightskyblue
  }
</style>