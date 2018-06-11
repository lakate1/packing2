import mongoose = require('mongoose');

let PackingSchema = new mongoose.Schema({
    destination : {type:String, lowercase: true},
    season : String,
    item1:  String,
    item2: String,
    item3: String,
    postedBy: String
      
  });
  export default mongoose.model('Packing', PackingSchema);
