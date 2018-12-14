<template>
  <div class="container-fluid">
    <div class="row header">
      <div class="col-12 d-flex flex-row  justify-content-around">
        <h1 class="text align-self-center">{{board.title}}</h1>
        <h2 class="text align-self-center">{{board.description}}</h2>
        <form @submit.prevent="addList" class="align-self-center">
          <input type="text" placeholder="title" v-model="newList.title" required>
          <button class="btn btn-warning" type="submit">Create List</button>
        </form>
      </div>
    </div>
    <div class="board row">
      <list v-for="list in lists" class="task col-4 py-3" :listData="list"></list>
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
    text-shadow: 0 0 10px black
  }

  .header {
    background-color: lightskyblue
  }
</style>