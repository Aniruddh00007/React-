import React, { useEffect, useState } from 'react'

function GitHub() {
    const [data, setData] = useState([]);
    useEffect(() => {
    fetch('https://api.github.com/users/Aniruddh00007/followers')
    .then(Response => Response.json())
    .then(data=>{
        console.log(data);
       
      
        setData(data)
        
    })
      }, [])
    
  return (
    <div className='p-4 m-4 text-3xl text-center text-white bg-gray-600'> GitHub followers :{data.followers_url}
    <img src={data.avatar_url} alt="git_picture" width={300} /> 
    
    
    </div>
  )
}

export default GitHub