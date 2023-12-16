import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons'

import logo from '../assets/logo.png'
import Button from '../ui/Button'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-pad bg-gray shadow-xl'>
      <div className='w-2/5'>
        <img src={logo} alt='' className=' homelogo w-2/5 logo' />
      </div>
      <div className='w-[24%] flex items-center justify-between '>
        <Button
          text='Write Article'
          classes='bg-pri text-white px-3 text-lg shadow-xl'
        />
        <Button
          text='Request Article'
          classes='bg-light text-black px-3 text-lg shadow-xl'
        />
        <FontAwesomeIcon icon={faCircleChevronDown} size='2xl' />
      </div>
    </div>
  )
}

export default Navbar
