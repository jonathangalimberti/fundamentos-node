console.log('Algo')
console.info('informacion')
console.error('errores')
console.warn('advertencias')

var tabla = [
    {
        a: 1,
        b: 'z'
    },
    {
        a: 2,
        b: 'otra letra'
    }
]
console.table(tabla)

console.group('conversacion')
console.log('hola')
console.group('bla')
console.log('blablabla')
console.log('blablabla')
console.log('blablabla')
console.log('blablabla')
console.groupEnd('bla')
console.log('adios')
console.groupEnd('conversacion')