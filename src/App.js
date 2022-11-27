import React, { useState } from 'react'
import "./App.css"

const App = () => {
  const [obj, setObj] = useState({
    name: "",
    age: "",
    email: ""
  })
  const [item, setItem] = useState([])
  const add = (event) => {
    const { name, value } = event.target;
    setObj((preValue) => {
      return {
        ...preValue,
        [name]: value
      }
    })
  }
  const addBtn = (() => {
    let data = [...item];
    const isEmail = data.find(value => value.email == obj.email);
    {!isEmail ? setItem((olditem) => {
        return [...olditem, obj]
      }) : alert("Email already exist")}
  })

  return (
    <>
      <div className="main">
        <div className="centerDiv">
          <div className='inputField'>
            <form>
              <label>NAME
                <input type="text" value={obj.name} name="name" onChange={add} />
              </label>
              <label>AGE
                <input type="text" value={obj.age} name="age" onChange={add} />
              </label>
              <label>EMAIL
                <input type="email" value={obj.email} name="email" onChange={add} />
              </label>
            </form>
            <button type="submit" className='myButton' onClick={addBtn}>ADD</button>
          </div>
          <div className='users'>
            <table>
              {item.map((value, index) => {
                return (
                  <tr
                    key={index}
                    id={index}>
                    <td>{value.name}</td>
                    <td>{value.age}</td>
                    <td>{value.email}</td>
                  </tr>
                )
              })}
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default App