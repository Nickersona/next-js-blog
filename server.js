const express = require('express')
const next = require('next')
const _ = require('lodash');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()


// let pageMap = null;
app.prepare()
.then(() => {
  const server = express()

  server.get('/p/:title', (req, res) => {
    const actualPage = '/post'
    const queryParams = { 'title': req.params.title } 
    app.render(req, res, actualPage, queryParams)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})