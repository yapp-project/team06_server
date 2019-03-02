var Schema = { };

Schema.createSchema = function(mongoose){
    var UserSchema = mongoose.Schema({
        nickname: {type: String, index:'hashed'},
        location:{
            'type': {type: String, 'default':"Point"},
            coordinates:[{type:"Number"}]
            
        },
        //published_date: { type: Date, default: Date.now}
    });
    console.log("userSchema 정의함");
    return UserSchema;
}


//module.exports에 UserSchema 객체 직접 할당. 
module.exports = Schema;