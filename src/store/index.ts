// features/expense/index.ts

import { configureStore } from '@reduxjs/toolkit'
import { expenseReducer } from './index'

export const store = configureStore({
  reducer: {
    expense: expenseReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export { default as expenseReducer } from '../features/slices/expenseSlice'
export * from '../types/expenseType'