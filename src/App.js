import React from 'react'
import Hello from './Context/Hello';
import FruitProvider from './Context/FruitProvider';
const App = () => {
  return (
    <div>
      <FruitProvider>
        <Hello/>
      </FruitProvider>
    </div>
  )
}
export default App;