<template>
  <div class="board">
    <div class="row">
      <div class="col">
        <h1>{{board.title}}</h1>
        <h2>{{board.description}}</h2>
        <form @submit.prevent="addList">
          <input type="text" placeholder="title" v-model="newList.title" required>
          <input type="text" placeholder="description" v-model="newList.description">
          <button type="submit">Create List</button>
        </form>
        <div>
          <list v-for="list in lists" :listData="list"></list>
        </div>
      </div>
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
          description: '',
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
        this.newList = { title: "", description: "", boardId: "" };
      },
    }
  };
</script>