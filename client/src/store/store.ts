import { configureStore, Action, ThunkAction } from '@reduxjs/toolkit'
import fetchCompanies from '../store/slices/companySlice.ts'
export const store = configureStore({
  reducer: {
    comapnies: fetchCompanies
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
