const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// ANIMAL SCHEMA
const AnimalSchema = new Schema({
    Zoo: {
        type: String,
        required: true
    },
    Scientific_Name: {
        type: String,
        required: true
    },
    Common_Name: {
        type: String,
        required: true
    },
    Given_Name: {
        type: String,
        required: true
    },
    Gender: {
        type: String,
        required: true
    },
    Date_Of_Birth: {
        type: Date,
        required: true
    },
    Age: {
        type: Number,
        required: true
    },
    isTransportable: {
        type: Boolean,
        required: true
    }
});