// filepath: c:\Users\Hp\Desktop\Portfolio\portfolio\src\App.jsx
import { useState } from 'react'
import './App.css'
import Page from './components/Page'            // <- import

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* tu peux conserver le contenu existant ou le remplacer par <Page /> */}
      <Page />
    </>
  )
}

export default App