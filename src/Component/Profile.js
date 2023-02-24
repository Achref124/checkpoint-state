import React from 'react';
import './Profile.css'

const Profile = (props) => {
  return (
    <div>
        <div>
        <img className='img1' style={{width:'250px',borderRadius:'50%'}} src={props.imgSrc} alt='achref' />
        </div>
        <div>
<h1 className='ii1'>{props.fullname}</h1>
<h2 className='ii2'>{props.Bio}</h2>
<p className='ii3'>{props.profession}</p>
        </div>
    </div>
    
    
  )
}

export default Profile
