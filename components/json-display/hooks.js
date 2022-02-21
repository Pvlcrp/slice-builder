import React from "react"

export const initialState = {
  primary: {},
  items: {}
}
/**
 * Convert field type to JSON to fit pismic api
 */
export function useBuilderState() {
  const [builderState, setBuilderState] = React.useState(initialState)

  const handleSliceUpdate = React.useCallback(
    (model, slices) => {
      const structure = slices.reduce(
        (results, slice) => {
          const struct = { type: "", config: {} }
          const { data, type } = slice

          struct.config.type = type
          struct.config.label = data.label || ""
          struct.config.placeholder = data.placeholder || ""


          if (data.multi) struct.config.multi = data.multi
          if (data.allowTargetBlank) struct.config.allowTargetBlank = data.allowTargetBlank

          results[data.id || ""] = struct

          return results
        },
        {}
      )

      setBuilderState((state) => {
        const newState = Object.assign({}, state)
        newState[model] = structure
        return newState
      })
    },
    [setBuilderState]
  )

  return [builderState, handleSliceUpdate]
}
