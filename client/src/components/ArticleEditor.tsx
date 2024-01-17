import { useState, FC } from 'react'
import { EditorState, convertToRaw } from 'draft-js'
import draftToHtml from 'draftjs-to-html'
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

interface EditorProps {
  handleInputChange: (x: string) => void
}

const ArticleEditor: FC<EditorProps> = ({ handleInputChange }) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  )
  const changeEditorInput = (data: any) => {
    setEditorState(data)
    const x = draftToHtml(convertToRaw(editorState.getCurrentContent()))
    handleInputChange(x)
  }
  return (
      <Editor
        editorState={editorState}
        onEditorStateChange={changeEditorInput}
        wrapperClassName='wrapper-class'
        editorClassName='editor-class'
        toolbarClassName='toolbar-class'
        placeholder='Write here.....'
      />
  )
}

export default ArticleEditor
