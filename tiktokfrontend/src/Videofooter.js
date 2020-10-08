import React from 'react';
import './Videofooter.css';
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";

function Videofooter({channel,description,song}) {

    return (
        <div className="videofooter">
            
            <div className="videofooter_text">
    <h3>{channel}</h3>
    <p>{description}</p>
                <div className="videofooter_ticker">
                    <MusicNoteIcon className="videofooter_icon"/>
                
                     <Ticker mode="smooth">
                         {({index})=>(
                             <>
                             <p>{song}</p>
                             </>
                            
                         )}
                         </Ticker> 
                </div>

            </div>
            <img className="videofooter_record"
            src="https://static.thenounproject.com/png/934821-200.png"
            alt="record"></img>


        </div>
    );
}
export default Videofooter;
