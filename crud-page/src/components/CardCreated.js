import React from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import "../styles/components/CardCreated.css"

function CardCreated() {
  const info = {
    id: "1",
    name: 'Santiago Fernandez',
    age: '21',
    cedula: "5241628"
  };
  return (
    <div className="card-container">
      <span>{info.id}</span>
      <span>{info.name}</span>
      <span>{info.age}</span>
      <span>{info.cedula}</span>
      <AiOutlineEdit />
    </div>
  );
}

export default CardCreated;
