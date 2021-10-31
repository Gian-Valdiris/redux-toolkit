
import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
export const getDataApi= createAsyncThunk('MyReducerOne/obteniendoData',async(url,thunkAPI)=>{

  const {data} = await axios.get(url);
  return data;
})

const MyReducerOne = createSlice({
  name:'reducer1',
  initialState:{
    loading:'idle',
    entities:[]
  },
  reducers:{
    /*lo que viene aqui son las acciones de mi reducer, entonces el nombre de la funcion
    es el nombre de la accion a la cual voy a hacer dispath*/
    addImg(state,action){
      state.push('Hola add Img')
    }

  },
  extraReducers:(builder)=>{
    builder.addCase(getDataApi.fulfilled,(state,action)=>{
      state.loading='idle'
      state.entities.push(action.payload);
    })
    builder.addCase(getDataApi.pending,(state)=>{
      state.loading='pending'
    })
  }
})
// y exporto las acciones de mi reducer y el reducerEnSi
const {actions,reducer} =MyReducerOne;
//Exportar las acciones
export const {addImg} = actions;
export default reducer