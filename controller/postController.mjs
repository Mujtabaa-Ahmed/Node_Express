import {studentsDB} from '../Connection/mongoDB.mjs'

export const creatPost = async (req,res)=>{
    try{
        const {name,batch,age} = req.body;
        //res.send(`Received name: ${name} and age is ${age}`);
        //console.log(`Received name: ${name} and age is ${age}`)

        await studentsDB.collection('students').insertOne({name,batch,age});
        res.status(200).send({name,batch,age,status: "inserted"});
    }catch(error){
        console.log("bad request catch on Post")
        res.status(400).send({message: error})
    }
}