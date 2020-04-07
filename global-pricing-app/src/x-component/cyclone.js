import React from "react"

import getCrossComponent from "../utils/zoid"

const CycloneCrossComponentZoid = getCrossComponent("http://localhost:3000", "cyclone-app")

const Cyclone = () => {
  return (
    <div>
      <CycloneCrossComponentZoid />
    </div>
  )
}

export default Cyclone
