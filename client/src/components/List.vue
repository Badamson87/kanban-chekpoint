<template>
  <div class="row justify-content-center">
    <div class="list col-3">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h3 class="card-title">{{listData.title}}</h3>
          <h6 class="card-subtitle mb-2 text-muted">{{listData.description}}</h6>
          <button @click="deleteList()">Delete</button>
          <form @submit.prevent="createTask">
            <input type="text" placeholder="title" v-model="newTask.title" required>
            <input type="text" placeholder="description" v-model="newTask.description" required>
            <button type="submit">New Task</button>
          </form>
          <task v-for="task in tasks" :taskData="task"></task>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Task from '@/components/Task.vue'
  export default {
    name: 'List',
    props: ['listData'],
    components: {
      Task
    },
    data() {
      return {
        newTask: {
          title: '',
          description: '',
          listId: '',
          boardId: ''
        }
      }
    },
    mounted() {
      return this.$store.dispatch('getTasks', this.listData._id)
    },
    computed: {
      // Lists() {
      //   return this.$store.state.lists || []
      // },
      tasks() {
        return this.$store.state.tasks[this.listData._id] || []
      }
    },
    methods: {
      deleteList() {
        this.$store.dispatch('deleteList', this.listData)
      },
      createTask() {
        this.newTask.boardId = this.listData.boardId
        this.newTask.listId = this.listData._id
        this.$store.dispatch("createTask", this.newTask)
        this.newTask = { title: "", description: "", boardId: "", listId: "" }
      }
    }
  }
</script>

<style scoped>

</style>