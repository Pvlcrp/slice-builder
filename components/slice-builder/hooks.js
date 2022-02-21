import React from "react"
import { create_UUID, arraymove } from "./functions"

/**
 * Builder state and actions
 */
export function useBuilderState() {
  const [sliceFields, setSliceFields] = React.useState([]);

  /**
   * Add field to slice
   * @param {object} params Field params 
   * @param {string} params.type Field type (prismic)
   * @param {string} params.name Field api id (prismic)
   * @param {String[]} params.params Array of special field types
   */
  const addField = React.useCallback(
    (params) => {
      setSliceFields(
        (fields) => {
          const newFields = [...fields]
          const length = newFields.length
          const uid = create_UUID()
          newFields[length] = { 
            id: uid, 
            name: params.name,
            type: params.type, 
            params: params.params,
            data: {},
          }
          return newFields
        }
      );
    },
    [setSliceFields],
  )

  /**
   * Remove field from slice
   * @param {string} id Field uid
   */
  const removeField = React.useCallback(
    (id) => setSliceFields((fields) => fields.filter((field) => field.id !== id)),
    [setSliceFields]
  )

  /**
   * Change field position in slice
   * @param {number} current Current position
   * @param {number} next New position
   */
  const moveField = React.useCallback(
    (current, next) => setSliceFields(
      (fields) => {
        const newFields = [...fields]
        if (next > -1 && next < fields.length)
          arraymove(newFields, current, next)
        return newFields
      }
    ),
    [setSliceFields]
  )

  /**
   * Change field position in slice
   */
  const handleMove = React.useCallback(
    (evt, current, next) => {
      evt.preventDefault()
      moveField(current, next)
    }
  )

  /**
   * Add field to slice
   */
  const handleAddField = React.useCallback(
    (evt, params) => {
      evt.preventDefault()
      addField(params)
    },
    [addField]
  )

  /**
   * Remove field from slice
   */
  const handleRemoveField = React.useCallback(
    (evt, id) => {
      evt.preventDefault()
      removeField(id)
    },
    [removeField]
  )

  /**
   * Update fields data
   */
  const onChange = React.useCallback(
    (value, name, index) => {
      setSliceFields(
        (fields) => fields.map(
          (field, i) => {
            if (i === index) {
              const updatedField = {...field}
              updatedField.data[name] = value;
              return updatedField
            }

            return field;
          }
        )
      )
    },
    [setSliceFields]
  )

  return [sliceFields, {
    handleMove,
    handleAddField,
    handleRemoveField,
    onChange,
  }]
}
