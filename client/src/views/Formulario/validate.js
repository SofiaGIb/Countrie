const validate = (form) => {
    let errors = {};
    let dif = Number(form.dificultad);
    let dur = Number(form.duracion);
  
    if (!form.name) {
      errors.name = 'Campo Necesario';
    } else if (/[^A-Za-z\s]+/.test(form.name)) {
      errors.name = 'El nombre no debe contener  números ni caracteres especiales';
    } else if (form.name.length > 10) {
      errors.name = 'Excede los 15 caracteres';
    }
  
    if (!form.dificultad) {
      errors.dificultad = 'Campo Necesario';
    } else if (dif <= 0 || dif > 5) {
      errors.dificultad = 'Debe ser entre 1 y 5';
    }
  
    if (!form.duracion) {
      errors.duracion = 'Campo Necesario';
    } else if (dur <= 0 || dur > 24) {
      errors.duracion = 'Debe ser entre 1 y 24';
    }
  
    if (!form.temporada || form.temporada === 'vacio') {
      errors.temporada = 'Campo Necesario';
    }
  
    if (!form.CountryIds || form.CountryIds.length === 0) {
      errors.CountryIds = 'Campo Necesario';
    }
  
    return errors;
  };
  
  export default validate;
  
  