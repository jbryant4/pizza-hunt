const { Schema, model} = require('mongoose');

//set up pizza schema to hold this data:
    // The name of the pizza
    // The name of the user that created the pizza
    // A timestamp of when the pizza was created
    // A timestamp of any updates to the pizza's data
    // The pizza's suggested size
    // The pizza's toppings

const PizzaSchema = new Schema({
    pizzaName: {
        type: String
    },
    createdBy: {
        type: String
    },
    createAt: {
        type: Date,
        default: Date.now
    },
    size: {
        type: String,
        default: 'Large'
    },
    toppings: []
});

// create the Pizza model using the PizzaSchema
const Pizza = model('Pizza', PizzaSchema);

// export the Pizza model
module.exports = Pizza;
