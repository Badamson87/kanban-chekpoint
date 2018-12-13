let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Task'

let comment = new Schema({
  body: { type: String, required: true },
  commentId: { type: ObjectId, required: true }
})

let schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  boardId: { type: ObjectId, ref: "Board", required: true },
  listId: { type: ObjectId, ref: "List", required: true },
  comments: [comment]
}, { timestamps: true, usePushEach: true })


module.exports = mongoose.model(schemaName, schema)