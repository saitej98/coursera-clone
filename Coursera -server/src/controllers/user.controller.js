
require("dotenv").config();
const express = require("express");

const router = express.Router();
const jwt = require("jsonwebtoken");

const User = require("../Models/user.model");

const newToken = (user) => {
    return jwt.sign({ user }, process.env.JWT_SECRET_KEY);
  };


  router.post("/register",async(req,res)=>{
      try {
          
    let user = await User.findOne({email:req.body.email}).lean().exec();
    if(user){
        return res.status(500).send("try another email");
    }
        user = await User.create(req.body);

        const token = newToken(user);
        

        return res.send({user,token});

      } catch (error) {
          return res.send(error.message);
      }
  })
  
  router.get("/register", async(req,res)=>{

    const users = await User.find().lean().exec();
    
    res.status(200).send(users)

})

 router.post("/login", async(req,res)=>{
      try {
        
        let user = await User.findOne({email:req.body.email});

        if(!user){
            return res.send("you entered wrong email or password");   
        }
        const match = user.checkPassword(req.body.password);

        if(!match){
            return res.send("you entered wrong email or password");
        }
        const token = newToken(user);
        return res.send({user,token})
     
      } catch (error) {
          
      }
  })

  router.get("/login", async(req,res)=>{

    const users = await User.find().lean().exec();
    
    res.status(200).send(users)

})


  module.exports  = router