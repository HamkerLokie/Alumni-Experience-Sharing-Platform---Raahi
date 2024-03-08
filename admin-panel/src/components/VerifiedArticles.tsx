import { BASE_URL } from '../defs/defs'
import useFetchData from '../hooks/useFetchData'
const VerifiedArticles = () => {
  const {
    data: articles,
    loading,
    error
  } = useFetchData(`${BASE_URL}/get-verified-articles`)

  return (
    <>
      <div className='text-lg font-bold mb-4'>Verified Articles</div>

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
              // onClick={() => handleArticleClick(data._id, data.description)}
            >
              <td className='border border-gray-300 px-4 py-2'>{index + 1}</td>
              <td className='border border-gray-300 px-4 py-2'>
                {data.fullName}
              </td>
              <td className='border border-gray-300 px-4 py-2'>
                {data.companyName}
              </td>
              <td className='border border-gray-300 px-4 py-2'>{data.title}</td>
              <td className='border border-gray-300 px-4 py-2'>{data.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default VerifiedArticles
