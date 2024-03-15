import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'

function Create() {
  const [values, setValues] = useState({
    adminID: '',
    fullname: '',
    username: '',
    password: ''
  })

  const navigate = useNavigate()
  
  function handleSubmit(e) {
    e.preventDefault()

    axios.post('/add_user', values)
    .then((res)=>{
      navigate('/')
      console.log(res)
    })
    .catch((err)=>console.log(err))
  }
  return (
    <div className="container 100-vh vw-100 bg-primary">
      <div className="row">
        <h3>Add Student</h3>
        <div className='d-flex justify-content-end'>
          <Link to='/' className='btn btn-success'>Home</Link>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group ">
            <label htmlFor="adminID">Admin ID</label>
            <input type="text" name='adminID' onChange={(e)=>setValues({...values, adminID: e.target.value})} />
          </div>
          <div className="form-group ">
            <label htmlFor="fullname">Full Name</label>
            <input type="text" name='fullname' onChange={(e)=>setValues({...values, fullname: e.target.value})} />
          </div>
          <div className="form-group ">
            <label htmlFor="username">Username</label>
            <input type="text" name='username' onChange={(e)=>setValues({...values, username: e.target.value})} />
          </div>
          <div className="form-group ">
            <label htmlFor="password">Password</label>
            <input type="password" name='password' onChange={(e)=>setValues({...values, password: e.target.value})} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Create