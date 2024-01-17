import React, {ChangeEvent} from 'react'

interface InputProps {
  type?: string
  placeholder?: string
  classes?: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const FormInput: React.FC<InputProps> = ({ type, placeholder, classes, onChange }) => {
  return (
      <input type={type} placeholder={placeholder} className={`outline-none border-2 border-pri rounded-md p-input w-full  ${classes}`} onChange={onChange} />
  )
}

export default FormInput
