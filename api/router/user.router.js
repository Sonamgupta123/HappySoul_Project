
import express from 'express';

const router = express.Router();

//to link controller
import * as userController from '../controller/user.controller.js';
router.post("/register",userController.save);
router.get("/fetch", userController.fetch);
 router.patch("/update",userController.update);
 router.delete("/delete",userController.deleteuser);
 router.post("/login",userController.login);
export default router;