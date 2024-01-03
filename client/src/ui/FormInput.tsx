import React from 'react'

interface InputProps {
  type?: string
  placeholder?: string
  classes?: string
}

const FormInput: React.FC<InputProps> = ({ type, placeholder, classes }) => {
  return (
    <div>
      <input type={type} placeholder={placeholder} className={`outline-none border-2 border-pri rounded-md p-input w-full  ${classes}`} />
    </div>
  )
}

export default FormInput
