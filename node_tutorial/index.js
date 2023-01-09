// Callback

const { result } = require("lodash");
const { resolve } = require("path")

// function getMessage(msg,callback) {
//     setTimeout(() => {
//         console.log(msg)
//         callback()
//     }, 1000)

// }
// function displayMessage() {
//     console.log("Display Message")
// }

// getMessage("Get Message", displayMessage)


// // Promises
// let promise = new Promise(function (resolve, reject) {
//     setTimeout(() => resolve("Run Before"), 1000)
// });

// promise.then
//     (result => {
//         console.log(result)
//         GetAfter()
//     },
//         error => console.log(error)
//     )



// function GetAfter() {
//     console.log("After");
// }

//async await
// function Clown() {
//     return new Promise(resolve => {
//         setTimeout(()=> 
//             {resolve("Clown")
//             },2000)
//         }
//     )
// }

// async function msg(){
//     const mssg = await Clown()
//     console.log("Message:", mssg)
//     getResult()
// }

// msg()

// function getResult(){
//     console.log("Execute After")
// }

// http server 
// const http = require("http")

// const hostname = '127.0.0.1'
// const port = 3000;

// const server = http.createServer((req, res) => {
//     res.writeHead = (200, { 'Content-Type': 'text/plain' })  //1 statement instead of 2
//     // res.statusCode=200;
//     // res.setHeader=('Content-Type','text/plain');
//     res.end("Welcome to HTTP server")
// })

// server.listen(port, hostname, () => {
//     console.log(`Server Running on http://${hostname}:${port}/`);
// })

//making http request
const http = require("http")

http.get(`http://api.open-notify.org/astros.json`, resp => {
    let data = '';
    resp.on(`data`, chunk => {
        data += chunk
    });


    resp.on(`end`, () => {
        let jsondata = JSON.parse(data)
        console.log(jsondata)
    });
})