interface ButtonProps {
  heading: string
}

const Heading: React.FC<ButtonProps> = ({ heading }) => {
  return (
    <h1 className='mb-4 text-2xl font-extrabold text-gray-900 dark:text-white md:text-2xl lg:text-2x'>
      <span className='text-pri font-prompt'>
        {heading}
      </span>
    </h1>
  )
}

export default Heading
