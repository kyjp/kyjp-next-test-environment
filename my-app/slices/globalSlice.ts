import { createSlice } from '@reduxjs/toolkit'
import {RootState} from '../app/store'

export type GlobalState = {
  apiUrl: string | undefined
}

const initialState: GlobalState = {
  apiUrl: ''
}

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
  }
})

export const apiUrl = (state: RootState) => state.global.apiUrl

export default globalSlice.reducer
