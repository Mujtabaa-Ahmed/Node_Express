import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('this is the first print in new branch from main local branch')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
