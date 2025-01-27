import React from 'react'
import { useParams } from 'react-router-dom'

const Profile = () => {
    const params = useParams();
  return (
    <div>
          Good Morning,<br />
          {params.userName}
    </div>
  )
}

export default Profile
