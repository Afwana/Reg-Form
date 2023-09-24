import { useState } from 'react';
import './App.css';
import { TextField, Stack, Button, Alert } from '@mui/material'

function App() {

  const [name,setName] = useState(0)
  const [course,setCourse] = useState(0)
  const [email,setEmail] = useState(0)
  const [username,setUsername] = useState(0)
  const [password,setPassword] = useState(0)
  const [validName,setValidName] = useState(0)
  const [validCourse,setValidCourse] = useState(0)
  const [validEmail,setValidEmail] = useState(0)
  const [validUserName,SetValidUserName] = useState(0)
  const [validPassword,setValidPassword] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!name || !course || !email || !username || !password ){
      alert("Please fill the form completely!!!")
    }
    else{
      alert(`
      -------- Student Details --------
        Student Name : ${name}
        Course : ${course}
        Email : ${email}
        Username : ${username}
        Password : ${password}
      ---------------------------------
      `)
    }
  }

  const validateText = (e) => {
    const {name,value} = e.target
    if(!!value.match(/^[a-zA-Z]+$/)){
      // valid expression 
      if(name==="name"){
        setName(value)
        setValidName(true)
      }
      else if(name==="course"){
        setCourse(value)
        setValidCourse(true)
      }
      else if(name==="username"){
        setUsername(value)
        SetValidUserName(true)
      }
    }
    else{
      // invalid expressions
      if(name==="name"){
        setName(value)
        setValidName(false)
      }
      else if(name==="course"){
        setCourse(value)
        setValidCourse(false)
      }
      else if(name==="username"){
        setUsername(value)
        SetValidUserName(false)
      }
    }
  }

  const validateEmail = (e) => {
    const {name,value} = e.target
    if(!!value.match(/(^[a-zA-Z0-9]+\.[a-zA-Z0-9]+@gmail\.com$)/)){
      // valid email
      if(name==="email"){
        setEmail(value)
        setValidEmail(true)
      }
    }
    else{
      // invalid email
      if(name==="email"){
        setEmail(value)
        setValidEmail(false)
      }
    }
  }

  const validatePassword = (e) => {
    const {name,value} = e.target
    if(!!value.match(/^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/)){
      // valid password 
      if(name==="password"){
        setPassword(value)
        setValidPassword(true)
      }
    }
    else{
      // invalid password
      if(name==="password"){
        setPassword(value)
        setValidPassword(false)
      }
    }
  }

  const handleClear = () => {
    setName(0)
    setCourse(0)
    setEmail(0)
    setUsername(0)
    setPassword(0)
  }

  return (
    <div className='w-100 d-flex justify-content-center align-items-center' style={{ height: '100vh', backgroundColor: '#B8EFFD' }}>
      <div className='p-5 rounded text-dark' style={{ width: '500px', backgroundColor: '#9BCBD7' }}>
        <h3> Student Registration </h3>
        <p> Enroll one for a new beginning.. </p>
        <form className='mt-5' onSubmit={handleSubmit}>
          <div className='mt-3'>
            <TextField className='w-100' id="outlined-basic1" label="Student Name" variant="outlined" name='name' value={name || ""} onChange={(e)=>validateText(e)} />
          </div>

            {
              !validName && 
              <div className='mb-3 text-danger fw-bolder'>
                *Invalid Input
              </div>
            }

          <div className='mt-3'>
            <TextField className='w-100' id="outlined-basic2" label="Course" variant="outlined" name='course' value={course || ""} onChange={(e)=>validateText(e)} />
          </div>
            
            {
              !validCourse && 
              <div className='mb-3 text-danger fw-bolder'>
                *Invalid Input
              </div>
            }

          <div className='mt-3'>
            <TextField className='w-100' id="outlined-basic3" label="Email" variant="outlined" name='email' value={email || ""} onChange={(e)=>validateEmail(e)} />
          </div>

            {
              !validEmail && 
              <div className='mb-3 text-danger fw-bolder'>
                *Invalid Input
              </div>
            }
        
          <div className='mt-3'>
            <TextField className='w-100' id="outlined-basic4" label="User Name" variant="outlined" name='username' value={username || ""} onChange={(e)=>validateText(e)} />
          </div>
            
            {
              !validUserName && 
              <div className='mb-3 text-danger fw-bolder'>
                *Invalid Input
              </div>
            }

          <div className='mt-3'>
            <TextField type='password' className='w-100' id="outlined-basic5" label="Password" variant="outlined" name='password' value={password || ""} onChange={(e)=>validatePassword(e)} />
          </div>
            
            {
              !validPassword && 
              <div className='mb-3 text-danger fw-bolder'>
                *Invalid Input
              </div>
            }

          <Stack direction="row" spacing={2}>
            <Button type='submit' style={{height:'50px',width:'250px'}} className='mt-4' variant="contained" color="success" disabled={validName && validCourse && validEmail && validUserName && validPassword ? false : true}>
              Register
            </Button>
            <Button onClick={handleClear} style={{height:'50px',width:'250px'}} className='mt-4' variant="outlined" color="error">
              Clear
            </Button>
          </Stack>
        </form>
      </div>
    </div>
  );
}

export default App;
