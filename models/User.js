const { model, Schema } = require('mongoose')

const User = new Schema({
  name: String,
  email: String,
  items: [{
    type: Schema.Types.ObjectId,
    ref: 'Item'
  }]
})

User.plugin(require('passport-local-mongoose'))

module.exports = model('User', User)
