function hola(nombre){
   return new Promise((resolve, reject) => {
       setTimeout(function(){
           console.log('Hola '+ nombre)
           resolve(nombre)
       },1000)
        
    })
}

function hablar(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
                console.log('bla bla bla...')
                resolve(nombre)
                reject ('hay un error')
            },1000)
    })
}

function adios(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log('Adios '+nombre)
            resolve(nombre)
        },1000)
    })
}

/* hola('jonathan',function(nombre){
    adios(nombre,function(){
        console.log('terminamos')
    })
}) */

/* hola('jonathan',function(nombre){
    hablar(function(){
        hablar(function(){
            hablar(function(){ 
                hablar(function(){
                    adios(nombre,function(){
                        console.log ('terminando proceso')
                    })
                })
            
            })
        })
    })
}) */

 function conversacion(nombre,veces, callback){
    if (veces > 0 ){
        hablar(nombre,function(){
            conversacion(nombre, --veces, callback)
        })
    }else {
        adios(nombre,function(){
            console.log('Proceso terminado')
        })
    }
} 

hola('Jonathan')
    .then (hablar)
    .then (hablar)
    .then (hablar)
    .then (adios)
    .catch(error => {
        console.error('ha habido un error');
        console.error(error);
    })