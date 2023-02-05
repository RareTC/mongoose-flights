const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);

//shortcut var to use in the code to follow
const db = mongoose.connection;

db.on('connected', function() {
    console.log(`connected to MongoDB ${db.name} at ${db.host}:${db.port}`)
});