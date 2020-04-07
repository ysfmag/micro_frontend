import React from "react"

import getCrossComponent from "../utils/zoid"

const CycloneCrossComponentZoid = getCrossComponent("https://cyclone.maghzaz.now.sh", "cyclone-app")

const Cyclone = () => {
  return (
    <div>
      <CycloneCrossComponentZoid />
    </div>
  )
}

export default Cyclone
