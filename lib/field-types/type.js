import React from "react"

import {FieldType} from "./style"

/**
 * 
 * @param {string} name Field type name
 * @param {string} id Field unique id
 * @param {object} params
 * @returns 
 */
const Type = ({id, type, name, icon, onClick, params}) => {
  const handleClick = React.useCallback(
    (evt) => onClick(evt, { id, type, name, params}),
    [onClick]
  )
  return (
    <FieldType onClick={handleClick}>
      <span>{icon}</span>
      <span>{name}</span>
    </FieldType>
  )
}

export default Type