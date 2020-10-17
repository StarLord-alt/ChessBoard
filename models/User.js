var mongoose=require('mongoose')
var schema=mongoose.Schema;

var UserSchema= new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type:String,
        required: true
    }
});


module.exports=mongoose.model('User',UserSchema);