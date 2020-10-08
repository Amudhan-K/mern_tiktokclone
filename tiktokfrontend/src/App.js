import axios from './axios';
import React, { useState,useEffect } from 'react';
import './App.css';
import Video from "./Video";
import Videofooter from "./Videofooter";


function App() {
  const[videos,setVideos]=useState([]);

  useEffect(()=>{
    async function fetchPosts() {
      const response = await axios.get("/v2/posts");
      setVideos(response.data);


      return response;

    }
    fetchPosts();
    },[]); 
    console.log(videos);



  return (
        
        <div className="app">
          <div className="app_video">
         
            {videos.map(
              ({url,channel,description,song,likes,messages,shares})=>(
                <Video
                  url={url}
                  channel={channel}
                  song={song}
                  likes={likes}
                  messages={messages}
                  description={description}
                  shares={shares}

                />
              )             
            )}
            
          </div>
            
        </div>
     
        
  );
}

export default App;
