// create web server
// 1. npm init -y
// 2. npm i express
// 3. create index.js
// 4. create comments.js
// 5. create comments.json
// 6. node index.js

const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')
const bodyParser = require('body-parser')
const path = require('path')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/comments', function (req, res) {
  fs.readFile('./comments.json', 'utf8', function (err, data) {
    if (err) {
      res.status(500).send('Server error')
    }
    res.send(data)
  })
})

app.post('/comments', function (req, res) {
  fs.readFile('./comments.json', 'utf8', function (err, data) {
    if (err) {
      res.status(500).send('Server error')
    }
    const comments = JSON.parse(data)
    const newComment = {
      id: Date.now(),