import {configureStore} from '@reduxjs/toolkit'
import MyReducerImg from './slice/reducerImg';
import {combineReducers} from '@reduxjs/toolkit';
import {persistStore,persistReducer,FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {PersistGate} from 'redux-persist/integration/react'

const persistConfig ={
  key:'root',
  version:1,
  storage
}

const rootReducer = combineReducers({
  reducerImage:MyReducerImg
})
const persistedReducer = persistReducer(persistConfig,rootReducer) 
const myStore = configureStore({
  reducer:persistedReducer,
  middleware:(getDefaultMiddleware)=>(
    getDefaultMiddleware({
      serializableCheck:{
        ignoredActions:[FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
  )
})
const persistor = persistStore(myStore);

export  {
  persistor,
  PersistGate,
  myStore
}
