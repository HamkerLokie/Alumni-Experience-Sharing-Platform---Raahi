import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../../axios'

interface Article {
  _id: string
  title: string
  description: string
  createdAt:  Date
  name: string
}

interface ArticleSlice {
  loading: boolean
  data: Article[]
  error: string | null
}

const initialState: ArticleSlice = {
  loading: false,
  data: [],
  error: null
}

const fetchRecentArticleSlice = createSlice({
  name: 'recenet_article',
  initialState,
  reducers: {
    sortByName: state => {
      state.data.sort((a, b) => {
        const nameA = a.name.toUpperCase()
        const nameB = b.name.toUpperCase()
        if (nameA < nameB) {
          return -1
        }
        if (nameA > nameB) {
          return 1
        }
        return 0
      })
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchRecentArticle.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchRecentArticle.fulfilled, (state, action) => {
        console.log('action', action.payload)
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
      .addCase(fetchRecentArticle.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
          ? action.payload.toString()
          : 'An error occurred'
      })
  }
})

export const fetchRecentArticle = createAsyncThunk(
  'recent_article',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/articles/all')
      console.log('recent article', response.data)
      return response.data
    } catch (error) {
      console.log(error)
      return rejectWithValue('Failed to Fetch Recent Articles')
    }
  }
)

export const { sortByName } = fetchRecentArticleSlice.actions

export default fetchRecentArticleSlice.reducer
