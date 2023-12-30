import React from 'react'

interface ButtonProps {
  classes: string
  text: string
  handleFunction?: () => void
}

const Button: React.FC<ButtonProps> = ({ classes, text, handleFunction }) => {
  return (
    <button
      className={` border-1 p-pad rounded-md font-prompt ${classes} hover:bg-gray hover:text-black`}
      onClick={handleFunction}
    >
      {text}
    </button>
  )
}

export default Button
