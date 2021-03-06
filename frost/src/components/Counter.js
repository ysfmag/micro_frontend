import React, { useContext } from "react"
import * as actions from "../state/actions"
import { AppContext } from "../context"
import AppButton from "./Button"

const styles = {
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    margin: "1vw",
    width: "5vw",
    height: "4vh",
    fontSize: "large",
  },
}

const Counter = () => {
  const { state, dispatch } = useContext(AppContext)
  const { counter } = state
  return (
    <div style={styles.container}>
      <h3> counter value : {counter}</h3>
      <AppButton
        name="+1"
        style={styles.button}
        onClick={() => {
          dispatch(actions.increment())
        }}
      />

      <AppButton
        name="-1"
        style={styles.button}
        onClick={() => {
          dispatch(actions.decrement())
        }}
      />
    </div>
  )
}

export default Counter
