const mongoose = require ('mongoose')
const Schema = mongoose.Schema
const location = require ('./location')
const review = require( './review')

const Location = mongoose.model('Location', location)

const Review = mongoose.model('Review', review)

module.exports= {Location, Review}  