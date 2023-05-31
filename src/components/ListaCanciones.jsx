import Cancion from "./Cancion";

const ListaCanciones = ({
    canciones,
    filtro,
    cancionesFiltradas,
    setCancionActual,
    setHistory, history

}) => {

   
    return (
        <div className="lista-canciones text-xl mt-20 mb-24 ">
            {filtro? (
                <>
                    <h2 className="  flex font-bold" >
                        {
                            cancionesFiltradas.length ? "Matching Songs" : "Sorry :( There's no songs matching that name" 
                        }
                    </h2>
                    {
                        cancionesFiltradas.map((cancion) => (
                            <div key={cancion.id} className="text-white">
                                <Cancion
                                    cancion={cancion}
                                    key={cancion.id}
                                    setCancionActual={setCancionActual}
                                    setHistory={setHistory} history={history}
                                
                                />
                            </div>
                        ))
                    }
                    
                </>
            ):(
                <>
                <h2 className="  flex font-bold   place-items-center">
                    {
                        canciones.length ? "Liked Songs" : "There's no songs in this playlist"
                    }
                </h2>
                {
                    canciones.map((cancion) => (
                        <div key={cancion.id} className="text-white">
                            <Cancion
                            
                                cancion={cancion}
                                key={cancion.id}
                                setCancionActual={setCancionActual}
                                setHistory={setHistory} history={history}
                               
                            />
                        </div>
                    ))
                }
                </>
            )}

        </div>
    );
}
export default ListaCanciones;