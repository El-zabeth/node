//1.importing
const express=require('express');
const{model}=require("mongoose");
const studentModel=require('./model/studentdb')


//2.initialize
const app=new express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//3.api creation
app.get('/view',(req,res)=>{
    res.json({"name":"Neha","age":20})
})


app.post('/create',(req,res)=>{
    var result=new studentModel(req.body);
    result.save();
    res.send("Data added")
})
//to view data
app.post('/see',async(req,res)=>{
    var data=await studentModel.find();
    res.json(data)
})
//to delete data
app.delete('/delete/:id',async(req,res)=>{
    let id=req.params.id;
    await studentModel.findByIdAndDelete(id);
    res.send("deleted")
}) 
//to update  data
app.put('/edit/:id',async(req,res)=>{
    let id=req.params.id;
    await studentModel.findByIdAndUpdate(id,req.body);
    res.send("updated")
})

//port 
app.listen(8080,()=>{
    console.log("App is coming in port 8080")
})