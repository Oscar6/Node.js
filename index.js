// const http = require('http');

// var dt = new Date();

// var server = http.createServer((req, res)=>{

//     res.writeHead(200, {'Content-Type': 'text/html'});
    
//     res.write("Current time and date" + dt.toDateString());

//     res.end();

// })

// server.listen(3000)

// console.log("listening to server on port 3000")

// deletes file
// const fs = require('fs');

// fs.unlink('/test5.js', (err)=>{
//     if(err) throw err;
// })

const fs = require('fs');

var fileName = 'ourFile.txt'

// fs.readFile('./test.txt', (error, buffer)=>{
//     if(error){
//         console.log(error.message);
//         return;
//     }

//     console.log(`File Data: ${buffer.toString()}`)
// })

// fs.writeFile('ourFile.txt', "Projects were good", (error)=>{
//     if(error){
//         console.log(error.message);
//         return;
//     }
//     console.log(`File Saved to: ${fileName}`)
// })

fs.readFile(filename, function (error, buffer) {
    if (error) {
      console.error(error.message);
      return;
    }
    var contents = buffer.toString();
    var backwards = contents.split('').reverse().join('');
    fs.writeFile(filename, backwards, function (error) {
      if (error) {
        console.error(error.message);
        return;
      }
      console.log('File Save: ', filename);
    });
});