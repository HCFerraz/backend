import express from 'express'

const app = express()
app.use(express.json())

app.get('/users', (req, res) => {
    res.json({ message: "This are the users" })
})

app.post('/users/add', (req, res) => {
    res.json(req.body)
})
app.listen(5050)