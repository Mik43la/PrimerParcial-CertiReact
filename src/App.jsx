import { useState, useEffect } from 'react'
import './App.css'
import Modal from './components/Modal';
import ListaCanciones from './components/ListaCanciones';
import Player from './components/Player';
import {BiSearch} from 'react-icons/bi';
import {generarCancionesPorDefault} from './helpers/defaultSongs.js';

function App() {
 /* const [cancionActual, setCancionActual] =  useState( 
    localStorage.getItem("cancion")
  ? localStorage.getItem("cancion")
  : "")*/
  const [cancionActual, setCancionActual] =  useState( []);
  const [canciones, setCanciones] = useState([]);
  const [newCancion, setNewCancion] = useState(false);
  const [filtro, setFiltro]= useState('')
  const [cancionesFiltradas, setCancionesFiltradas]=useState([]);
  const [click, setClick] = useState(false);
  const [history, setHistory] = useState([]);

  const getTime = () => {
    const totalMinutes = history[3].reduce((total, duration) => {
      const [minutes, seconds] = duration.split(":");
      return total + parseInt(minutes, 10) + parseInt(seconds, 10) / 60;
    }, 0);

    const hours = Math.floor(totalMinutes / 60);
    const minutes = Math.floor(totalMinutes % 60);
  
    return (   <p>{hours} hours {minutes} minutes</p>)
  }
  useEffect(()=> {
    if( canciones.length==0)
        setCanciones(generarCancionesPorDefault())
  },[canciones])

  useEffect(() => {
   // console.table("Cancion actual app", cancionActual);
    localStorage.setItem('cancion',cancionActual);
    
  },[cancionActual])

  


  useEffect(()=> {
    filtrarCanciones()
  }, [filtro])

  const filtrarCanciones = () => {
    const buscandoSegunFiltro = 
        canciones.filter( cancion => cancion.songName.toLowerCase().includes(filtro.toLowerCase()));
    setCancionesFiltradas(buscandoSegunFiltro);
  }
  return (
    
    <>
    <div className='flex flex-col relative '>
      <div className='flex flex-row  '>
          <div className='flex flex-row top-0 fixed bg-black h-29 z-10 right-0 left-0 '>
            <div className='top-5 left-5 p-5 z-10 font-bold'>
                <p className='p-2 text-lg'>Uwufy</p>
            </div>
            <div className='filter-songs 
                        flex items-center text-sm
                        mx-auto  justify-center 
                        border-2 
                        border-indigo-500 rounded-full  m-5 p-3
                        '>
                <BiSearch className='mx-1'/>
                
                <input
                    
                    className='  focus:outline-none m-1 bg-black '
                    type="text"
                    placeholder='What do you want to listen to?'
                    //value={filtro}
                    onChange={(e) => setFiltro(e.target.value) }
                   
                    />
                     
                  
                  
            </div>
            <div className='history-time
                        flex items-center text-sm
                        mx-auto  justify-center 
                        border-2 
                        border-indigo-500 rounded-full mx-auto  m-5 p-5 
                        '>
                        
            </div>

            <div className='absolute  right-5 p-4 z-10'>
                    <button className='bg-black text-white rounded-full p-3 border-2 border-white'
                    onClick={() => {
                        setNewCancion(true); }}>ADD SONG</button>
            </div>
          </div>

          <div className=' absolute mb-10  left-5 right-5  '>
            <ListaCanciones
                canciones= {canciones}
                filtro = {filtro}
                cancionesFiltradas = {cancionesFiltradas}
                setCancionActual={setCancionActual}
                setHistory={setHistory} history={history}
               />
          </div>

          <div className='player-section fixed z-0 bg-black p-12 bottom-0 left-0 right-0 '>  
                <Player cancionActual={cancionActual} />
          </div>
        </div>

      </div>
      {
        newCancion && (
          <Modal
              canciones = {canciones}
              setCanciones = {setCanciones}
              setNewCancion = {setNewCancion}

          />
        )
      }
    </>
  );
}


export default App;
