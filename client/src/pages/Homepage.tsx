import Carousel from '../components/Carousel'
import Companies from '../components/Companies'
import RecentArticles from '../components/RecentArticles'

const Homepage = () => {
  return (
    <>
      <div className=' flex  justify-between p-input'>
        <Companies />
        <div className='flex justify-center w-2/5 pt-2 items-center'>
          <Carousel />
        </div>
        <RecentArticles />
      </div>
    </>
  )
}

export default Homepage
