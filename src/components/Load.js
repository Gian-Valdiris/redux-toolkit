import React from 'react';
import {Button} from 'antd';
import 'antd/dist/antd.css';
import {addImg,getDataApi} from '../redux/slice/reducerImg';
import {useDispatch} from  'react-redux';
// Importando las acciones
function Load(){
  const dispatch  = useDispatch();
  const handleClick = (event)=>{
    dispatch(getDataApi('https://rickandmortyapi.com/api/character/'))
  }
  return(
    <Button type='primary' size='large' className='btn' onClick={handleClick}>
      Cargar Data
    </Button>
  )
}
export default Load;