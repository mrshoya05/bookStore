
import User from "../model/user.model.js";
import bcryptjs from 'bcryptjs'
export const  Signup = async(req, res)=>{
    try {
        const {name, email, password} = req.body;
        const user = await User.findOne({email})
        if(user){
            return res.status(400).json(
                {message: "Email already exists", status: false}
            )
        }
const hashPassword = await bcryptjs.hash(password, 10)

        const Createduser = new User({
            name, email, password : hashPassword,
         })

      await  Createduser.save()
        res.status(201).json(
            {
                message: "User created successfully !",
                user: {
                    _id: Createduser._id,
                    name: Createduser.name,
                    password: Createduser.password
                }
            }
        )
    } catch (error) {
        console.log("Error :", error);
        res.status(500).json({ message: "Error fetching user" })
    }
}


//login api 

export const Login =  async (req, res)=>{
   try {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    const isMatch = await bcryptjs.compare(password, user.password)
    if(!user || !isMatch){
        return res.status(400).json({
            message: "Invalid user or password !"
        })
    }else{
        res.status(200).json({
            message: "Login successful ! ",
            user:{
                name: user.name,
                email: user.email,
                _id: user._id
            }
        })
    }


   } catch (error) {
    console.log("Error : ", error);
    res.status(500).json({
        message: "Internal error"
    })
   }
}