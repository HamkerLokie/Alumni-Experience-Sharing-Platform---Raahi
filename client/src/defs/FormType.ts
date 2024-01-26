export interface FormState {
  articleDetails: {
    [key: string]: string | boolean
    title: string
    companyName: string
    fullName: string
    email: string
    showName: boolean
  }
  errors: {
    [key: string]: string | boolean | null
    title: string | null
    companyName: string | null
    name: string | null
    contact: string | null
  }
  description: string
  tags: string[]
  formIsHalfFilledOut: boolean
  isAnyChange: boolean
  showModal: boolean
  modalTextStatus: string
  modalContent: {
    heading: string
    icon: string
    text: string
  }
  isShowPreSubmit: boolean
  feedbackshow: boolean
  articleIDForFeedback: string
  editorHasText: boolean
}
