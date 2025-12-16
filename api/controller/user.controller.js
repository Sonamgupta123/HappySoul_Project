import '../model/connection.js';

import jwt from 'jsonwebtoken';
import userSchemaModel from '../model/user.model.js';



export var save =async(req,res)=>{
    var userList = await userSchemaModel.find();
    // console.log(donorList);
    var len = userList.length;
    
    var _id = (len==0)?1:userList[len-1]._id+1;

    var userDetail = req.body;
   // console.log(donorDetail);
    userDetail ={...userDetail,"_id":_id,"role":"user","status":0,"info":Date()};
    //console.log(donorDetail);
    try{
     
     const user = await userSchemaModel.create(userDetail)
    
    res.status(201).json({"status":"Resourse created successfully"});
    }

catch(err){
  console.log(err)
    res.status(500).json({"status":"false"});
}
}

export const update = async(req,res)=>{
   
     var condition_obj = req.body.condition_obj;
   //console.log(condition_obj);
   var user = await userSchemaModel.findOne(condition_obj);
   // console.log(donor);
  if(user){
          var update_user = await userSchemaModel.updateOne(
  req.body.condition_obj,
  { $set: req.body.content_obj }
);
        if(update_user){
             res.status(200).json({"result":"updated successfully"});
         }
    else{
          res.status(500).json({"result":"not updated successfully"});
          }
 }
    else{
     res.status(404).json({"result":"user not found in database"});
    }
}
export const deleteuser = async(req,res)=>{
    var user = await userSchemaModel.findOne(req.body);
    //console.log(donor);
    if(user){
        var delete_user = await userSchemaModel.deleteOne((req.body));
        if(delete_user){
            res.status(200).json({"result":"user  deleted successfully"});
        }
        else{
            res.status(500).json({"result":"user not deleted successfully"});
        }
        }
    
    else{
         res.status(404).json({"result":"user not found in database"});
    }
}
export const login = async (req, res) => {
  const userList = await userSchemaModel.find({
    email: req.body.email,
    password: req.body.password
  });

  if (userList.length === 0) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const user = userList[0];

  // ✅ VERY IMPORTANT CHANGE
 const payload = {
  userId: userList[0]._id,   // NUMBER
  email: userList[0].email
};

const token = jwt.sign(payload, "secretkey", { expiresIn: "1d" });


  res.status(200).json({
    token,
    user
  });
};


export const fetch = async (req, res) => {
  try {
    let result = await userSchemaModel.find(req.query);
    res.send(result);
  } catch (err) {
    res.status(500).send("Server error");
  }
};
