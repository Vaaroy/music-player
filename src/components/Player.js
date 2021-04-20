import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay,faPause, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";


const Player =({audioRef,songs,setSongs,currentSong,setCurrentSong, isPlaying, setIsplaying, setSongInfo, songInfo})=> {
    //USEEFFECT
    const activeLibraryHandler = (nextprev) => {
        const newSongs = songs.map((song) => {
            if (song.id === nextprev.id) {
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
    }
    //event handler
    
    const playSongHandler = () => {
        //ref
        if (isPlaying) {
            
            audioRef.current.pause();
            setIsplaying(!isPlaying);
        } else {
            audioRef.current.play();
            setIsplaying(!isPlaying);
        }
        
    };
    const getTime = (time) => {
        return (
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        );
    };

    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({ ...songInfo, currentTime: e.target.value });
    };
    const skipTrackHandler = async (direction) => {

        let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
        if (direction === "next") {
            await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
            activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
        }
        if (direction === "prev") {

            if ((currentIndex - 1) % songs.length === -1) {
                await setCurrentSong(songs[songs.length - 1]);
                activeLibraryHandler(songs[songs.length - 1]);
                if(isPlaying) audioRef.current.play();
                return;
            }
            await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
            activeLibraryHandler(songs[songs.length - 1]);
        }
        if(isPlaying) audioRef.current.play();
    };
  //styles
    const trackAnim = {
        transform: `translateX(${songInfo.animationPerc}%)`
        }
    return (
        
        <div className="player">
            <div className="time__control">
                <p>{ getTime(songInfo.currentTime)}</p>
                
                <div style={{background: `linear-gradient(to right,${currentSong.color[0]}, ${currentSong.color[1]} )`,}} className="track">
                    <input
                    min={0}
                    max={songInfo.duration || 0}
                    onChange={dragHandler}
                    value={songInfo.currentTime}
                    type="range"
                    />
                    <div style={trackAnim} className="animate-track"></div>
                </div>
                
                 <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
            </div>
            <div className="play__control">
                <FontAwesomeIcon onClick={() => skipTrackHandler('prev')} className="prev" size="2x" icon={ faAngleLeft}/>
                <FontAwesomeIcon
                    onClick={playSongHandler} className="play" size="2x" icon={isPlaying ? faPause : faPlay} />
                <FontAwesomeIcon onClick={() => skipTrackHandler('next')} className="next" size="2x" icon={ faAngleRight}/>
            </div>
            
            



        </div>
    )
}

export default Player
