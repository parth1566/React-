import React from 'react'
import ViratPic from '../assets/ViratPic.jpg'
import "./UserCard.css"

const UserCard = (props) => {
  return (
    <div className='user-container'>
        <p id='user-name'>{props.name} </p>
        <img id = 'user-img' src= {props.image} alt={props.name}></img>
        <p id='user-desc'>Description of {props.name}</p>
    </div>
  )
}

export default UserCard
