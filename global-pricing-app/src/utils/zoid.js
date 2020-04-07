import React from "react"
import ReactDOM from "react-dom"
import * as zoid from "zoid/dist/zoid.frameworks.js"

const getCrossComponent = (url, tag) => {
  if (!window.appCrossComponent) {
    window.appCrossComponent = zoid.create({
      tag,
      url,
      dimensions: {
        width: "1500px",
        height: "200px"
      },
      autoResize: { width: true, height: true }
    })
  }
  let CrossComponentZoid = () => (
    <>
      <h1>zoid : error</h1>
    </>
  )
  if (window.appCrossComponent && window.appCrossComponent.driver) {
    CrossComponentZoid = window.appCrossComponent.driver("react", {
      React: React,
      ReactDOM: ReactDOM
    })
  }

  return CrossComponentZoid
}

export default getCrossComponent
