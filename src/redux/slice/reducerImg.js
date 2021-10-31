
import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

// crear si Async thunk con createAsyncThunk
export const getDataApi= createAsyncThunk('MyReducerOne/obteniendoData',async(url,thunkAPI)=>{
  const {data} = await axios.get(url);
  return data.results.map(({name,id,image})=>({name,id,image}))
})
//esta es una forma de crear un reducer con el metodo createSlice
const MyReducerOne = createSlice({
  name:'reducer1',
  initialState:{
    loading:false,
    entities:null
  },
  reducers:{
    /*lo que viene aqui son las acciones de mi reducer, entonces el nombre de la funcion
    es el nombre de la accion a la cual voy a hacer dispath*/
    addImg(state,action){
      state.push('Hola add Img')
    }
  },
  extraReducers:(builder)=>{
    // esto lo agrego porque es de createAsyncThunk
    /**
     * 
     * fulfilled ->osea que ya retorno algo 
     * pending -> esta cargando 
     * entonces estas son unas acciones que se disparan gracias a redux-toolkit , el sabe cuando llamar a cada una 
     */
    builder.addCase(getDataApi.fulfilled,(state,action)=>{
      state.loading=false
      state.entities=action.payload
    })
    // cuanndo esta cargando el loading en true 
    builder.addCase(getDataApi.pending,(state)=>{
      state.loading=true
    })
  }
})
// y exporto las acciones de mi reducer y el reducerEnSi
const {actions,reducer} =MyReducerOne;
//Exportar las acciones
export const {addImg} = actions;
export default reducer