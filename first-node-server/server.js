const http = require('http')

const server = http.createServer((req, res) => {

    if (req.url === "/") {
        res.write('<h1>INICIO</h1>')
    }

    else if (req.url === "/nosotros") {
        res.write('<h1>SOBRE NOSOTROS</h1>')
    }

    else if (req.url === "/productos") {
        res.write('<h1>NUESTROS PRODUCTOS</h1>')
    }

    else {
        res.statusCode = 404
        res.write('<h1>404</h1><p>No encontrado</p>')
    }

    res.end()

})

server.listen(3000, () => console.log('Servidor levantado en el puerto 3000'))