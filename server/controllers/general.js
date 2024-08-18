import OverallStat from '../models/OverallStat.js';
import Transaction from '../models/Transaction.js';
import User from '../models/User.js';  // so in this case this is different from the frontend. we do have to put .js . so make sure you add those

// then we are going to export const getUSer. 
// so this is typical for express application. we have a req which is where you can get params and body.and the res is going to be waht  we use to send back data to fornemd.
export const getUser = async (req, res) => {
    // we are going to have a try catch block. so meaning we will try everything in try catch block. and if it dosen"t work out the catch is going to catch any errors and send back.
    // so the way we do this, we are going to take id from params and then we are going to find that user.
    try{
        const { id } = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    }catch (error){
        res.status(400).json({
            message: error.message
        })
    }
    
}
export const getDashboardStats = async (req, res) => {
    try {
      // hardcoded values
      const currentMonth = "November";
      const currentYear = 2021;
      const currentDay = "2021-11-15";
  
      /* Recent Transactions */
      const transactions = await Transaction.find()
        .limit(50)
        .sort({ createdOn: -1 });
  
      /* Overall Stats */
      const overallStat = await OverallStat.find({ year: currentYear });
  
      const {
        totalCustomers,
        yearlyTotalSoldUnits,
        yearlySalesTotal,
        monthlyData,
        salesByCategory,
      } = overallStat[0];
  
      const thisMonthStats = overallStat[0].monthlyData.find(({ month }) => {
        return month === currentMonth;
      });
  
      const todayStats = overallStat[0].dailyData.find(({ date }) => {
        return date === currentDay;
      });
  
      res.status(200).json({
        totalCustomers,
        yearlyTotalSoldUnits,
        yearlySalesTotal,
        monthlyData,
        salesByCategory,
        thisMonthStats,
        todayStats,
        transactions,
      });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };