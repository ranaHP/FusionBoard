import mongoose from 'mongoose';
// so here iam goint to import mongoose and we are going to create mongoose schema here

// so way we do that 
const ProductStatShema = new mongoose.Schema({
    //  and in here we are going to pass number of properties
    productId: String,
    yaerlySaleTotal: Number,
    yearlyTotalSoldUnits: Number,
    year: Number,
    monthlyData: [
        {
            month: String,
            totalSales: Number,
            totalUnits: Number
        }
    ],
    dailyData: [
        {
            date: String,
            totalSales: Number,
            totalUnits: Number
        }
    ]
    },
    { timestamps: true } // so this just gives us automatically created date and updated data as well ;
);

const ProductStat = mongoose.model("ProductStat", ProductStatShema);
export default ProductStat ;

// so again here , let me just explain everything thats happened.

// mongoose data base will be use this shcema to make sure that every time you put actual data into database for particular user .it has fallow this format. so this