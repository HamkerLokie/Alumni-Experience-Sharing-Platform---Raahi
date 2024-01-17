import { Fragment } from 'react'
import { Hourglass } from 'react-loader-spinner'
const Loader = () => {
  return (
    <Fragment>
      <div className='loader-overlay'></div>
      <Hourglass
        visible={true}
        height='20'
        width='20'
        ariaLabel='hourglass-loading'
        wrapperStyle={{}}
        wrapperClass='hourglass-loading'
        colors={['#306cce', '#72a1ed']}
      />
    </Fragment>
  )
}

export default Loader
