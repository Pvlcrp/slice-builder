import React from "react"
import { useBuilderState, initialState} from "./hooks"
import {Pre} from "./style"

const JsonContext = React.createContext(initialState)

const JsonDisplay = () => {
  const [builderState] = React.useContext(JsonContext)
  return (
    <Pre>
      {JSON.stringify(builderState, null, 2)}
    </Pre>
  )
}

/**
 * HOC: Provide context
 * @param {React.Component} Component 
 */
const withJsonContext = (Component) => {
  return (props) => {
    const [builderState, handleSliceUpdate] = useBuilderState()
    return (
      <JsonContext.Provider value={[builderState, handleSliceUpdate]}>
        <Component {...props} />
      </JsonContext.Provider>
    )
  }
}

export default JsonDisplay

export {
  JsonContext,
  initialState,
  withJsonContext,
}