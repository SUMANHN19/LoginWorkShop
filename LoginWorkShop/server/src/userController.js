var userService = require("./userServices");


var findOneUserController = async (req, res) =>{

    console.log(req.params._id);
    var result = await userService.findOneUserDBService(req.params._id);

    if (result){
        res.send({status:"ok", "data":result});
    }else{
        res.send({status:"No", "data":"Invoice Does'nt exist"});
    }
}


module.exports = {findOneUserController};