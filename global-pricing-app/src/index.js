import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { applyPolyfills, defineCustomElements } from "components-lib/loader"

ReactDOM.render(<App />, document.querySelector("#root"))

applyPolyfills().then(() => {
  defineCustomElements()
})
