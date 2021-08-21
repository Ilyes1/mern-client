import React, { useEffect, useState } from 'react'
import './App.css';
import Axios from 'axios'

function App() {

  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [users, setUsers] = useState([])

  const add = () => {
    Axios.post('https://react--server1.herokuapp.com/user', {
      name: name,
      age: age
    })
    .then(() => {alert('Added')})
    .catch(() => {alert('err')})

    window.location.reload()
  }
  
  useEffect(() => {

    Axios.get('https://react--server1.herokuapp.com/users')
    .then((response) => {setUsers(response.data)})
    .catch(() => {console.log('err')})

    console.log(document.title)

  }, [])

  return (
    <div className="App">
      
      <div className="inputs">
        <input type="text" placeholder="Username..." onChange={(e) => setName(e.target.value)} />
        <input type="number" placeholder="User age..." onChange={(e) => setAge(e.target.value)} />
        <button onClick={add}>Post user</button>
      </div>

      <ul>
        {users.map(user => {
          return(
            <li>{user.name}: {user.age}</li>
          )
        })}
      </ul>

    </div>
  );
}

export default App;
