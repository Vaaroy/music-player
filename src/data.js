import { v4 as uuidv4 } from "uuid";

function chillHop() {
    
    return [

        {
            name: "King Boo",
            cover: "https://cdn.pixabay.com/photo/2015/03/30/12/37/pioneer-698515_960_720.jpg",
            artist: "Prof. Vaaroy",
            audio: "https://drive.google.com/uc?export=download&id=0B6IYTubqVP2wNGxTOHdPVGpMVUk",
            color: ["#205950", "#2ab3bf"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Bang Beat",
            cover: "https://cdn.pixabay.com/photo/2014/11/26/15/20/saxophone-546303_960_720.jpg",
            artist: "Prof. Vaaroy",
            audio: "https://drive.google.com/uc?export=download&id=0B6IYTubqVP2wOVVMSnR6Rk5qQ0E",
            color: ["#d41571", "#d415c7"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Bang Beat",
            cover: "https://cdn.pixabay.com/photo/2017/03/09/20/53/microphone-2130806_960_720.jpg",
            artist: "Prof. Vaaroy",
            audio: "https://drive.google.com/uc?export=download&id=0B6IYTubqVP2wOVVMSnR6Rk5qQ0E",
            color: ["#d41571", "#d415c7"],
            id: uuidv4(),
            active: false,
        },
    
       
    ];
}

export default chillHop;