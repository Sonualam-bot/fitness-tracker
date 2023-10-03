const app = require('./app');

const dotenv = require('dotenv');
const connectDatabase = require("./config/db")


//config
dotenv.config({ path: "backend/config/config.env" })



//connecting to database
connectDatabase()

app.get("/", (req, res) => {
    res.json("Connected To Backend")
})

app.listen(4000, () => {
    console.log(`Server is listening to ${4000}`)
})