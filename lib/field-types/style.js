import styled from "styled-components"

/**
 * Input Number (image)
 */
const ImageField = styled.div`
  font-size: 12px;

  table td:last-child {
    padding-left: 12px;
  }

  table td {
    padding-bottom: 12px;
  }

  input {
    display: inline-block;
    vertical-align: middle;
    box-sizing: content-box;
    paddiing: 8px;
    border-radius: 3px;
    background-color: #eee;
    border: 1px solid transparent;
    margin-right: 4px;
  

    min-width: 24px;
    max-width: 6ch;
    height: 24px;
    text-align: center;
    appearance: none;
  
    &:focus {
      outline: 0;
      border: 1px solid ${props => props.theme.pink};
    }
  
    /* Chrome, Safari, Edge, Opera */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  
    /* Firefox */
    &[type=number] {
      -moz-appearance: textfield;
    }
  }
  
`

/**
 * Field
 */

const FieldType = styled.button`
  cursor: pointer;
  position: relative;
  display: block;
  width: 100%;
  padding: 0 24px;
  height: 64px;
  line-height: 64px;
  
  font-size: 20px;

  border-radius: 3px;
  border: 1px solid ${props => props.theme.pink};
  margin: 0 0 8px;
`
/**
 * Rich text icons
 */
const TagSelector = styled.div`
  button {
    border: none;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`
const IconList = styled.div`
  margin-top: 8px;
  padding-left: 8px;
  margin-left: -8px;

  width: 100%;
  max-width: 380px;

  > div {
    display: inline-block;
    vertical-align: middle;
    margin-right: 8px;
    margin-bottom: 8px;
  }
`

const SelectIcon = styled.div`
  input {
    display: block;
    width: 0;
    height: 0;
    overflow: hidden;
    position: absolute;
    margin: 0;
  }

  label {
    cursor: pointer;
    border: 2px solid #eee;
    display: inline-block;
    padding: 4px;
  }

  input:checked + label {
    border-color: ${props => props.theme.pink};
  }

  position: relative;
  .info {
    position: absolute;
    top: -20px;
    left: -4px;
    font-size: 12px;
    display: none;
    padding: 2px 4px;
    background: #ddd;
    z-index: 1;
    white-space: nowrap;
  }

  &:hover .info {
    display: block;
  }
`

export {
  FieldType,
  IconList,
  SelectIcon,
  TagSelector,
  ImageField,
}