 
const fs = require('fs');
 const users = JSON.parse(fs.readFileSync(`./dev-data/data/users.json`));
 const getAllUsers =(req,res)=>{
     res.status(500).json({
         status:'error',
         message:'this route is not yet defined'
     })
 }
 const createUser =(req,res)=>{
     res.status(500).json({
         status:'error',
         message:'this route is not yet defined'
     })
 }
 
 const getUser =(req,res)=>{
     res.status(500).json({
         status:'error',
         message:'this route is not yet defined'
     })
 }
 const updateUser =(req,res)=>{
     res.status(500).json({
         status:'error',
         message:'this route is not yet defined'
     })
 }
 const deleteUser =(req,res)=>{
     res.status(500).json({
         status:'error',
         message:'this route is not yet defined'
     })
 }


 module.exports = {
    getAllUsers,
    createUser,
    getUser,
    updateUser,
    deleteUser
 }