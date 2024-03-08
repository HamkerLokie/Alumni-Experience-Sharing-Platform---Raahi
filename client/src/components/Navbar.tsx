import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

import logo from '../assets/logo.png'
import Button from '../ui/Button'
import { Link, useNavigate } from 'react-router-dom'
const Navbar = () => {
  const navigate = useNavigate()
  const handleButton = (action: string) => {
    navigate(`/article/${action}`)
  }
  return (
    <nav className='m-auto navbar w-[60%] rounded-full flex flex-wrap justify-between items-center px-3 py-[.2em] border-2  border-gray'>
      <div className='nav-img w-2/5 '>
        <Link to={'/'}>
          <img src={logo} alt='' className=' homelogo w-[35%] logo' />
        </Link>
      </div>
      <div className='nav-btn-wrapper w-[35%] flex items-center justify-between   '>
        <Button
          text='Write Article'
          classes='bg-pri text-white px-3 text-md shadow-xl md:text-md '
          handleFunction={() => handleButton('write')}
        />
        <Button
          text='Request Article'
          classes='bg-light text-black px-3 text-md shadow-xl md:text-md'
          handleFunction={() => handleButton('request')}
        />
        <FontAwesomeIcon
          onClick={() => handleButton('guidelines')}
          className='bg-pri shadow-xl rounded-full text-white'
          icon={faQuestionCircle}
          size='2xl'
        />
      </div>
    </nav>
  )
}

export default Navbar
