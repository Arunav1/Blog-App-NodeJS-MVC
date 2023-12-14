const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema of our database:

const BlogSchema = new Schema({

    title:{
        type:String,
        required:true
    },
    snippet:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    }
}, {timestamps:true});

//Model ofour database:(Shoukd be in singular name:)

const Blog = mongoose.model('Blog', BlogSchema);

module.exports = Blog;





