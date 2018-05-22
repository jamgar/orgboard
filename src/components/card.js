import React from 'react'

const Card = (props) => {
  const handleOnDelete = () => {
    props.handleDeleteCard(props.card.id)
  }
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col col-xs-10">
          {props.card.content}
        </div>
        <div className="col col-xs-2">
          <button className="btn btn-link pull-right" onClick={handleOnDelete}>X</button>
        </div>
      </div>
    </li>
  )
}

export default Card
