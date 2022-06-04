const path = require('path');
const TutorialModel=require(path.join(__dirname,'../models/tutorial.model'));
const UserModel=require(path.join(__dirname,'../models/user.model'));

const db={
    tutorial:TutorialModel,
    user:UserModel
}

module.exports=db;