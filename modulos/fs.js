const fs = require('fs')

function leer(ruta, callback){
    fs.readFile (ruta,(err,data)=>{
        callback(data.toString())
    })
}

function escribir(ruta, contenido, callback){
    fs.writeFile(ruta,contenido,(err)=>{
        if(err){
            console.error('No se ha podido escribir',err)
        }else{
            console.log('Se escribio correctamente en '+ ruta)
            
        }
    })
}

function borrar(ruta,callback){
    fs.unlink(ruta,()=>{
        console.log('Se borro el archivo en ' +ruta)
    })
}
/* escribir(__dirname + '/archivo1.txt','escribiendo archivos con node',console.log)   */
/* leer(__dirname + '/archivo.txt',console.log)
 */borrar(__dirname + '/archivo1.txt',console.log)