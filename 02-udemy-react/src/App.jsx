import { useState } from 'react'
import './App.css'
import Header from "./components/Header.jsx";
import Counter from "./components/Counter.jsx";

function App() {
   const value = 10

  return (
    <section className="App">
      {/*<Header title="Hola, soy Goku" subtitle={15}/>*/}
      <Counter value={value}/>
    </section>
  )
}

export default App
