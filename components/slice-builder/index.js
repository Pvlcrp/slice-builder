import React from "react"
import { Type } from "lib/field-types"
import fieldTypes from "./field-types"
import Field from "./field"
import {useBuilderState} from "./hooks"
import { JsonContext} from "components/json-display"

import { FieldTypeList} from "./style"


const SliceBuilder = ({model}) => {
  const [sliceFields, actions] = useBuilderState();
  const [_, handleSliceUpdate] = React.useContext(JsonContext)


  /**
   * Pass updated field to context handler
   */
  React.useEffect(
    () => handleSliceUpdate(model, sliceFields),
    [handleSliceUpdate, model, sliceFields]
  )

  return (
    <>
      <div>
        {
          sliceFields.map(
            (params, index) => <Field
              {...params}
              remove={actions.handleRemoveField}
              move={actions.handleMove}
              onChange={actions.onChange}
              index={index}
              key={params.id}
            />
          )
        }
      </div>
      <h3>
        {`[+]`}
      </h3>
      <FieldTypeList>
        {
          fieldTypes.map(
            (props, key) => (
              <li key={`component-${key}`}>
                <Type
                  {...props}
                  onClick={actions.handleAddField}
                />
              </li>
            )
          )
        }
      </FieldTypeList>
    </>
  )
}

export default SliceBuilder

SliceBuilder.defaultProps = {
  onChange: function() {}
}