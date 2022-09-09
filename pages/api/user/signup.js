import User from "../../../models/User";
import connectDb from "../../../middleware/mongoose";

var AES = require("crypto-js/aes");
var CryptoJS = require("crypto-js");

const handler = async (req, res) => {
  if (req.method == "POST") {
    const { name, email, password } = req.body;

    try {

      let u = new User({
        name,
        email,
        password: CryptoJS.AES.encrypt(password, "secret123").toString(),
      });

      await u.save();

      res.status(201).json({ message: "Account Created Successfully" });

    } catch (error) {
        console.log(error)
        res.status(403).json({ error})
        // res.status(403).json({ message: "Account Already Exists Check Your Email Id or Login" })
    }
  } else {
    res.status(405).json({ message: "This method is not allowed" });
  }
};

export default connectDb(handler)