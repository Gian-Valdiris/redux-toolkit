import {configureStore} from '@reduxjs/toolkit'
import {persistStore,persistReducer,FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage';
import { rootReducer } from './rootReducers';

// configuracion del persist
const persistConfig ={
  key:'root',
  version:1,
  storage
}
// crear el reducer-persistido,
const persistedReducer = persistReducer(persistConfig,rootReducer)

//Configurar el store
const myStore = configureStore({
  reducer:persistedReducer,// -> reducer persistido 
  // Configuracion en el store para usar el persist segun la documentacion(Me funciono perfecto)
  middleware:(getDefaultMiddleware)=>(
    getDefaultMiddleware({
      serializableCheck:{
        ignoredActions:[FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
  )
})

//creacion del persistor 
const persistor = persistStore(myStore);

export  {
  persistor,
  PersistGate,
  myStore
}
