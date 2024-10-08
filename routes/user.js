const express = require("express");
const router = express.Router();

const {login,signup} = require("../controllers/Auth");
const {auth,isStudent,isAdmin} = require("../middlewares/auth");


router.post("/login",login);
router.post("/signup",signup);

//protected route for testing
router.get("/test",auth,(req,res) =>
{
    res.json({
        success:true,
        message:"Test login route",
    });
})


//protected route for student
router.get("/student",auth,isStudent , (req,res) =>
{
    res.json({
        success:true,
        message:"Student login route",
    });
})
router.get("/admin",auth,isAdmin , (req,res) =>
{
    res.json({
        success:true,
        message:"Admin login successfully",
    });
})
module.exports = router;