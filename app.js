const express = require('express')

const livroRouter = require('./route/livro_router');


const app = express()
const port = 3000

app.use(express.json());



app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})


app.use('/api/produtos', livroRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})