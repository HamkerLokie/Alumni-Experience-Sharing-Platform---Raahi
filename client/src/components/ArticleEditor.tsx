import { useState, FC } from 'react'
import { EditorState, convertToRaw } from 'draft-js'
import draftToHtml from 'draftjs-to-html'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

interface EditorProps {
  handleInputChange: (x: string, hasText: boolean) => void
}

const ArticleEditor: FC<EditorProps> = ({ handleInputChange }) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  )
  const changeEditorInput = (data: any) => {
    setEditorState(data)
    const contentState = editorState.getCurrentContent()
    const hasText = contentState.hasText()

    const x = draftToHtml(convertToRaw(editorState.getCurrentContent()))
    handleInputChange(x, hasText)
  }
  return (
    <div className='editor-wrapper'>
      <Editor
        editorState={editorState}
        onEditorStateChange={changeEditorInput}
        wrapperClassName='wrapper-class'
        editorClassName='editor-class'
        toolbarClassName='toolbar-class'
        placeholder='Write here.....'
      />
    </div>
  )
}

export default ArticleEditor
