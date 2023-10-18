import { useState } from 'react'
import './App.css'
import users from './json/users.json'
import Cardusers from './components/Cardusers.jsx'
import colors from './utils/colors'

function App() {
  const getRandomElement = (array) => {
    const indexRandom = Math.floor(Math.random() * array.length)
    return array[indexRandom]
  }

  const userRandom = getRandomElement(users)
  const colorRandom = getRandomElement(colors)

  const [user, setUser] = useState(userRandom)
  const [color, setColor] = useState(colorRandom)

  const handleClick = () => {
    const userRandom = getRandomElement(users)
    const colorRandom = getRandomElement(colors)
    setUser(userRandom)
    setColor(colorRandom)
  }
  
  let backgroundColor = {
    backgroundColor: color
  }

  return (
    <div className="App" style={backgroundColor}>
      <Cardusers userRandom={userRandom} colorRandom={colorRandom} handleClick={handleClick}/>
    </div>
  )
}

export default App
