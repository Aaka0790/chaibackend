require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('AKASH CHAUHAN')

})
app.get('/instagram', (req, res) => {
    res.send('<h2><a href="https://www.instagram.com">Instagram</a></h2>')
})
app.get('/login', (req, res) => {
    res.send('<h2>Please Login in Chai Aur Code</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
