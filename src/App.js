import React, {useState, useRef} from 'react';
import "./styles/app.scss";
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav";
import data from "./data";


function App() {

  const audioRef = useRef(null);
  const [libraryStatus, setLibraryStatus] = useState(false);
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsplaying] = useState(false);

   const timeUpdateHandler = (e) => {
        const current = e.target.currentTime;
        const duration = e.target.duration;
     //calculate perc
     const roundedCurrent = Math.round(current);
     const roundedDuration = Math.round(duration);
     const animation =  Math.round((roundedCurrent / roundedDuration) * 100);
        setSongInfo({ ...songInfo, currentTime: current, duration, animationPerc:animation,  });

    }; 
  
  
  const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0,
        animationPerc: 0,
    });
  
  const songEndHandler = async () => {
      let currentIndex = songs.findIndex((song) => song.id === currentSong.id);    
      await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
      if(isPlaying) audioRef.current.play();     
  }

  
  
  return (
    <div className={`App ${libraryStatus ? "activ-library" : ""}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
      <Song currentSong={ currentSong }/>
      <Player
        audioRef={audioRef}
        setSongInfo={setSongInfo}
        setCurrentSong={setCurrentSong}
        songInfo={songInfo}
        isPlaying={isPlaying}
        setIsplaying={setIsplaying}
        songs={songs}
        setSongs={setSongs}
        currentSong={currentSong} />
      <Library
        setIsplaying={setIsplaying}
        libraryStatus={libraryStatus}
        isPlaying={isPlaying}
        audioRef={audioRef}
        songs={songs}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
      />
      <audio
                onTimeUpdate={timeUpdateHandler}
                onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        onEnded={songEndHandler}
                src={currentSong.audio}>
            </audio> 
    </div>
  );
}

export default App;
