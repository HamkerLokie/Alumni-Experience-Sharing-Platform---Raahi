import { FormEvent, Fragment, useState } from 'react'
import FormInput from '../ui/FormInput'
import axios from '../axios'
import useApiError from '../hooks/useApiError'
import useApiSuccess from '../hooks/useApiSuccess'

const RequestArticle = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    seniorName: '',
    companyName: '',
    note: '',
    contactInfo: ''
  })

  const { handleApiError } = useApiError()
  const { handleApiSuccess } = useApiSuccess()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      const response = await axios.post('/articles/request', formData)
      handleApiSuccess(response?.data)
    } catch (error) {
      handleApiError(error)
    }
  }
  return (
    <Fragment>
      <h1 className='flex flex-wrap justify-center text-2xl p-3 font-prompt text-pri font-[800]'>
        Whose experience you wanna know?
      </h1>
      <br />
      <div className='bg-ter flex flex-col flex-wrap items-center justify-center  '>
        <form
          className=' flex flex-col flex-wrap p-5 shadow-xl sh rounded-2xl'
          onSubmit={handleSubmit}
        >
          <h3 className='text-2xl font-extrabold text-pri'>
            Basic Information
          </h3>
          <p className='text-sm text-sec -mt-1'>
            This info is mandatory to fill to request an article
          </p>
          <div className='flex  mb-4 gap-1  justify-between'>
            <FormInput
              type='text'
              placeholder='Your Name'
              onChange={e =>
                setFormData(prev => ({
                  ...prev,
                  fullName: e.target.value
                }))
              }
            />
            <FormInput
              type='text'
              placeholder='Senior Name'
              onChange={e =>
                setFormData(prev => ({
                  ...prev,
                  seniorName: e.target.value
                }))
              }
            />
          </div>
          <FormInput
            type='text'
            placeholder='Company/Corporate Name'
            classes='mb-4'
            onChange={e =>
              setFormData(prev => ({
                ...prev,
                companyName: e.target.value
              }))
            }
          />

          <h3 className='text-2xl font-extrabold text-pri'>Social Links</h3>
          <p className='text-sm text-sec -mt-1'>
            These links will be helpul for us to contact them (eg :
            www.linkedin.com/in/alpha-pandey/)
          </p>
          <FormInput
            type='text'
            placeholder={`Senior's any social media link`}
            classes='w-full'
            onChange={e =>
              setFormData(prev => ({
                ...prev,
                contactInfo: e.target.value
              }))
            }
          />
          <br />

          <h3 className='text-2xl font-extrabold text-pri'>Personal Note</h3>
          <textarea
            className='outline-none rounded-sm w-full border-2 border-pri '
            placeholder='Enter your personal note(optional)'
            onChange={e =>
              setFormData(prev => ({
                ...prev,
                note: e.target.value
              }))
            }
          />
          <input
            type='submit'
            value={'Submit'}
            className='bg-pri w-1/4 mt-2 text-white'
          />
        </form>
      </div>
    </Fragment>
  )
}

export default RequestArticle
