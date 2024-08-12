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