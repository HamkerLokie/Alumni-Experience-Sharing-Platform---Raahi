import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faQuestionCircle
} from '@fortawesome/free-solid-svg-icons'

import logo from '../assets/logo.png'
import Button from '../ui/Button'
import { Link, useNavigate } from 'react-router-dom'
const Navbar = () => {
  const navigate = useNavigate()
  const handleButton = (action: string) => {
    navigate(`/article/${action}`)
  }
  return (
    <nav className='nav flex  flex-wrap justify-between items-center p-pad min-h-[10vh] '>
     <div className='w-2/5'>
        <Link to={'/'}>
          <img src={logo} alt='' className=' homelogo w-[32%] logo' />
        </Link>
      </div>
      <div className='w-[24%] flex items-center justify-between '>
        <Button
          text='Write Article'
          classes='bg-pri text-white px-3 text-lg shadow-xl'
          handleFunction={() => handleButton('write')}
        />
        <Button
          text='Request Article'
          classes='bg-light text-black px-3 text-lg shadow-xl'
          handleFunction={() => handleButton('request')}
        />
        <Button
          text={<FontAwesomeIcon icon={faQuestionCircle} size='2xl' />}
          handleFunction={() => handleButton('guidelines')}
        />
      </div>
    </nav>
  )
}

export default Navbar
