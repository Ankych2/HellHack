const express = require('express')
const app = express()
const port = 3000
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const rateLimit = require('express-rate-limit')

//1 request per second
const limiter = rateLimit({
    windowMs:1000,
    max:1 , // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers

})

// Apply the rate limiting middleware to all requests
app.use('/',limiter);

//app.use('specfic path'.limiter);
main().catch(err => console.log(err));


// MongoDb Connection
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


app.use(bodyParser.json())
app.use(require('./routes/routes'))

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})