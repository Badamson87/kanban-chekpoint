let router = require('express').Router()
let Tasks = require('../models/task')

//Get a task
router.get('/:listId', (req, res, next) => {
  Tasks.find({ listId: req.params.listId })
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      console.log(err)
      next()
    })
})


// Create a task

router.post('/', (req, res, next) => {
  Tasks.create(req.body)
    .then(newTask => {
      res.send(newTask)
    })
    .catch(err => {
      console.log(err)
      next()
    })
})

//edit a task

router.put('/:id', (req, res, next) => {
  Tasks.findById(req.params.id)
    .then(task => {
      task.update(req.body, (err) => {
        if (err) {
          console.log(err)
          next(err)
        }
        res.send("Updated Task")
      })
    })
})

//Delete a Task

router.delete('/:id', (req, res, next) => {
  Tasks.findById(req.params.id)
    .then(task => {
      task.remove(err => {
        if (err) {
          console.log(err)
          next()
          return
        }
        res.send("Task Deleted")
      })
    })
})


// Create a comment

router.post('/:taskId', (req, res, next) => {
  Tasks.findById(req.params.taskId)
    .then(task => {
      task.comments.push(req.body)
      task.save(err => {
        if (err) {
          next(err)
        }
        res.send(task.comments[task.comments.length - 1])
      })
    })
})

// Delete a comment

router.delete('/:taskId/:commentId', (req, res, next) => {
  Tasks.findById(req.params.taskId)
    .then(task => {
      let index = task.comments.findIndex(comment => {
        return comment._id == req.params.commentId
      })
      task.comments.splice(index, 1)
      task.save(err => {
        if (err) {
          next(err)
        }
        res.send(task)
      })
    })
})

module.exports = router