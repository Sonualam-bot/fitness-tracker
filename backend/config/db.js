const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect("mongodb+srv://mrrenon:mrrenon15@cluster0.ihxsrpy.mongodb.net/?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: 'fitnessTracker'
        }).then((data) => {
            console.log(`MongoDb connected with server : ${data.connection.host} `)
        }).catch((err) => {
            console.log(err)
        })
}

module.exports = connectDatabase