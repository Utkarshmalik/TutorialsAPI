const path = require('path');
const tutorialControllers= require(path.join(__dirname,"../controllers/tutorial.controllers"));
const verifyToken = require(path.join(__dirname,'../middlewares/authJWT'));

module.exports = app=>{
    app.get("/api/tutorials",tutorialControllers.findAll);
    app.get("/api/tutorials/published",tutorialControllers.findAllPublished)
    app.get("/api/tutorials/:id",tutorialControllers.findOne);
    app.post("/api/tutorials/:id",tutorialControllers.create);
    app.put("/api/tutorials/:id",tutorialControllers.update);
    app.delete("/api/tutorials/:id",tutorialControllers.delete);
    app.delete("/api/tutorials",tutorialControllers.deleteAll);
}

    

