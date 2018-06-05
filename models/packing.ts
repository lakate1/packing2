import mongoose = require('mongoose');

let PackingSchema = new mongoose.Schema({
    destination : {type:String, lowercase: true},
    season : String,
    items: {type: Array,},
    userid: {type: String, required: true}
});
  export default mongoose.model('Packing', PackingSchema);