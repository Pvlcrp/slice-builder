import React from "react"
import { RichText, Image } from "lib/field-types"
import Input from "./input"
import {
  SliceField,
  FieldType,
  FieldActions
} from "./style"

const fieldTypes = {
  richtext: RichText,
  image: Image
}

/**
 * 
 * @param {number} index Field index in list
 * @param {string} id Field unique id
 * @param {string} name Field name
 * @param {String[]} params Array of special field types
 */
const Field = ({ id, index, name, remove, move, params, data = {}, onChange }) => {
  const handleRemove = React.useCallback(
    (evt) => remove(evt, id),
    [remove, id]
  )

  const handleMoveUp = React.useCallback(
    (evt) => move(evt, index, index + 1),
    [move, index]
  )

  const handleMoveDown = React.useCallback(
    (evt) => move(evt, index, index - 1),
    [move, index]
  )

  const handleInputChange = React.useCallback(
    (evt) => onChange(evt.target.value, evt.target.name, index),
    [onChange,index]
  )


  return (
    <SliceField>
      <FieldType>
        {name}
      </FieldType>
      <Input
        id={`${id}-id`}
        name="id"
        placeholder={"ID"}
        value={data.id || ""}
        onChange={handleInputChange}
      />
      <Input
        id={`${id}-label`}
        name="label"
        placeholder={"Label"}
        value={data.label || ""}
        onChange={handleInputChange}
      />

      <Input
        id={`${id}-placeholder`}
        name="placeholder"
        placeholder={"Placeholder (optional)"}
        value={data.placeholder || ""}
        onChange={handleInputChange}
      />

      {
        params.length > 0 && params.map((param, key) => {
          const Component = fieldTypes[param]
          return <Component onChange={handleInputChange} id={id} key={`param-${id}-${key}`} />
        })
      }

      <FieldActions>
        <button onClick={handleMoveDown}>
          ⬆️
        </button>
        <button onClick={handleMoveUp}>
          ⬇️
        </button>
        <button onClick={handleRemove}>
          ❌ Remove
        </button>
      </FieldActions>
    </SliceField>
  )
}

export default Field