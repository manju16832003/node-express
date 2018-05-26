const express = require('express')

// get express object
const app = express()

// PORT environment variable. Read it from process
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
	res.send('Huurary......')
})


app.get('/api/courses', (req, res) => {
	res.send([1, 2, 3, 4])
})

// :id is route paramater
// :id?sortBy=name is query string parameters
app.get('/api/courses/:id', (req, res) => {
	const id = req.params.id
	res.send(id)
})

app.listen(port, () => {
	console.log(`Listening on port ${port}`)
})