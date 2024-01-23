import {createSlice} from '@reduxjs/toolkit'

export const ProductSlice = createSlice({
    name:'products',
    initialState:{
        trendProducts:null,
        consoleProducts:null,
        laptopProducts:null,
        pcProducts:null,
        mobailProducts:null,
        cameraProducts:null,
        products:null,
    },
    reducers:{
        TrendProducts : (state , action) => {
            state.trendProducts = action.payload
        },
        ConsoleProducts : (state , action) => {
            state.consoleProducts = action.payload
        },
        LaptopProducts : (state , action) => {
            state.laptopProducts = action.payload
        },
        PcProducts : (state , action) => {
            state.pcProducts = action.payload
        },
        MobailProducts : (state , action) => {
            state.mobailProducts = action.payload
        },
        CameraProducts : (state , action) => {
            state.cameraProducts = action.payload
        },
        Products : (state , action) => {
            state.products = action.payload
        },
    }
})

export const {
    TrendProducts,
    ConsoleProducts,
    LaptopProducts,
    PcProducts,
    MobailProducts,
    CameraProducts,
    Products

} = ProductSlice.actions