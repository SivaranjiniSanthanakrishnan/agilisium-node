const {MongoClient} = require("mongodb");

module.exports = {
    db: null,
    async connect (){
        try {
            const connection = await MongoClient.connect(process.env.MONGODB_URL);
            this.db = connection.db("agilisium");
            console.log("Connection success");
        } catch(err) {
            console.error(err)
        } 
    }
}