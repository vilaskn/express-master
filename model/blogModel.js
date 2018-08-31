var mongoose = require('mongoose');

var blogSchema = new mongoose.Schema({
    name: String,
    alias: {type:String},
    image: {type:String},
    description:{type:String},
    githubUrl: {type:String},
    tag: {name:{type:String},class:String},
    imageSliders: [{type:String}],
    relatedBlogs: [{name:{type:String}, link: {type:String}}]
  });

module.exports = mongoose.model('Project', blogSchema);