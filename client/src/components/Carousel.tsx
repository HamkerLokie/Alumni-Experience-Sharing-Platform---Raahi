import { Carousel as MaterialCarousel } from '@material-tailwind/react'
import frame_1 from '../assets/frame_1.svg'
import frame_2 from '../assets/frame_2.svg'
import frame_3 from '../assets/frame_3.svg'

const Carousel = () => {
  return (
    <>
      <MaterialCarousel
        placeholder={'React Corousel'}
        className='rounded-xl p-inp w-full'
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className='absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2'>
            {new Array(length).fill('').map((_, i) => (
              <span
                key={i}
                className={`block h-1 opacity-0 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? 'w-8 bg-white' : 'w-4 bg-white/50'
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <img
          src={frame_1}
          alt='image 1'
          className='h-3/5 w-4/5 m-auto object-cover'
        />
        <img
          src={frame_2}
          alt='image 2'
          className='h-3/5 w-3/5 m-auto object-cover'
        />
        <img
          src={frame_3}
          alt='image 3'
          className='h-3/5 w-3/5 m-auto object-cover'
        />
      </MaterialCarousel>
    </>
  )
}

export default Carousel
