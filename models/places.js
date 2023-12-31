const mongoose = require('mongoose')

const { Schema } = mongoose 

const placeSchema = new Schema({
    name: { type: String, required: true },
    pic: { type:String, default: "http://placekitten.com/350/350"},
    cuisines: { type: String, required: true },
    city: { type: String, default: 'Anytown' },
    state: { type: String, default: 'USA' },
    founded: {
    type: Number,
    min: [1870, "Were you even born yet?"],
    max:[new Date().getFullYear(), "We presume it will be amazing!"]
    },
    comments: [{type: mongoose.Schema.Types.ObjectId, ref :'Comment'}]
})

placeSchema.methods.showEstablished = function(){
    return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}`
}

module.exports = mongoose.model('Place', placeSchema)