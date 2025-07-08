const { trusted, default: mongoose } = require("mongoose");

const permissionSchema = new mongoose.Schema({
    
    admin_id:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref: 'Admin'
    },
    permission:[{
        permission_name: String,
        permission_value: [number]
    }]
   
 
});

module.exports = mongoose.model('Permission', permissionSchema);

