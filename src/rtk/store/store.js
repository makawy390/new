import {configureStore} from '@reduxjs/toolkit'
import mode from '../reducer/createSlice'
const store = configureStore({
 reducer: {
  mode : mode
 }
})
export default store;