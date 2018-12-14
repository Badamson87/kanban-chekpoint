<template>
  <div class="row justify-content-center">
    <div class="list col-3">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h3 class="card-title">{{listData.title}} <i class="fas fa-trash action" @click="deleteList()"></i></h3>
          <form @submit.prevent="createTask">
            <input type="text" placeholder="New Task" v-model="newTask.title" required>
            <button type="submit"><i class="fas fa-plus"></i></button>
          </form>
          <task v-for="task in tasks" :listData="listData" :taskData="task"></task>
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