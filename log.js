// var log = {
//     info: "hello"
// }

// console.log(log.info)

// var log = {
//     info: ["1", "2", "3"]
// }
// console.log(log.info)

// var log = {
//     info: function(info){
//         console.log('Info: ' + info)
//     }
// }

// log.info("some info")

// var log = {
//     info: function(info){
//         console.log('Info: ' + info)
//     },
//     warning: function(warning){
//         console.log('Warning:' + warning)
//     },
//     error: function(error){
//         console.log('Error:' + error)
//     }
// }

// log.info("some info");
// log.warning('this is a warning');
// log.error('this is an error');

// var msg = "Hello Sam";

// module.exports = msg;

// module.exports.SimpleMessage = "Hello Message";


// ES6
// var log = {
//     info: (info)=>{
//         console.log(`Info: ${info}`)
//     },
//     warning: (warning)=>{
//         console.log(`Warning: ${warning}`)
//     },
//     error: (error)=>{
//         console.log(`Error: ${error}`)
//     }
// }

// module.exports = log;

// log.info("some info");
// log.warning('this is a warning');
// log.error('this is an error');

module.exports = function(msg) {
    console.log(msg)
}