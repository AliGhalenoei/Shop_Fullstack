import {createSlice} from '@reduxjs/toolkit'

export const CategorySlice = createSlice({
    name:'categorys',
    initialState:{
        categorys:null
    },
    reducers:{
        allCategory:(state , action) => {
            state.categorys = action.payload
        }
    }
})

export const {allCategory} = CategorySlice.actions