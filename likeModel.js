const { trusted, default: mongoose } = require("mongoose");

const likeSchema = new mongoose.Schema({
    
    admin_id:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref: 'Admin'
    },
    post_id:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref: 'Post'
    }
 
});

module.exports = mongoose.model('Like', likeSchema);
  