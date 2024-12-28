require("dotenv").config();
const mongoose = require("mongoose");

const connectString = process.env.MONGODB_CONNECT_URL;
class Database {
  constructor() {
    this.connect();
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  // connect
  connect(type = "mongodb") {
    mongoose
      .connect(connectString)
      .then((_) => {
        console.log("Connect db successful!");
      })
      .catch((e) => {
        console.log(e);
        console.log("Connect db fail!");
      });
  }
}

const instanceMongodb = Database.getInstance();
module.export = instanceMongodb;
