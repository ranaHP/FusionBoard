import mongoose from 'mongoose';
// so here iam goint to import mongoose and we are going to create mongoose schema here

// so way we do that 
const UserShema = new mongoose.Schema({
    //  and in here we are going to pass number of properties
    name: {
        type: String,
        required: true,
        min: 2,
        max: 100
    },
    password: {
        type: String,
        required: true,
        min: 5,
    },
    transactions: Array,
    role: {
        type: String,
        enum: ['user', 'admin', 'superadmin'],
        default: 'user'
    },
},
    { timestamps: true } // so this just gives us automatically created date and updated data as well ;
);

const User = mongoose.model("User", UserShema);
export default User;

// so again here , let me just explain everything thats happened.

// mongoose data base will be use this shcema to make sure that every time you put actual data into database for particular user .it has fallow this format. so this