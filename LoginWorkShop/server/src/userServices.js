var userModel = require("../schema");

module.exports.findOneUserDBService = (invoiceDetails) =>{
    return new Promise(function myfn(res, rej) {
        userModel.findById({_id:invoiceDetails}, function returnData(err, reslt){
            if(err){
                rej(false);
            }else{
                res(reslt);
            }
        })
    })
}