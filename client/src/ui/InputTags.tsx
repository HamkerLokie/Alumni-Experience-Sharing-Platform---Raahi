import React, { useState, KeyboardEvent, ChangeEvent } from 'react'

interface InputTagProps {
  tags: string[]
  setTags: (tags: string[]) => void
}

const InputTags: React.FC<InputTagProps> = ({ tags, setTags }) => {
  const [inputValue, setInputValue] = useState<string>('')

  const removeTags = (indexToRemove: number): void => {
    setTags([...tags.filter((_, index) => index !== indexToRemove)])
  }
  const addTags = (event: KeyboardEvent<HTMLInputElement>): void => {
    event.preventDefault()
    event.stopPropagation()
    if (inputValue !== '') {
      setTags([...tags, inputValue])
      setInputValue('')
    }
  }
  return (
    <div className='tags-input'>
      <ul id='tags'>
        {tags.map((tag, index) => (
          <li key={index} className='tag'>
            <span className='tag-title'>{tag}</span>
            <span className='tag-close-icon' onClick={() => removeTags(index)}>
              x
            </span>
          </li>
        ))}
      </ul>
      <input
        type='text'
        className=''
        value={inputValue}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setInputValue(e.target.value)
        }
        onKeyUp={(event: KeyboardEvent<HTMLInputElement>) =>
          event.key === ' ' ? addTags(event) : null
        }
        placeholder='Press enter to add tags'
      />
    </div>
  )
}

export default InputTags
