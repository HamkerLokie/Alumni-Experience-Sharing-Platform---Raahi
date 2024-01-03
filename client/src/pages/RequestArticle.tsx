import  { Fragment } from 'react'
import FormInput from '../ui/FormInput'
import Button from '../ui/Button'

const RequestArticle = () => {
  return (
    <Fragment>
      <h1 className='flex flex-wrap justify-center text-2xl p-3 font-prompt text-pri font-[800]'>
        Whose experience you wanna know?
      </h1>
      <br />
      <div className='bg-ter flex flex-col flex-wrap items-center justify-center'>
        <div className=' flex flex-col flex-wrap p-pad'>
          <h3 className='text-2xl font-extrabold text-pri'>
            Basic Information
          </h3>
          <p className='text-sm text-sec -mt-1'>
            This info is mandatory to fill to request an article
          </p>
          <div className='flex  mb-4  justify-between'>
            <FormInput type='text' placeholder='Your Name' />
            <FormInput type='text' placeholder='Senior Name' />
          </div>
          <FormInput
            type='text'
            placeholder='Company/Corporate Name'
            classes='mb-4'
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
          />
          <br />

          <h3 className='text-2xl font-extrabold text-pri'>Personal Note</h3>
          <textarea
            className='outline-none rounded-sm w-full border-2 border-pri '
            placeholder='Enter your personal note(optional)'
          />
          <Button text='Send Request' classes='bg-pri w-1/4 mt-2 text-white' />
        </div>
      </div>
    </Fragment>
  )
}

export default RequestArticle
