

export const validate = (form)=>{
    let errors ={};
    


    if(form.name.length > 0 ){
        if(form.name) errors.name = 'Campo Necesario';
        else if (/[^A-Za-z0-9 ]+/g.test(form.name))
        errors.name =
            'EL nombre no debe contener caracteres especiales o tildes';
}
    }


    



