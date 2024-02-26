interface Company {
  company: string
  count: number
  domainName: string
}

export interface CompanySlice {
  loading: boolean
  data: Company[]
  error: string | null
}
