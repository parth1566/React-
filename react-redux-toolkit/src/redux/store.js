import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import { themeSlice } from '../features/theme/themeSlice'
import themeReducer from '../features/theme/themeSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer, theme: themeReducer
  },
})

//steps: 

// create store
// wrap app component under Porvider
// create Slice
// register reducer in store