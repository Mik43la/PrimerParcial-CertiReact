import{generarId} from '../helpers/numbers';

export const generarCancionesPorDefault = () => {
    const cancion = [
        {
            songName:"Never Gonna Give You Up", 
            artistName: "Rick Astley",
            songDuration:"03:32",
            id: generarId()
        },
        {
            songName:"I'm Sorry I Had To", 
            artistName: "Can't Delete It",
            songDuration:"03:32",
            id: generarId()
        }
        ,
        {
            songName:"I Tried Really Hard", 
            artistName: ":D",
            songDuration:"06:52",
            id: generarId()
        }
        ,
        {
            songName:"I Hope You Don't Mind The Rick Roll", 
            artistName: "Can't Delete It",
            songDuration:"01:52",
            id: generarId()
        }
        ,
        {
            songName:"I'm Rushing", 
            artistName: "Can't Delete It",
            songDuration:"04:02",
            id: generarId()
        }
        ,
        {
            songName:"Why Do We Have To Make A Video", 
            artistName: "Can't Delete It",
            songDuration:"04:22",
            id: generarId()
        }
    ]
    return cancion;
  };