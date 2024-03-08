import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../../axios'
import { CompanySlice } from '../../defs/CompanyTypes'

const initialState: CompanySlice = {
  loading: false,
  data: [],
  error: null
}

const fetchCompaniesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    sortByCount: state => {
      state.data.sort((a, b) => b.count - a.count)
    },
    sortByCompanyName: state => {
      state.data.sort((a, b) => a.company.localeCompare(b.company))
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCompanies.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchCompanies.fulfilled, (state, action) => {
        const { statusCode, data, message, success } = action.payload
        if (statusCode === 200 && success) {
          state.loading = false
          state.data = data
          state.error = null
        } else {
          state.loading = false
          state.error = message || 'An error occurred'
        }
      })
      .addCase(fetchCompanies.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
          ? action.payload.toString()
          : 'An error occurred'
      })
  }
})

export const fetchCompanies = createAsyncThunk(
  'companies_fetch',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/companies/getallcompanies')
      return response.data
    } catch (error) {
      return rejectWithValue('Failed to fetch Comapnies')
    }
  }
)

export const { sortByCount, sortByCompanyName } = fetchCompaniesSlice.actions

export default fetchCompaniesSlice.reducer
