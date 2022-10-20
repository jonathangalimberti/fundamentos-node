process.on('beforeExit', ()=>{
    console.log('el proceso esta por terminar')
})
process.on('exit', ()=>{
    console.log('el proceso termino')
})

process.on('uncaughtException',(err,origrn)=>{
    console.error('error detectado')
    console.error(err)
})

funcionFicticia()

console.log('esto despues del error')