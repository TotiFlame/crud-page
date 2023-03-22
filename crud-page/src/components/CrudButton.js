import React from 'react'
import "../styles/components/CrudButton.css"

function CrudButton(props) {
  return (
        <button className="buttons" style={{ backgroundColor: props.color }}>
            <span>{props.content}</span>
        </button>
    )
}

export default CrudButton