import { useState } from 'react'
import './App.css'
import Cart from './components/Cart';
import ProductList from './components/ProductList'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Cart count={count}/>
      <ProductList count={count} setCount={setCount} />
    </div>
  )
}

export default App
