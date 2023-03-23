// Import the mongoose module
const mongoose = require("mongoose");

mongoose.set('strictQuery', false);

// Define the database URL to connect to.
const user = process.env.DB_USER
const pass = process.env.DB_PASS
const mongoDB = `mongodb+srv://${user}:${pass}@mentaluz.tqaaxec.mongodb.net/?retryWrites=true&w=majority`;

async function main() {
  await mongoose.connect(mongoDB);
  console.log("DB Connection successful")
}
main().catch((err) => {
  console.error("DB Connection Failed")
});
