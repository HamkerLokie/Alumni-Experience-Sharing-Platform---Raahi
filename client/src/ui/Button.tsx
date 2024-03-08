import React, { FormEvent } from 'react'

interface ButtonProps {
  classes?: string
  text: string | React.ReactNode
  handleFunction?: (e: FormEvent) => void
}

const Button: React.FC<ButtonProps> = ({ classes, text, handleFunction }) => {
  return (
    <button
      className={` border-1 p-pad rounded-full font-josefin ${classes} hover:bg-gray hover:text-black`}
      onClick={handleFunction}
    >
      {text}
    </button>
  )
}

export default Button
