import CompanyTags from './CompanyTags'
import { useAppDispatch, useAppSelector } from '../hooks/sliceHooks'
import { fetchCompanies } from '../store/slices/companySlice'
import { useEffect } from 'react'

const Companies = () => {
  const { loading, data, error } = useAppSelector(state => state.comapnies)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchCompanies())
  }, [])

  if (error) {
    return (
      <>
        <div>Error Occured</div>
      </>
    )
  }

  return (
    <>
      <div className=' companies w-[20%] text-center ml-4  font-archivo text-lg p-input overflow-x-hidden  max-h-[85vh] overflow-scroll'>
        <h1>Company List</h1>

        {loading && <div>Loading......</div>}
        {!loading && (
          <>
            {data &&
              data.map(company => {
                return (
                  <>
                    <CompanyTags
                      count={company.count}
                      company={company.company}
                      img={company.domainName}
                    />
                  </>
                )
              })}
          </>
        )}
      </div>
    </>
  )
}

export default Companies
