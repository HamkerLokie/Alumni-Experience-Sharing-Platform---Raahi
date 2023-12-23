import CompanyTags from './CompanyTags'
import { useAppDispatch, useAppSelector } from '../hooks/sliceHooks'
import { fetchCompanies } from '../store/slices/companySlice'
import { useEffect } from 'react'
import ListComponent from '../ui/HomeLayout'

const Companies = () => {
  const { loading, data, error } = useAppSelector(state => state.comapnies)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchCompanies())
  }, [])

  return (
    <>
      <ListComponent
        title='Companies List'
        data={data}
        loading={loading}
        error={error}
        renderItem={company => (
          <CompanyTags
            count={company.count}
            company={company.company}
            img={company.domainName}
          />
        )}
      />
    </>
  )
}

export default Companies
