const express = require("express");

const cors = require("cors");

const app = express();
require("dotenv").config();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT
const connect = require("./configs/db")
const searchController = require("./controllers/search.controller");
const  userController= require("./controllers/user.controller");
// app.post("/register",register);
// app.post("/login",login);

app.use("/search",searchController)
app.use("/",userController)

app.listen(PORT, async()=>{
    try {
        await connect();
        console.log("listening port 8080")
    } catch (error) {
        console.log(error);
    }
})