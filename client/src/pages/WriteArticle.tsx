import { Fragment, useState } from 'react'
import { EditorState, convertToRaw } from 'draft-js'
import draftToHtml from 'draftjs-to-html'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import InputTags from '../ui/InputTags'

const WriteArticle = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  )
  const changeEditorInput = (data: any) => {
    setEditorState(data)
    const x = draftToHtml(convertToRaw(editorState.getCurrentContent()))
    setFormData(prev => ({
      ...prev,
      description: x
    }))
  }
  const [formData, setFormData] = useState({
    title: '',
    companyName: '',
    fullName: '',
    email: '',
    description: '',
    showName: true,
    tags: ['interview-experience']
  })
  return (
    <Fragment>
     <h1 className='flex flex-wrap justify-center text-2xl p-3 font-prompt text-pri font-[800]'>
        Write your experience here.
      </h1>
      <div className='flex overflow-hidden'>
        <div className='write-form w-1/2 flex flex-col gap-5 p-input '>
          <input type='text' placeholder='Title' />
          <div className='flex w-full justify-between gap-1'>
            <input type='text' placeholder='Comapany Name' className='w-3/4' />
            <input type='text' placeholder='Your Name' />
          </div>
          <input type='email' placeholder='College/Personal Email' />

          <InputTags
            tags={formData.tags}
            setTags={tags => setFormData(prev => ({ ...prev, tags }))}
          />
          <button className='bg-pri text-white font-bold w-1/2 self-center p-pad'>
            Submit
          </button>
        </div>
        <Editor
          editorState={editorState}
          onEditorStateChange={changeEditorInput}
          wrapperClassName='wrapper-class'
          editorClassName='editor-class'
          toolbarClassName='toolbar-class'
          placeholder='Write here.....'
        />
      </div>
    </Fragment>
  )
}

export default WriteArticle
