import net from 'node:net'

// it takes a desired port as parameter, if it's unavailable, it looks for an available port 
export function findFreePort(desiredPort){
    return new Promise((resolve, reject) => {
        // a TCP server is created. Which will try to listen through initialPort
        const server = net.createServer()

        // if server listens successfully
        server.listen(desiredPort, () => {
            // current server's listening port
            const { port } = server.address()
            server.close(() => {
                // server is closed and selected port is returned
                resolve(port)
            })
        })

        server.on('error', (err) => {
            // if port is unavailable
            if (err.code == 'EADDRINUSE') {
                // current function is called again, passing 0 
                // if a server listens to port 0, it will actually listen to the current available port, and it will be returned 
                findFreePort(0)
                    .then(port => resolve(port))
            } else {
                reject(err)
            }
        })
    })
}

// note: TCP protocol is used instead of HTTP because it is lighter