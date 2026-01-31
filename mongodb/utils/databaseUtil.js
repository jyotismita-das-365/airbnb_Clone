const mongo = require("mongodb");

const MongoClient = mongo.MongoClient;

const MONGO_URL = "mongodb+srv://root:root@jyoti.icqiemi.mongodb.net/?appName=jyoti"

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(MONGO_URL).then(client => {
  callback();
  _db = client.db('airbnb');
}).catch(err => {
  console.log("error while connecting to mongo", err);
});
}

const getDB = () => {
  if(!_db) {
    throw new Error('Mongo not Connected');
  }
  return _db;
}

module.exports = mongoConnect;
module.exports = getDB;