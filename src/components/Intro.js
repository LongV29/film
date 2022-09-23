import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import './Intro.css';
import {ImVolumeMedium,ImVolumeMute2} from 'react-icons/im';

function Intro(props) {
    const [isVolume, setVolume] = useState(true);
    return (
        <div className="intro_content">
        <ReactPlayer autoPlay loop
        width='100%'
        height='100%'
        volume={1}
        muted={isVolume}
        playing={true}
        url="./video/video-1.mp4" 
        className="intro_video" />

        <div className="intro_title">
            <h1>Welcome.</h1>
            <p>Millions of movies, TV shows and people to discover. Explore now.</p>
        </div>
        
        <div className="intro_volume">
           
            {isVolume ? (<ImVolumeMute2  className = " intro_volume-off" onClick={() =>setVolume(prev =>!prev)}/>) : (<ImVolumeMedium className = " intro_volume-on" onClick={() => setVolume(prev =>!prev)}/>)}
           
        </div>
        </div>
    )
}
export default Intro
