import mongoose from 'mongoose';
// so here iam goint to import mongoose and we are going to create mongoose schema here

// so way we do that 
const ProductShema = new mongoose.Schema({
    //  and in here we are going to pass number of properties
    name: String,
    price: Number,
    description: String,
    category: String,
    rating: Number,
    supply: Number
    },
    { timestamps: true } // so this just gives us automatically created date and updated data as well ;
);

const Product = mongoose.model("Product", ProductShema);
export default Product ;

// so again here , let me just explain everything thats happened.

// mongoose data base will be use this shcema to make sure that every time you put actual data into database for particular user .it has fallow this format. so this