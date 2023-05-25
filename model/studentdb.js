const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Elzabeth:Elzabeth@cluster0.dtoxj7b.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("db connected");
})
.catch((err)=>{
    console.log('hii')
});

let Schema=mongoose.Schema;

const studentSchema=new Schema({
    sname:String,
    sgrade:Number,
})

var studentModel=mongoose.model("students",studentSchema);
module.exports=studentModel