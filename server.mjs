import express from 'express'
import postRourte from './routes/postRoutes.mjs'
import mailRoute from './routes/mailRoutes.mjs'
import dotenv from 'dotenv'

dotenv.config();
const app = express()
const port = 3000
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hellow World!')
})
app.use('/api/v1',postRourte)
app.use('/api/v1',mailRoute)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
