import React from 'react'

function profilePhoto({name,photo}) {
  return (
    <div>
  <img src={photo} style={{width:"36rem",height:"36rem"}} className="cat"  alt=""/>
    </div>
  )
}

export default profilePhoto
