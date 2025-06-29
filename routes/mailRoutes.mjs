import express from 'express'
import {SendMail,SendOTP} from '../controller/mailerController.mjs'

const mailRouter = express.Router();

mailRouter.post('/sendmail',SendMail);
mailRouter.post('/sendOTP',SendOTP);

export default mailRouter;