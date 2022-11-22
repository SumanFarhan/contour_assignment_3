import React, { useState } from 'react'

const App = () => {
  const [obj, setObj] = useState({
    name: "",
    age: "",
    email: ""
  })
 const [item,setItem]=useState([])
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
  const addBtn=(()=>{
    setItem((olditem)=>{
      return[...olditem,obj]
    })
    add("")
  })
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
      <button type="submit" onClick={addBtn}>Submit</button>
      {item.map((value)=>{
        return(
          <ol>
          <li>{value.name}</li>
          <li>{value.age}</li>
          <li>{value.email}</li>
        </ol>
        )
      })}

    </>
  )
}

export default App