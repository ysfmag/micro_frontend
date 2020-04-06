import React from "react"
import { useRedux } from "./state/useRedux"
import FrostApp from "frost"
import Drought from "drought"
import Dashboard from "dashboard"

const App = () => {
  const [state, dispatch] = useRedux()
  return (
    <div>
      <Dashboard {...{ state, dispatch }} />
      <FrostApp />
      <Drought {...{ state, dispatch }} />
    </div>
  )
}

export default App
