export const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };

export const validateMmSs =  new RegExp('^([0-5]?[0-9]):([0-5][0-9])$');


