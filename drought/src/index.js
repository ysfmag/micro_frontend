import React from "react"
import ReactDOM from "react-dom"
import Root from "./main"
import { useRedux } from "./state/useRedux"

const RenderApp = () => {
  const [state, dispatch] = useRedux()
  return <Root {...{ state, dispatch }} />
}

ReactDOM.render(<RenderApp />, document.querySelector("#root"))
