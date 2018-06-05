import mongoose = require('mongoose');

let PackingSchema = new mongoose.Schema({
    destination : {type:String, lowercase: true},
    season : String,
    items: {type: Array,},
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
  }});
  export default mongoose.model('Packing', PackingSchema);