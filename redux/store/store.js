import {configureStore} from '@reduxjs/toolkit'
import authCounter from '../reducers/counterSlice'

const store = configureStore({
    reducer: {counter: authCounter}
})

export default store;