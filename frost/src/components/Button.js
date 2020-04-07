import React from "react"

const AppButton = ({ onClick, name }) => {
  const ref = React.useRef()

  React.useLayoutEffect(() => {
    const { current } = ref
    current.validate = onClick
  }, [ref])

  return <app-button ref={ref} name={name}></app-button>
}

export default AppButton
