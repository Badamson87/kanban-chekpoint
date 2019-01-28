<template>
  <div class="container-fluid">
    <div class="row">
      <div class="b-page col-12">
        <h1>WELCOME</h1>
        <form @submit.prevent="addBoard">
          <input type="text" placeholder="New Board" v-model="newBoard.title" required>
          <input class="m-2" type="text" placeholder="Description" v-model="newBoard.description">
          <button class="btn btn-warning mb-1" type="submit">Create Board</button>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col task">
        <div v-for="board in boards" :key="board._id">
          <div class="card m-3 p-5">
            <div class="card-body">
              <router-link :to="{name: 'board', params: {boardId: board._id, board: board}}">{{board.title}}
              </router-link>
              <i class="fas fa-trash action" @click="deleteBoard(board._id)"></i>
            </div>
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

  .task {
    flex-direction: row;
    flex-wrap: wrap
  }
</style>