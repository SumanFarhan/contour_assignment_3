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
      console.log(preValue)
      return {
        ...preValue,
        [name]: value
      }
    })
  }
  const addBtn = (() => {
    setItem((olditem) => {
      return [...olditem, obj]
    })
    add("")
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
          {/* <table className='items'>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td>Delete</td>
            </tr>
            <tr>
              <td>Alfreds</td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td>Delete</td>
            </tr>
          </table> */}
          <div className='users'>
            <table>
              {item.map((value) => {
                return (
                  <tr>
                    <td>{value.name}</td>
                    <td>{value.age}</td>
                    <td>{value.email}</td>
                    <td>
                      <button type="submit" className='myButton' onClick={addBtn}>Delete</button>
                    </td>
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