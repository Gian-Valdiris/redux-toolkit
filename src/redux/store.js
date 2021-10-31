import {configureStore} from '@reduxjs/toolkit'
import MyReducerImg from './slice/reducerImg';
export const myStore = configureStore({
  reducer:{
    reducerImg:MyReducerImg
  }
})
