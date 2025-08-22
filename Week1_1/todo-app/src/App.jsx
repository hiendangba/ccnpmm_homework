import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="header">
        <div className ="name">
          Đặng Bá Hiền
        </div>
        <div className="mssv">
          22110320
        </div>
      </div>
    </>
  )
}

export default App
