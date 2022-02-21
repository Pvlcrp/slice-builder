import styled from "styled-components"

/**
 * FieldType Lists
 */
const FieldTypeList = styled.ul`
  display: flex;
  margin-left: -16px;
  > li {
    padding-left: 16px;
  }
`

/**
 * Fields
 */

const FieldType = styled.h4`
  position: absolute;
  top: 0;
  left: 0;

  font-size: 12px;
  line-height: 20px;
  height: 20px;
  padding: 0 4px;
  background: #ddd;
`

const SliceField = styled.div`
  position: relative;
  padding: 40px 0 16px;
  margin-bottom: 16px;
  &:first-child {
    margin-top: 16px;
  }
  &:not(:last-child) {
    border-bottom: 2px solid ${props => props.theme.pink}cc;
  }
`

const FieldActions = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  button {
    cursor: pointer;
    padding: 4px 8px;
    background: ${props => props.theme.pink}22;
    border: none;
    font-size: 12px;
    margin-left: 4px;

    &:hover {
      background: ${props => props.theme.pink}55;
    }
  }
`

const Fieldset = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: 16px;

  label {
    font-size: 12px;
  }

  label,
  input {
    font-family: sans-serif;
  }

  input {
    width: 100%;
    border-color: transparent transparent #eee transparent; 
    border-width: 2px;
    border-styled: solid;

    padding: 12px 0 8px;
    &:focus {
      border-color: transparent transparent ${props => props.theme.pink} transparent; 
      outline: none;
    }
  }
`

export {
  FieldType,
  SliceField,
  FieldActions,
  Fieldset,
  FieldTypeList,
}