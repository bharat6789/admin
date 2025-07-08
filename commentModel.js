const { trusted, default: mongoose } = require("mongoose");

const postSchema = new mongoose.Schema({
    
    admin_id:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref: 'Admin'
    },
    post_id:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref: 'Post'
    },
    comment:{
        type: String,
        required: true
    }
 
});

module.exports = mongoose.model('Comment', CommentSchema);
