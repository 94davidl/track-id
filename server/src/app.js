const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

//Post request to register the user.
app.post('/register', (req, res) => {
	console.log(req.body);
	res.send({
		message: `Hello ${req.body.email}!, Your user was registered! Have Fun`
	})
})

app.listen(process.env.PORT || 8081)