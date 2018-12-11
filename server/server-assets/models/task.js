let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Task'

let schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  boardId: { type: ObjectId, ref: "Board", required: true },
  listId: { type: ObjectId, ref: "List", required: true },
}, { timestamps: true })


module.exports = mongoose.model(schemaName, schema)