const express = require('express')
const bodyParser = require('body-parser')
const users = require('./db')
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.get('/users', (req, res) => {
	      res.json(users)
	})
app.get('/users/:id', (req, res) => {
	      res.json(users.find(user => user.id === req.params.id))
	})
app.post('/users', (req, res) => {
	      users.push(req.body)
	       res.status(201).json(req.body)
	})
app.put('/users/:id', (req, res) => {
	       const updateIndex = users.findIndex(user => user.id === req.params.id)
	       res.json(Object.assign(users[updateIndex], req.body))
	})
	app.delete('/users/:id', (req, res) => {
	const deleteIndex = users.findIndex(user => user.id === req.params.id)
	users.splice(deleteIndex, 1)
	res.status(204).send()
	})
	app.listen(3000, () => {
	console.log('Start server at port 3000.')
})
