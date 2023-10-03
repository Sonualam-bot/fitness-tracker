const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json())

//Route imports
const exercise = require("./routes/exercise.router")
const food = require("./routes/food.router")
const goal = require("./routes/goal.router")
const auth = require("./routes/auth.router");
const user = require("./routes/user.router")


const corsOptions = {
    origin: 'https://fitness-tracker-orpin.vercel.app'
};

app.use(cors(corsOptions));


app.use("/api/v1", exercise)
app.use("/api/v1", food)
app.use("/api/v1", goal)
app.use("/api/v1", auth)
app.use("/api/v1", user)

module.exports = app;