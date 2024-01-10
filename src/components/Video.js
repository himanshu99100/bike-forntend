import React,{useState} from 'react'
import Videosrc from '../assests/bicyle.mp4'
import './coustem.css'
import mute from '../assests/mute.png'
import unmute from '../assests/unmute.png'
const Video = () => {
  const [muted, setMuted] = useState(true);
  const [buttonimg,setbuttonimg]=useState(unmute);
  const handleMuteToggle = () => {
    setMuted(!muted);
  };
    return (
     
        <div className="w-full py-2">
        <div className="w-full">
          <video autoPlay loop  playsInline muted={muted}   className='mx-auto videobox' >
            <source src={Videosrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button className='mute-button' onClick={()=>{handleMuteToggle();
          setbuttonimg(muted?mute:unmute)}}><img src={buttonimg} className='object-cover  w-fit'></img></button>
        </div>
      </div>
    )
}

export default Video
