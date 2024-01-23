import {createSlice} from '@reduxjs/toolkit'

export const CommentSlice = createSlice({
    name:'comments',
    initialState:{
        comments:null
    },
    reducers:{
        allComments:(state , action) => {
            state.comments = action.payload
        }
    }
})

export const {allComments} = CommentSlice.actions