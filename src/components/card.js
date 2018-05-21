import React from 'react'

const Card = (props) => {
  const handleOnDelete = () => {
    props.handleDeleteCard(props.card.id)
  }
  return (
    <li className="list-group-item">
      {props.card.content}
      <button className="btn btn-link pull-right" onClick={handleOnDelete}>X</button>
    </li>
  )
}

export default Card
