const {MongoClient} = require("mongodb");

module.exports = {
    db: null,
    async connect (){
        try {
            const connection = await MongoClient.connect("mongodb+srv://sivaranjini:fW4PcVRMjILp4WGc@cluster0.sdfhf.mongodb.net?retryWrites=true&w=majority");
            this.db = connection.db("agilisium");
            console.log("Connection success");
        } catch(err) {
            console.error(err)
        } 
    }
}