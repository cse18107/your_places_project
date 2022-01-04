const express = require('express');
const bodyParser = require('body-parser');

const placesRoutes = require('./routes/places-routes');

const app = express();


app.use('/api/places',placesRoutes);


app.listen(5000,()=>{
    console.log("app is running from server 5000");
});