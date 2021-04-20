

export const playAudio =(isPlaying, audioRef)=> {
   //check if song plays
        if (isPlaying) {
            const playtest = audioRef.current.play();
            if (playtest !== undefined) {
                playtest.then((audio) => {
                    audioRef.current.play();
                })
            }
        }
}


 export  const playSongHandler = (isPlaying,audioRef,setIsplaying,current) => {
        //ref
        if (isPlaying) {
            
            audioRef.current.pause();
            setIsplaying(!isPlaying);
        } else {
            audioRef.current.play();
            setIsplaying(!isPlaying);
        }
        
    };

