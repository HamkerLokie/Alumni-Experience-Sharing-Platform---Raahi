import frame_1 from '../assets/frame1.jpg'

const ImageSlider = () => {
  return (
    <>
      <span className='font-prompt text-pri font-bold'>
        Made with ❤️ by support of{' '}
        <span className='font-josefin text-red-500'>Chandigarh University</span>{' '}
        !!
      </span>
      <img src={frame_1} alt='' />
    </>
  )
}

export default ImageSlider
