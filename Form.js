import React, { useEffect, useState } from 'react'

 function Form() {

  const data ={name:"",email:"",password:""}; //Variables Which will Store the value
  const [inputData,setInputData]=useState(data)  // Accepting the data input of the Form here
  const [flag,setFlag]=useState(false)
  useEffect(()=> { //used for rerender 
    console.log("Regestered")
  },[flag])
  function handleData(e)
  { 
    setInputData({...inputData,[e.target.name]:e.target.value})
    console.log(inputData)
  }
  function handleSubmit(e)
  {
    e.preventDefault();//this will prevent in entering empty data set
    if(!inputData.name || !inputData.email || !inputData.password)
    {
      alert("All fields are mandatary")
    }
    else{
            setFlag(true)
    }

  }
  return (
  <>
    <pre> { (flag)?<h2 className='ui-define'>HELLO {inputData.name}
    ,You have Regestered Successfully</h2>:""}</pre>

    <form className='cantainer' onSubmit={handleSubmit}>
        <div className='header'> 
        <h1> Registration Form</h1>
        </div>
        <div> 
            <input type='text' placeholder='Enter Your Name'
             name="name" value={inputData.name} onChange={handleData}>
            
            </input>
           
            </div>

            <div> 
            <input type='text' placeholder='Enter Your Email ' 
              name="email" value={inputData.email} onChange={handleData} ></input>
            </div>

            <div> 
            <input type='text' placeholder='Enter Your  Password'
               name="password" value={inputData.password} onChange={handleData}  ></input>
            </div>

            <div>
              <button type='submit'>submit</button>
            </div>
         </form>
        </>
        
  )
}
export default Form