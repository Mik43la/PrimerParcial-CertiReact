import Hawks from '../assets/icon_hawks.jpg'
import { useEffect, useState } from 'react';
import {BiPlayCircle}   from 'react-icons/bi';
import {BiPauseCircle}   from 'react-icons/bi';
import {BiSkipNext}   from 'react-icons/bi';
import {BiSkipPrevious}   from 'react-icons/bi';



const Player = ({cancionActual}) => {

    //const {id, songName, artistName, songDuration} = cancionActual ;
    const [id, setId] = useState('0');
    const [songName, setSongName] = useState('Click On A Song To Play Something!');
    const [artistName, setArtistName] = useState('')
    const [songDuration, setSongDuration] = useState('');

    useEffect(() => {
      //  console.table("update from player", cancionActual.songDuration)
      if(typeof cancionActual.songDuration !== "undefined"){
        //console.log(typeof cancionActual.songDuration, "aaa")
        updatePlayer()
      }
    
    },[cancionActual])
    
    const updatePlayer = () => {
        setSongName(cancionActual.songName);
        setArtistName(cancionActual.artistName);
        setSongDuration(cancionActual.songDuration);
        
    }
   

    return (
        <>
        <div className="flex items-center h-2 justify-between">
            <div className="flex  items-center ">
                <div className="song-cover mr-4">
                    <img src={Hawks} alt="Song Cover" className="w-16 h-16" />
                </div>
                <div className='text-white flex '>
                    <div className='flex  flex-col items-start   '>
                        <h4 className="text-sm font-bold ">{songName}</h4>
                        <p className="text-sm  ">{artistName}</p>
                        <p className='text-sm '>{songDuration}</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center w-1/2 h-1/2  p-10 space-x-8">
                <BiSkipPrevious size={50} className='w-10'/>
                <BiPlayCircle size={30} className=' w-min-10'/>
                <BiSkipNext size={50} className=' w-10'/>
            </div>
        </div>
      
         
      </>
    );
}
export default Player;