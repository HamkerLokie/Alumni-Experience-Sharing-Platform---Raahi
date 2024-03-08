import { useState } from 'react'
import VerifiedArticles from '../components/VerifiedArticles'
import UnverifiedArticles from '../components/UnverifiedArticles'

type TButton = {
  active: boolean
  onClick: () => void
  text: string
}

const ToggleButton = ({ active, onClick, text }: TButton) => {
  return (
    <button
      className={`${
        active ? 'bg-lime-200 text-black border-none outline-none' : ''
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

const HomeComponent = () => {
  const [toggleComponent, setToggleComponent] = useState<
    'verified' | 'unverified'
  >('unverified')
  return (
    <>
      <section className=' bg-slate-500 flex justify-between w-[300px] p-5 mb-5'>
        <ToggleButton
          active={toggleComponent === 'verified'}
          onClick={() => setToggleComponent('verified')}
          text='Verified'
        />
        <ToggleButton
          active={toggleComponent === 'unverified'}
          onClick={() => setToggleComponent('unverified')}
          text='Unverified'
        />
      </section>

      {toggleComponent === 'verified' && <VerifiedArticles />}
      {toggleComponent === 'unverified' && <UnverifiedArticles />}
    </>
  )
}

export default HomeComponent
