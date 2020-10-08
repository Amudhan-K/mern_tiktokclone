import React,{useRef,useState} from 'react'
import "./Video.css";
import Videofooter from "./Videofooter";
import Videosidebar from './Videosidebar';



function Video({url,channel,description,song,likes,messages,shares}) {
    const[playing,setplaying]=useState(false);
    const videoRef=useRef(null);
    const handleVideoPress=()=>{
        if(playing){
            videoRef.current.pause();
            setplaying(false);
        }else{
            videoRef.current.play();
            setplaying(true);
        }

    }
    return (
        <div className="video">
            <video className='video_player' onClick={handleVideoPress}  loop ref={videoRef} src={url}></video>
            <Videofooter channel={channel} description={description} song={song}/>
            <Videosidebar likes={likes} shares={shares} messages={messages}/>
        </div>
          
       
        
        
    );
}

export default Video;