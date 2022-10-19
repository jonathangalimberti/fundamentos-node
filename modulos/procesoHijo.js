const  {exec, spawn} = require('child_process')

/* exec('ls -la', (err,stdout,sterror) =>{
    if(err){
        console.error(err)
        return false    
    }
    console.log(stdout)
}) */
/* exec('node modulos/consola.js', (err,stdout,sterror) =>{
    if(err){
        console.error(err)
        return false    
    }
    console.log(stdout)
}) */

let proceso = spawn('ls',['-la'])

console.log(proceso)
console.log(proceso.pid)
console.log(proceso.connected)


proceso.stdout.on('data', function(dato){
    console.log(dato.toString())
})

proceso.on('exit', function(){
    console.log('fin del proceso')
})
