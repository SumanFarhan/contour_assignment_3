import React, { useState } from 'react'

const App = () => {
  const [obj, setObj] = useState({
    name: "",
    age: "",
    email: ""
  })
 
  // const [age,setAge]=useState("")
  // const [email,setEmail]=useState("")
  const add = (event) => {
    const {name,value}  = event.target;
    setObj((preValue) => {
      console.log(preValue)
      return{
        ...preValue,
        [name]:value
      }
    })
  }
  // const addName=(event)=>{setName(event.target.value)}
  // const addAge=(event)=>{setAge(event.target.value)}
  // const addEmail=(event)=>{setEmail(event.target.value)
  // }
  return (
    <>
      <form>
        <label>Name:
          <input type="text" value={obj.name} name="name" onChange={add} />
        </label>
        <label>Age:
          <input type="text" value={obj.age} name="age" onChange={add} />
        </label>
        <label>Email:
          <input type="email" value={obj.email} name="email" onChange={add} />
        </label>
      </form>
      <button type="submit">Submit</button>
      <ol>
        <li>{obj.name}</li>
        <li>{obj.age}</li>
        <li>{obj.email}</li>
      </ol>
    </>
  )
}

export default App