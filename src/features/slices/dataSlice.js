import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [
        {
            id: 1,
            title: "Bitcoin",
            ticker: "BTC",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus at laborum qui, nulla numquam nam dolorem perferendis vel sint magnam!",
            price: 68500
        }
    ]
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        changePrice: (state, action) => {
            state.price = action.payload
        },
    },
})

export const { changePrice } = dataSlice.actions
export default dataSlice.reducer