function hola(nombre, miCallback){
    setTimeout(function(){
        console.log('Hola '+ nombre)
        miCallback(nombre)
    },1000)
}

function hablar(nombre,callbackHablar){
    setTimeout(function(){
        setTimeout(function(){
            console.log('bla bla bla...')
            callbackHablar(nombre)
        },1000)
    })
}

function adios(nombre, otroCallcack){
    setTimeout(function(){
        console.log('Adios '+nombre)
        otroCallcack(nombre)
    },1000)
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

hola('Jonathan',function(nombre){
    conversacion(nombre, 4 ,function(){
        console.log('Proceso terminado')
    })
})