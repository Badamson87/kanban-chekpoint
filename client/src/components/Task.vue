<template>
  <div class="task">
    <div class="card">
      <div class="cardbody">
        <h4 class="card-title">{{taskData.title}} </h4>
        <p class="card-text">{{taskData.description}}</p>
        <button @click="deleteTask()">Delete</button>
        <form @submit.prevent='createComment'>
          <input type="text" v-model="newComment.body" placeholder="comment here">
          <button type="submit">Comment</button>
        </form>
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            Move
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <p class="dropdown-item action" v-for="list in lists" @click="moveTask(list._id)" :listData="list" value="list._id">{{list.title}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Task',
    props: ['taskData', 'listData'],
    data() {
      return {
        newComment: {
          body: ''
        }
      }
    },
    mounted() {
    },
    computed: {
      lists() {
        return this.$store.state.lists
      }

    },
    methods: {
      deleteTask() {
        this.$store.dispatch('deleteTask', this.taskData)
      },
      moveTask(id) {
        let payload = {
          listId: id,
          taskId: this.taskData._id,
          oldListId: this.taskData.listId
        }
        this.$store.dispatch('moveTask', payload)
      },
      createComment() {
        let payload = {
          taskId: this.taskData._id,
          body: this.newComment.body
        }
        console.log(payload)
        this.$store.dispatch('createComment', payload)
      }
    }
  }

</script>

<style>
  .action {
    cursor: pointer;
  }
</style>