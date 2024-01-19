import { Cursor, Typewriter } from 'react-simple-typewriter'



const Carousel = () => {
  return (
    <>
      <div className='text-2xl text-center font-josefin font-[600] text-pri'>
        <Typewriter
          cursorBlinking={false}
          words={['Ease Placement Preperation Through Raahi.....']}
          cursorStyle='_'
          loop={6}
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
        <Cursor cursorColor='bg-sec' />
      </div>
    </>
  )
}

export default Carousel
