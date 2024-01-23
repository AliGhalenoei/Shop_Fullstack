
import {createSlice} from '@reduxjs/toolkit'
import {jwtDecode} from 'jwt-decode'

export const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
        authToken: localStorage.getItem('access') ? localStorage.getItem('access') : null,
        accessToken: localStorage.getItem('authToken') ? localStorage.getItem('authToken') : null,
        is_login: localStorage.getItem('is_login') ? localStorage.getItem('is_login') : false
    },
    reducers: {
        login: (state, action) => {
            state.authToken = action.payload.access;
            localStorage.setItem('access' , JSON.stringify(action.payload.access))

            state.accessToken = jwtDecode(action.payload.access);
            localStorage.setItem('authToken', JSON.stringify(
                jwtDecode(action.payload.access),
                
            )); // ذخیره authToken در local storage

            localStorage.setItem('is_login' , state.is_login = true)
        },
        logout: (state , action) => {
            state.authToken = null
            state.accessToken = null
            state.is_login = false
            localStorage.removeItem('authToken')
            localStorage.removeItem('is_login')
        }
    }
});

export const {login ,logout} = AuthSlice.actions

