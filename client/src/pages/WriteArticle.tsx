import { FormEvent, Fragment, useEffect, useState } from 'react'

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import InputTags from '../ui/InputTags'
import ArticleEditor from '../components/ArticleEditor'
import useApiError from '../hooks/useApiError'
import Swal from 'sweetalert2'
import axios from '../axios'
import useApiSuccess from '../hooks/useApiSuccess'

interface FormState {
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
}

const WriteArticle = () => {
  const { handleApiError } = useApiError()
  const { handleApiSuccess } = useApiSuccess()

  const [formData, setFormData] = useState<FormState>({
    articleDetails: {
      title: '',
      companyName: '',
      fullName: '',
      email: '',
      showName: true
    },
    errors: {
      title: '',
      companyName: '',
      name: '',
      contact: ''
    },
    description: '',
    tags: ['Interview-experience'],
    formIsHalfFilledOut: false,
    isAnyChange: false,
    showModal: false,
    modalTextStatus: '',
    modalContent: {
      heading: '',
      icon: '',
      text: ''
    },
    isShowPreSubmit: false,
    feedbackshow: false,
    articleIDForFeedback: ''
  })

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (formData.formIsHalfFilledOut) {
        const message =
          'You have unsaved changes. Are you sure you want to leave?'
        event.returnValue = message
        return message
      }
    }

    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [formData.formIsHalfFilledOut])

  const handleEditorInputChange = (data: any) => {
    setFormData(prev => ({
      ...prev,
      description: data,
      formIsHalfFilledOut: true
    }))
  }

  const handleInputValue =
    (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const { articleDetails, errors } = formData
      articleDetails[key] = e.target.value
      errors[key] = null
      setFormData(prev => ({
        ...prev,
        articleDetails,
        errors,
        formIsHalfFilledOut: true
      }))
    }

  const handleCheckBoxInput =
    (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const { articleDetails } = formData
      articleDetails[key] = e.target.checked
      setFormData(prev => ({
        ...prev,
        articleDetails
      }))
    }

  const checkEmptyFields = () => {
    const { articleDetails, errors } = formData
    let valid = true
    for (const val in articleDetails) {
      if (articleDetails[val] === '') {
        errors[val] = `${val.toUpperCase()} CAN'T BE EMPTY!!`
        valid = false
        window.scrollTo(0, 0)
      }

      setFormData(prev => ({
        ...prev,
        errors
      }))
    }
    if (valid) return true
    return false
  }

  const handlePreSubmit = async (event: FormEvent) => {
    event.preventDefault()
    if (checkEmptyFields()) {
      setFormData(prev => ({
        ...prev,
        isShowPreSubmit: true
      }))
    }

    if (formData.isShowPreSubmit && formData.description.length > 0) {
      const confirmation = await Swal.fire?.({
        title: 'ARE YOU SURE?',
        text: 'Do you want to submit?',
        icon: 'question',
        confirmButtonText: 'Submit'
      })

      if (confirmation.isConfirmed) {
        handleSubmit(event)
      }
    } else {
      Swal.fire?.({
        title: 'Please Write Something',
        text: 'Article is Empty',
        icon: 'error',
        confirmButtonText: 'Revisit'
      })
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const { description, tags } = formData
    const { title, companyName, fullName, showName, email } =
      formData.articleDetails

    const payload = {
      title,
      companyName,
      fullName,
      showName,
      description,
      tags,
      email
    }

    try {
      const response = await axios.post('/articles/post', payload)
      handleApiSuccess(response.data)
    } catch (error) {
      handleApiError(error)
    }
  }

  return (
    <Fragment>
      <h1 className='flex flex-wrap justify-center text-2xl p-3 font-julius text-pri font-[800]'>
        Write your experience here.
      </h1>

      <form className='flex w-full flex-col gap-3  justify-center items-center overflow-hidden'>
        <div className='write-form w-1/2 flex flex-col gap-5 p-input justify-between  '>
          <section className='write-form w-full flex flex-col gap-5  '>
            <input
              type='text'
              placeholder='Title'
              onChange={handleInputValue('title')}
            />
            <span className='text-red-600 text-sm p-0 -my-5 mb-1'>
              {formData.errors.title}
            </span>
            <div className='flex w-full justify-between gap-1'>
              <div className='w-full'>
                <input
                  type='text'
                  placeholder='Comapany Name'
                  className='w-3/4'
                  required
                  onChange={handleInputValue('companyName')}
                />{' '}
                <br />
                <span className='text-red-600 text-sm p-0 -my-5 mb-1'>
                  {formData.errors.companyName}
                </span>
              </div>

              <div>
                <input
                  type='text'
                  placeholder='Your Name'
                  onChange={handleInputValue('fullName')}
                />
                <span className='text-red-600 text-sm p-0 -my-5 mb-1'>
                  {formData.errors.name}
                </span>
                <br />
                <input
                  type='checkbox'
                  name=''
                  checked={formData.articleDetails.showName}
                  id='showNameCheck'
                  onChange={handleCheckBoxInput('showName')}
                  className='form-check-input '
                />{' '}
                <label
                  className='font-prompt text-sm bg-pri text-white rounded px-2'
                  htmlFor='showNameCheck'
                >
                  {} Display name with article?
                </label>
              </div>
            </div>
            <input
              type='email'
              placeholder='College/Personal Email'
              onChange={handleInputValue('email')}
            />
            <span className='text-red-600 text-sm p-0 -my-5 mb-1'>
              {formData.errors.contact}
            </span>

            <InputTags
              tags={formData.tags}
              setTags={tags => setFormData(prev => ({ ...prev, tags }))}
            />
          </section>
        </div>
        <ArticleEditor handleInputChange={handleEditorInputChange} />
        
        <button
          onClick={handlePreSubmit}
          className='bg-pri text-white rounded-full font-bold w-[15%] m-5 self-center p-pad'
        >
          Submit
        </button>
      </form>
    </Fragment>
  )
}

export default WriteArticle
