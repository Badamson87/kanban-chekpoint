<template>
  <div class="container-fluid">
    <div class="row header">
      <div class="col-12 justify-content-center">
        <h1 class="text">{{board.title}}</h1>
        <h2 class="text">{{board.description}}</h2>
        <form @submit.prevent="addList">
          <input type="text" placeholder="title" v-model="newList.title" required>
          <button type="submit">Create List</button>
        </form>
      </div>
    </div>
    <div class="board row">
      <list v-for="list in lists" class="task col-4 p-3" :listData="list"></list>
    </div>
  </div>
</template>

<script>
  import List from '@/components/List.vue'
  export default {
    name: "board",
    props: ["boardId"],
    components: {
      List
    },
    data() {
      return {
        newList: {
          title: '',
          boardId: ''
        }
      }
    },
    mounted() {
      this.$store.dispatch('getLists', this.boardId)
    },
    computed: {
      lists() {
        return this.$store.state.lists;
      },
      board() {
        return this.$store.state.boards.find(b => b._id == this.boardId) || {}
      }
    },
    methods: {
      addList() {
        this.newList.boardId = this.boardId
        this.$store.dispatch("addList", this.newList);
        this.newList = { title: "", boardId: "" };
      }
    }
  };
</script>

<style>
  .task {
    display: flex;

  }

  .text {
    color: white;
    text-shadow: 0 0
  }

  .board {
    background-size: cover;
    background-image: url('../img/cardboard.jpg')
  }

  .header {
    background-color: lightskyblue
  }
</style>