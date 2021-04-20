import React from 'react'
import LibrarySong from "./LibrarySong";

const Library = ({songs, setSongs, setCurrentSong, audioRef, isPlaying, libraryStatus,setIsplaying}) => {
    return (
        <div className={`library ${libraryStatus ? 'active-Library' :''} `}>
            <h2>Beat Store</h2>
            <div className="library-songs">
                {songs.map((song) => (
                    <LibrarySong
                        
                        setIsplaying={setIsplaying}
                        songs={songs} id={song.id}
                        setCurrentSong={setCurrentSong}
                        song={song}
                        key={song.id}
                        audioRef={audioRef}
                        isPlaying={isPlaying}
                         setSongs={ setSongs}
                    />
                ))}
            </div>
        </div>
        
    );
};

export default Library
