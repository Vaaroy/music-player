import React from 'react';



const LibrarySong = ({ song, setSongs, songs, setCurrentSong, id, audioRef, isPlaying, setIsplaying }) => {
    
    const songSelect = async () => {
        const selectedsong = songs.filter((state) => state.id === id);
        await setCurrentSong(selectedsong[0]);
       
        if (isPlaying) {
            
            audioRef.current.pause();
            setIsplaying(!isPlaying);
        } else {
            audioRef.current.play();
            setIsplaying(!isPlaying);
        }
        
        //nb
        const newSongs = songs.map((song) => {
            if (song.id === id) {
                return {
                     
                    ...song,
                    active: true,
                    
                }
            } else {
                return {
                    ...song,
                    active: false,
                }
            }
        });
        setSongs(newSongs);
        //check if playing
        if(isPlaying) audioRef.current.play();
        
    }
    return (
        
        <div onClick={songSelect} className={`library__song ${song.active ? 'selected' : ""}`}>
          
            <span className="artwork"><img alt={song.name} src={song.cover}></img></span>
            <div className="song__description">
                    <h3>{song.name}</h3>
                     <h4>{song.artist}</h4>
            </div>
            
            
        </div>
    )
}

export default LibrarySong
