import React, { useContext } from "react"
import withCounterModule from "./hooks/withCounterModule"
import Counter from "./components/Counter"
import { AppContext } from "./context"

const App = () => {
  const { state } = useContext(AppContext)
  const { counter } = state
  withCounterModule(counter)
  return (
    <div
      style={{
        width: "100vw",
        backgroundColor: "#FF4D00",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <h1>
        This is the <strong>drought</strong> App{" "}
      </h1>
      <Counter />
    </div>
  )
}

export default App
