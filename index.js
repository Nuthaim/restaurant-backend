//import json -server 
const jsonServer = require('json-server')

//create aserver application using json server

const restServer = jsonServer.create()


//set up path for db.json

const router = jsonServer.router('db.json')



//return a middleware  used by json server

const middleware= jsonServer.defaults()



//setup port

const port = 3001

//use in server
restServer.use(middleware)
restServer.use(router)


//to run port

restServer.listen(port,()=>{
    console.log('Rest server listening on port' +port);
}
)








