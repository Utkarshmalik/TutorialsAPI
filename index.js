const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const verifyToken = require(path.join(__dirname,"./app/middlewares/authJWT"));
require('dotenv').config()


mongoose.connect(process.env.MONGODB_URL);

const db= mongoose.connection;

db.on("open",()=>{
    console.log("Connected successfully");
})

db.on("error", ()=>{
    console.log("not able to connect to DB");
})

app.use(cors({
    origin:'*'
}))

app.use(bodyParser.json());


require("./app/routes/auth.routes")(app);

app.use(verifyToken);

require("./app/routes/tutorial.routes")(app);
require("./app/routes/user.routes")(app);



app.listen(process.env.PORT,()=>{
    console.log("Server is running on port "+process.env.PORT);
})