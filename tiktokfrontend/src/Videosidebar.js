import React,{useState} from 'react';
import "./Videosidebar.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
function Videosidebar({likes,shares,messages}) {
    const [Liked,setLiked]=useState(false); 

    return (
        <div className="video_side_bar">
            <div className="sidebar_button">
                {Liked?(
                        <FavoriteIcon fontSize="large"
                        onClick={(e)=>setLiked(false)}
                        /> 
                ):(
                    <FavoriteBorderIcon
                    fontSize="large"
                    onClick={(e)=>setLiked(true)}/>
                )
                }
                 
            <p>{Liked? likes+1:likes}</p>
            </div>
            <div className="sidebar_button">
                <MessageIcon fontSize="large"/>
            <p>{messages}</p>
            </div>
            <div className="sidebar_button">
                <ShareIcon fontSize="large"/>
                <p>{shares}</p>
            </div>            
        </div>
    )
}

export default Videosidebar;
