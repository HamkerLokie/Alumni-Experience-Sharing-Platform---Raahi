import { BASE_URL } from '../defs/defs'
import useFetchData from '../hooks/useFetchData'
import { useState } from 'react'
import { Button, Modal, Label, Checkbox, Toast } from 'flowbite-react'
import parse from 'html-react-parser'
import axios from '../axios'

const UnverifiedArticles = () => {
  const [desc, setDesc] = useState<string | undefined>('')
  const [id, setId] = useState<string>('')
  const [openModal, setOpenModal] = useState(false)
  const {
    data: articles,
    loading,
    error
  } = useFetchData(`${BASE_URL}/get-unverified-articles`)

  const handleArticleClick = (
    articleId: string,
    articleDescription: string
  ) => {
    setOpenModal(!openModal)
    setDesc(articleDescription)
    setId(articleId)
  }

  const parseHTMLTags = (str: string) => {
    return (
      str?.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&') ||
      ''
    )
  }

  const sendConfirmation = async (articleId: string) => {
    try {
      const response = await axios.put(`/verify-article/${articleId}`)
      if (response.status === 200) {
        alert('Message send Successfully')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {articles?.length! > 0 ? (
        <table className='w-full border-collapse border border-gray-300'>
          <thead className='bg-gray-200'>
            <tr>
              <th className='border border-gray-300 text-black px-4 py-2'>
                S.No
              </th>
              <th className='border border-gray-300 text-black px-4 py-2'>
                Name
              </th>
              <th className='border border-gray-300 text-black px-4 py-2'>
                Company
              </th>
              <th className='border border-gray-300 text-black px-4 py-2'>
                Title
              </th>
              <th className='border border-gray-300 text-black px-4 py-2'>
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            {articles?.map((data, index) => (
              <tr
                key={data._id}
                className='hover:bg-slate-400 hover:text-black cursor-pointer'
                onClick={() => handleArticleClick(data._id, data.description)}
              >
                <td className='border border-gray-300 px-4 py-2'>
                  {index + 1}
                </td>
                <td className='border border-gray-300 px-4 py-2'>
                  {data.fullName}
                </td>
                <td className='border border-gray-300 px-4 py-2'>
                  {data.companyName}
                </td>
                <td className='border border-gray-300 px-4 py-2'>
                  {data.title}
                </td>
                <td className='border border-gray-300 px-4 py-2'>
                  {data.email}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No Unverified Articles</p>
      )}

      <Modal
        className='flex flex-col bg-slate-600 justify-center items-center p-4'
        dismissible
        show={openModal}
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header>Article</Modal.Header>
        <Modal.Body>
          <div className='border-2 flex justify-center p-3'>
            <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
              {parse(parseHTMLTags(desc!))}
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className='hover:border-red-200'
            onClick={() => sendConfirmation(id)}
          >
            Send Confirmation
          </Button>
          <Button color='gray' onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default UnverifiedArticles
