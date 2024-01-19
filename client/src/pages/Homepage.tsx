import Carousel from '../components/Carousel'
import Companies from '../components/Companies'
import RecentArticles from '../components/RecentArticles'

import ImageSlider from '../components/ImageSlider'

const Homepage = () => {
  return (
    <>
      <div className='homepage flex justify-between p-input '>
          <Companies />
        <div className='bet-wrapper flex flex-col items-center justify-start w-2/5 pt-2 '>
          <Carousel />
          <ImageSlider />
        </div>
          <RecentArticles />
      </div>
    </>
  )
}

export default Homepage
