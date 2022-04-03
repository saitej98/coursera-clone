const mongoose = require("mongoose");


const searchSchema = new mongoose.Schema({
  
      title:{type:String , required:true}, 
      imageurl:{type:String , required:true},
      place:{type:String , required:true},
      coursetype:{type:String , required:true},
      ratings:{type:String , required:true},
      students:{type:String , required:true},
      level:{type:String , required:true},
      language:{type:String , required:true},
      skill:{type:String , required:true},
      subject:{type:String , required:true},
      duration:{type:String , required:true},
})



module.exports = mongoose.model("search",searchSchema)