interface ButtonProps {
  heading: string
}

const Heading: React.FC<ButtonProps> = ({ heading }) => {
  return (
    <h1 className='mb-4 text-2xl font-extrabold text-gray-900 dark:text-white md:text-2xl lg:text-2x'>
      <span className='text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'>
        {heading}
      </span>
    </h1>
  )
}

export default Heading
