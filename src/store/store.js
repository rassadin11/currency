import { configureStore } from '@reduxjs/toolkit'
import dataSlice from '../features/slices/dataSlice';

export const store = configureStore({
    reducer: {
        data: dataSlice
    },
})

export default store;