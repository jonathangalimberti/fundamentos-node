async function hola(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log('Hola '+ nombre)
            resolve(nombre)
        },1000)
         
     })
 }
 
async function hablar(nombre){
     return new Promise((resolve, reject) => {
         setTimeout(function(){
                 console.log('bla bla bla...')
                 resolve(nombre)
                 reject ('hay un error')
             },1000)
     })
 }
 
async function adios(nombre){
     return new Promise((resolve, reject) => {
         setTimeout(function(){
             console.log('Adios '+nombre)
             resolve(nombre)
         },1000)
     })
 }

async function main(nombre){
    await hola(nombre)
    await hablar()
    await hablar()
    await hablar()
    await adios(nombre)
}

main('jonathan')