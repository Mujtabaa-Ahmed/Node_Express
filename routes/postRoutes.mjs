import express from 'express'
import {creatPost} from '../controller/postController.mjs'

const postRourtes = express.Router();



postRourtes.post('/post',creatPost);



export default postRourtes;