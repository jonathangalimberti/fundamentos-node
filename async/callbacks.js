function hola(nombre, miCallback){
    setTimeout(function(){
        console.log('Hola '+ nombre)
        miCallback(nombre)
    },1000)
}

function adios(nombre, otroCallcack){
    setTimeout(function(){
        console.log('Adios '+nombre)
        otroCallcack(nombre)
    },1000)
}

hola('jonathan',function(nombre){
    adios(nombre,function(){
        console.log ('terminando proceso')
    })
})

