import React from 'react'
import "../styles/components/CrudButton.css"

function CrudButton(props) {
  return (
    <div className="button-container">
        <button className="buttons">
            <span>{props.content}</span>
        </button>
    </div>
    )
}

export default CrudButton