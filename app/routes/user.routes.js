const path = require('path');
const UserController = require(path.join(__dirname,'../controllers/user.controllers'));

module.exports=app=>{

    app.post('/api/user',UserController.create);
    app.get('/api/user',UserController.getAll);
    app.get('/api/user/:id',UserController.findById);
    app.get('/api/user/posts/:id',UserController.postsById); 
}