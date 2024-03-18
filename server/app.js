import express from 'express'
import { getUser, getUsers, createUser } from './database.js'

const app = express()

app.use(express.json())

// Displaying all users
app.get("/users", async (req, res) => {
  const users = await getUsers()
  res.send(users)
})

// Getting one user based from id
app.get("/users/:id", async (req, res) => {
  const id = req.params.id
  const user = await getUser(id)
  res.send(user)
})

// 
app.post("/users", async (req, res) => {
  const { admin_id, fullname} = req.body
  const user = await createUser(admin_id, fullname)
  res.status(201).send(user)
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(8080, () => {
  console.log('Server is running on port 8080')
}) 