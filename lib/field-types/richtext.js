import React from "react"
import richTextIcons from "./icons.json"
import { IconList, SelectIcon, TagSelector } from "./style"

const RichTextIcon = ({ id, name, icon, active, onChange }) => {
  return (
    <SelectIcon>
      <span className="info">
        {name}
      </span>
      <input
        type="checkbox"
        name={`${id}[richText]`}
        value={name}
        id={`${id}-${name}`}
        onChange={onChange}
        checked={active}
      />
      <label
        htmlFor={`${id}-${name}`}
        className="material-icons-outlined"
      >
        {icon}
      </label>
    </SelectIcon>
  )
}

const RichText = ({ id, onChange }) => {
  const [selected, setSelected] = React.useState(["paragraph"])
  const select = React.useCallback(
    (evt) => {
      const { checked, value } = evt.target
      if (checked) {
        setSelected((selection) => selection.concat([value]))
      } else {
        setSelected((selection) => selection.filter((name) => name !== value))
      }
    },
    [setSelected]
  )
  const selectAll = React.useCallback(
    (evt) => {
      evt.preventDefault()
      setSelected(
        (selection) => {
          if (selection.length < richTextIcons.length) {
            return richTextIcons.map(({ name }) => name)
          }
          return ["paragraph"]
        }
      )
    }
  )

  React.useEffect(
    () => {
      onChange({
        target: {
          name: "multi",
          value: selected.join(",")
        }
      })
    },
    [selected]
  )

  return (
    <TagSelector>
      <h4>
        Tags
      </h4>
      <button onClick={selectAll}>
        {
          selected.length < richTextIcons.length ?
            "Select all" : "Unselect all"
        }
      </button>
      <IconList>
        {richTextIcons.map(
          (icon, key) => <RichTextIcon
            {...icon}
            active={selected.indexOf(icon.name) > -1}
            onChange={select}
            id={id}
            key={`icon-${id}-${key}`}
          />
        )}
      </IconList>
    </TagSelector>
  )
}

export default RichText