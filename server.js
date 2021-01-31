const dotenv = require("dotenv");
const connectDB = require("./config/db");

const app = require("./app");

dotenv.config();

const port = process.env.PORT || 5555;
app.listen(port, () => {
  console.log(`Listening on port ${port}....`);
  connectDB();
});
