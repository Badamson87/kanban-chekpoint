<template>
  <div class="task">
    <div class="card">
      <div class="cardbody">
        <h4 class="card-title">{{taskData.title}} <i class="fas fa-trash action" @click="deleteTask()"></i></h4>
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle fas fa-truck-moving" type="button" id="dropdownMenuButton"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <p class="dropdown-item action" v-for="list in lists" @click="moveTask(list._id)" :listData="list" value="list._id">{{list.title}}</p>
          </div>
        </div>
        <p class="card-text">{{taskData.description}}</p>
        <form @submit.prevent='createComment'>
          <input type="text" v-model="newComment.body" placeholder="New Comment">
          <button type="submit"><i class="fas fa-plus"></i></button>
        </form>
      </div>
      <div v-for="comment in taskData.comments">{{comment.body}}
        <i class="fas fa-trash action" @click="deleteComment(comment._id)"></i>
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
          body: this.newComment.body,
          listId: this.listData._id
        }
        console.log(payload)
        this.$store.dispatch('createComment', payload)
      },
      deleteComment(id) {
        let payload = {
          taskId: this.taskData._id,
          commentId: id
        }
        this.$store.dispatch('deleteComment', payload)
      }
    }
  }

</script>

<style>
  .action {
    cursor: pointer;
  }
</style>