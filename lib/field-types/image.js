import React from "react"

import { ImageField} from "./style"

const Image = ({id}) => {
  const [width, setWidth] = React.useState(0)
  const [height, setHeight] = React.useState(0)
  console.log(isNaN(width))
  return (
    <ImageField>
      <table>
        <tbody>
          <tr>
            <td>width: </td>
            <td>
              <input
                onChange={(evt) => setWidth(evt.target.value)}
                type="number"
                value={width > 0 ? width : ""}
                name={`${id}[width]`}
                placeholder="auto"
              />
              {width > 0 && "px"}
            </td>
          </tr>
          <tr>
            <td>height: </td>
            <td>
              <input
                onChange={(evt) => setHeight(evt.target.value)}
                type="number"
                value={height > 0 ? height : ""}
                name={`${id}[height]`}
                placeholder="auto"
              />
              {height > 0 && "px"}
            </td>
          </tr>
        </tbody>
      </table>
    </ImageField>
  )
}

export default Image