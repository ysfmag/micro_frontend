import React from "react"
import { AppContext } from "./context"
import App from "./App"

function Root({ state, dispatch }) {
  return (
    <AppContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      <App />
    </AppContext.Provider>
  )
}

export default Root
