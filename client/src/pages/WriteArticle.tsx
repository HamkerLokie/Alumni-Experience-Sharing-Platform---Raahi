import { Fragment, useState } from 'react'

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import InputTags from '../ui/InputTags'
import ArticleEditor from '../components/ArticleEditor'

interface FormState {
  articleDetails: {
    [key: string]: string | boolean
    title: string
    companyName: string
    name: string
    contact: string
    showName: boolean
  }
  errors: {
    [key: string]: string | boolean | null
    title: string | null
    companyName: string | null
    name: string | null
    contact: string | null
  }
  articleText: string
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
  
  const [formData, setFormData] = useState<FormState>({
    articleDetails: {
      title: '',
      companyName: '',
      name: '',
      contact: '',
      showName: true
    },
    errors: {
      title: '',
      companyName: '',
      name: '',
      contact: ''
    },
    articleText: '',
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

  const handleEditorInputChange = (data: any) => {
    setFormData(prev => ({
      ...prev,
      articleText: data,
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

  const handlePreSubmit = () => {
    if (checkEmptyFields()) {
      setFormData(prev => ({
        ...prev,
        isShowPreSubmit: true
      }))
    }
  }

  return (
    <Fragment>
      <h1 className='flex flex-wrap justify-center text-2xl p-3 font-prompt text-pri font-[800]'>
        Write your experience here.
      </h1>
      <div className='flex overflow-hidden'>
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
                  onChange={handleInputValue('name')}
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
              onChange={handleInputValue('contact')}
            />
            <span className='text-red-600 text-sm p-0 -my-5 mb-1'>
              {formData.errors.contact}
            </span>

            <InputTags
              tags={formData.tags}
              setTags={tags => setFormData(prev => ({ ...prev, tags }))}
            />
          </section>
          <button
            onClick={handlePreSubmit}
            className='bg-pri text-white rounded-full font-bold w-1/2 self-center p-pad'
          >
            Submit
          </button>
        </div>
        <ArticleEditor handleInputChange={handleEditorInputChange} />
      </div>
    </Fragment>
  )
}

export default WriteArticle
