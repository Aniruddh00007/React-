import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
     const { id } = useParams();
  return (
    <div className='p-4 text-3xl bg-gray-600 text-white-950 stroke-indigo-950'>User :{id}</div>
  )
}

export default User