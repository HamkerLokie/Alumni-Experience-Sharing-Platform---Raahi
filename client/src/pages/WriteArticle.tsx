import { Fragment, useState } from 'react'
import { EditorState, convertToRaw } from 'draft-js'
import draftToHtml from 'draftjs-to-html'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

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
      <form action=''>
        <input type='text' placeholder='Title' />
        <div>
          <input type='text' placeholder='Comapany Name' />
          <input type='text' placeholder='Your Name' />
        </div>
        <input type='email' placeholder='College/Personal Email' />
        
      </form>
      <Editor
          editorState={editorState}
          onEditorStateChange={changeEditorInput}
          wrapperClassName='wrapper-class'
          editorClassName='editor-class'
          toolbarClassName='toolbar-class'
          placeholder='Write here.....'
        />
    </Fragment>
  )
}

export default WriteArticle

// const WriteArticle = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default WriteArticle
