import React from 'react'
import Videosrc from '../assests/bicyle.mp4'
import './coustem.css'
const Video = () => {
    return (
        <div className="w-full py-2">
        <div className="w-full">
          <video autoPlay loop muted playsInline className='mx-auto videobox' >
            <source src={Videosrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    )
}

export default Video
