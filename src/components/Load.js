import React from "react";
import { Button, Card } from "antd";
import "antd/dist/antd.css";
import { addImg, getDataApi } from "../redux/slice/reducerImg";
import { useDispatch, useSelector } from "react-redux";
// Importando las acciones
function Load() {
  const dispatch = useDispatch();
  const { entities } = useSelector((state) => state.reducerImage);
  const handleClick = (event) => {
    dispatch(getDataApi("https://rickandmortyapi.com/api/character/"));
  };
  return (
    <div className="container">
      <Button type="primary" size="large" className="btn" onClick={handleClick}>
        Cargar Data
      </Button>
      {entities && (
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
      )}
    </div>
  );
}
export default Load;
