
import express from 'express';

const router = express.Router();

//to link controller
import * as contactController from '../controller/contact.controller.js';
router.post("/send",contactController.save);
 router.get("/fetch",contactController.fetch);

export default router;