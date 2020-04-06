import React from "react"
import { useRedux } from "./state/useRedux"
import { AppContext } from "./context"
import App from "./App"

function Root() {
  const [state, dispatch] = useRedux()
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
