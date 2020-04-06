import React, { useContext } from "react"
import { AppContext } from "./context"

const App = () => {
  const { state } = useContext(AppContext)
  const { counter } = state
  return (
    <div
      style={{
        width: "100vw",
        backgroundColor: "#AD55F6",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <h1>
        <strong>Dashboard</strong>
      </h1>
      <p
        style={{
          fontSize: "xxx-large"
        }}
      >
        {counter}
      </p>
    </div>
  )
}

export default App
