import mongoose = require('mongoose');

let PackingSchema = new mongoose.Schema({
    destination : {type:String, lowercase: true, unique:true},
    season : String,
    items: [],
    userid: {type: String, required: true}
});
  export default mongoose.model('Packing', PackingSchema);