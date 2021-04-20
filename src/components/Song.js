import React from 'react'


const Song = ({ currentSong })=> {
    return (
        
        <div className="song-container">
            {/*---picture------*/}
            <img alt={currentSong.name} src={currentSong.cover}></img>
            {/*---Song Name------*/}
            <h2>{currentSong.name}</h2>
            {/*---Artist------*/}
            <h4>{currentSong.artist}</h4>
            
        </div>
    )
}

export default Song
