import { FC, Fragment } from 'react'
import Heading from '../ui/Heading'

import info from '../assets/info.png'
import article from '../assets/article.png'
import tags from '../assets/tags.png'

interface StepProps {
  number: number
  text: string
}
interface SectionProps {
  title: string
  content?: string
  image?: string
}
const Step: FC<StepProps> = ({ number, text }) => (
  <li>
    <b>Step {number}:</b> {text}
  </li>
)

const Section: FC<SectionProps> = ({ title, content, image }) => (
  <li className='mb-4 p-pad flex flex-col flex-wrap items-center'>
    <br />
    <h4 className='text-center font-prompt'>
      <b  >{title}</b>
    </h4>
    {content && <p className='text-center font-josefin' >{content}</p>}
   {image && <img className='w-1/2 bg-gray p-pad' src={image} alt='' />}
  </li>
)

const Guidelines: React.FC = () => (
  <Fragment>
    <div className=' flex flex-col flex-wrap w-3/4 justify-center items-center m-auto p-pad '>
      <Heading heading='Guidelines' />
      <p className='text-center text-xl font-archivo mb-2 '>
        Raahi serves as a platform for sharing experiences. Individuals
        associated with <u>Chandigarh University</u> can contribute their insights, offering valuable
        guidance to others navigating their journey towards upcoming interviews.
      </p>
<br />
      <u className='text-2xl font-josefin'>Reviewing Process:</u>
      <ul className='mb-2'>
        <Step
          number={1}
          text="Begin by documenting your interview encounter in the 'Write Article' section."
        />
        <Step
          number={2}
          text="Once you've completed your article, submit it for review. The verification process is a brief step designed to sift through potential spam articles."
        />
        <Step
          number={3}
          text='Following verification, your article will be made accessible on our platform for others to benefit from your shared experience.'
        />
      </ul>

<br />
      <u className='text-2xl font-josefin'>How to write Article:</u>
      <ul>
        <Section title='Enter Basic Information' image={info} />
        <Section
          title='Write article in editor'
          content='The editor provides a variety of options to simplify the article writing process. With features such as adding headings, incorporating code blocks, formatting text, including emojis, inserting images, and more, it offers a versatile and user-friendly platform for creating engaging content.'
          image={article}
        />
        <Section title='Add Tags' image={tags} />
        <Section
          title='Submit'
          content="Click on the 'Submit' button to forward your article for a spam check, also known as the verification step. This ensures that the content undergoes a brief review to filter out any potential spam before it is published on the platform."
        />
      </ul>
    </div>
  </Fragment>
)

export default Guidelines
