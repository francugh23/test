const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, "public")))
app.use(cors())
app.use(express.json())

const port = 5000

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test"
})

// Add user-admin
app.post('/add_user', (req, res)=>{
  sql = "INSERT INTO users (admin_id, fullname, username, password) VALUES (?, ?, ?, ?)";
  const values = [
    req.body.adminID,
    req.body.fullname,
    req.body.username,
    req.body.password,
  ]
  db.query(sql, values, (err, result)=>{
    if(err) return res.json({message: 'Something unexpected has occured' + err})
    return res.json({success: "User successfully added."})
  })
})

app.listen(port, ()=>{
  console.log("Listening")
})