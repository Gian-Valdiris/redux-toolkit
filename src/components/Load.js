import React from "react";
import { Button, Card } from "antd";
import "antd/dist/antd.css";
import { getDataApi,deleteImages } from "../redux/slice/reducerImg";
import { useDispatch, useSelector } from "react-redux";

function Load() {
 
  const dispatch = useDispatch();
  const { entities } = useSelector((state) => state.reducerImage);
  
  const handleClick = (event) => {
    dispatch(getDataApi("https://rickandmortyapi.com/api/character/"));
  };
  
  const handleClickDeleteImages=(event)=>{
    dispatch(deleteImages());
  }
  
  return (
    <div className="container">
      <Button type="primary" size="large" className="btn" onClick={handleClick}>
        Cargar Data
      </Button>
      <Button type="default" size="large" className="btn" onClick={handleClickDeleteImages}>
        Eliminar Data 
      </Button>
      {entities ? (
        <div className="images">
          {entities.map((i) => (
            <Card
              className="card"
              key={i.id}
              hoverable
              style={{ width: 240 }}
              cover={<img src={i.image} alt={i.name} />}
            >
              <Card.Meta title={i.name} />
            </Card>
          ))}
        </div>
      ):(
        <h2>
          No hay imagenes para renderizar
        </h2>
      )}
    </div>
  );
}
export default Load;
