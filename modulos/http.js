const http = require('http')

http.createServer(router).listen(3000)

function router(req, res){
    console.log('Bienvenido al sitio')
    console.log (req.url)

    switch (req.url){
        case '/hola':
            res.write('navegando entre urls')
            res.end()
        break;
        default:

            res.write('Bienvenido al sitio')

    }


    res.end()
}