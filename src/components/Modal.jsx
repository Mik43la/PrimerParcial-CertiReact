import CerrarBtn from "../assets/cerrar.svg";
import CrearCancion from "./CrearCancion";


const Modal = ({ canciones, setCanciones, setNewCancion }) => {
  const ocultarModal = () => {
   
    setNewCancion(false);
  };

  return (
   
    <div className="absolute  top-0 left-0 right-0 bottom-0  backdrop-blur-sm z-10 ">
        <div className="absolute top-5 right-10  z-30  ">
         {/* <img src={CerrarBtn} alt="cerrar modal" onClick={ocultarModal} />*/}
            <button alt="cerrar modal" 
            onClick={ocultarModal} 
            className="rounded-full 
              p-3 px-5 border-2 
              bg-violet-500
              border-white">X</button>
        </div>
        <CrearCancion 
          canciones={canciones} 
          setCanciones={setCanciones} 
          setNewCancion={setNewCancion}  />
    </div>
    
   
  );
};

export default Modal;
