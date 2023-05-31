import { useState } from "react";
import{generarId} from '../helpers/numbers';
import {validateMmSs} from '../helpers/numbers';

const CrearCancion = ({
    canciones,
    setCanciones,
    setNewCancion
}) => {

    const [songName, setSongName] = useState("");
    const [artistName, setArtistName] = useState("");
    const [songDuration, setSongDuration] = useState("");
    const [id, setId] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        const cancion = [
            {
                songName, 
                artistName,
                songDuration,
                id: generarId()
            }
        ];
        //setCanciones((canciones) => [...canciones,...cancion])
        
        //console.table(cancion)
        if( validateMmSs.test(songDuration)){
            alert("The song was added to your playlist!")
            setCanciones([...cancion, ...canciones]);
            setNewCancion(false);
        }else{
            alert("Wrong Time Format!")
        }
       
       
      };
    
    return (
        <div className='bg-black rounded-md m-10 p-30 w-1/2   md:w-1/3 mx-auto mt-20  '>
            <h2 className="text-4xl text-center font-bold p-20">Add song</h2>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col p-10  place-self-center space-y-10 '>
                    <div className="campo ">
                        <input
                            className='text-center rounded-full '
                            type="text"
                            value={songName}
                            onChange={(e) => setSongName(e.target.value)}
                            placeholder='Song name'
                            />
                    
                    </div>
                    <div className="campo">
                        <input
                            className='text-center rounded-full '
                            placeholder='Artist'
                            type="text"
                            value={artistName}
                            onChange={(e) => setArtistName(e.target.value)}
                            />
                    </div>

                    <div className="campo">
                        <input
                            className='text-center rounded-full '
                            placeholder='Duration'
                            type="text"
                            value={songDuration}
                            
                            
                            onChange={(e) =>  setSongDuration(e.target.value) }
                            />
                    </div>
                    <input className="rounded-full bg-white text-black" type="submit" value={"Add Song"} ></input>
                </div>
            </form>
        </div>
        
    );  
}
export default CrearCancion;