import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from "./UTIL/axios.customize.js"

function App() {
  useEffect(() => {
    const fetHelloWorld = async () => {
      const res = await axios.get(`/v1/api/`)
      console.log(">>> check res : ", res)
    }
    fetHelloWorld()
  }, [])

  return (
<>
hello world
</>
  )
}

export default App
