import React from "react"
import { useRedux } from "./state/useRedux"
import FrostApp from "frost"
import Drought from "drought"
import Dashboard from "dashboard"
import Cyclone from "./x-component/cyclone"
import Button from "my-button"

const App = () => {
  const [state, dispatch] = useRedux()

  return (
    <div>
      <my-header title="Welcome to the App Pricing"></my-header>
      <Dashboard {...{ state, dispatch }} />
      <FrostApp />
      <Drought {...{ state, dispatch }} />
      <Cyclone />
    </div>
  )
}

export default App
