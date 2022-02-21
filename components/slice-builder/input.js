import React from "react"
import { Fieldset} from "./style"

const Input = (props) => {
  return (
    <Fieldset>
      <input {...props} />
      <label htmlFor={props.id}>
        {props.placeholder}
      </label>
    </Fieldset>
  )
}

export default Input