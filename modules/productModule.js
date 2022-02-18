const { ObjectId } = require('mongodb');
var mongo = require('../shared/connect');

module.exports.getProduct = async (req,res,next) => {
    try {
        var response = await mongo.db.collection("Products").find().toArray()
        res.send(response);
    } catch(err) {
        console.error(err);
        res.status(500).send(err);
    }
}

module.exports.createProduct = async (req,res,next) => {
    try {
        var response = await mongo.db.collection('Products').insertOne(req.body)
        res.send(response)
    } catch(err) {
        console.error(err);
        res.status(500).send(err);
    }
}

module.exports.updateProduct = async (req,res,next) => {
    try{
        var response = await mongo.db.collection('Products').findOneAndUpdate({_id: ObjectId(req.params.id)}, {$set: {...req.body}}, {returnNewDocument: true})
        res.send(response)
    }catch(err){
        console.error(err);
        res.status(500).send(err);
    }
}

module.exports.deleteProduct = async (req,res,next) => {
    try{
        var response = await mongo.db.collection('Products').remove({_id: ObjectId(req.params.id)})
        res.send(response)
    }catch(err) {
        console.error(err);
        res.status(500).send(err);
    }
}