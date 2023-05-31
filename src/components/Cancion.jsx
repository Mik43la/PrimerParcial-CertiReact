import Ara from '../assets/arabalika_gun.png'
import Hawks from '../assets/icon_hawks.jpg'
import { useState } from 'react';


const Cancion = ({cancion, setCancionActual, setHistory, history}) => {
    
   const {id, songName, artistName, songDuration} = cancion ;

   /* const id = cancion?.id ;
    const songName = cancion?.songName ;
    const artistName = cancion?.artistName;
    const songDuration = cancion?.songDuration;*/


   const updatePlayer = () => {
        
        //setCancionActual(() =>{ return {...cancion}})
        setCancionActual(cancion)
        setHistory([cancion, ...history])
        console.table(history)

   }
    return (
        
        <div  className="flex flex-row absolute space-x-3 m-0 relative  bg-black text-white border-solid border-2 border-violet-500">
            <div className='p-5  '>
                <img className='object-scale-down  h-20 w-18  hover:opacity-25 ' src={Hawks} 
                onClick={updatePlayer}  alt="Song Cover" ></img>
            </div>
            <div  className="info flex flex-col items-start  space-y-3 p-4 m-2 w-90">
                <h2 className="song-title font-bold text-white ">{songName}</h2>
                <p className="song-artist absolute top-11 text-white text-lg ">{artistName}</p>                
            </div>
            <p className="song-duration text-white  w-10 p-10 absolute right-10">{songDuration}</p>
                
        </div>
      

        
    );
}
export default Cancion;
