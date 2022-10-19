function seRompe(){
    return 3 + z
}

function seRompeAsincrona(cb) {
    setTimeout(function(){
        try{
            return 3 + z
        }catch(err){
            console.log('error en la funcion asincrona')
            cb(err)
        }
        }
    ,1000)
}

try{
   /*  seRompe() */
    seRompeAsincrona(function(err){

        console.log(err.message)
    }
    )
}catch(err){
    console.error('Algo salio mal')
    console.error(err)
    console.error(err.message)
    console.log('seguimos adelante')

}

console.log('aqui termino la ejecucion')