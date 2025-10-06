const fs = require('fs');
// fs.writeFileSync('one.txt', "The data in ")
// const Filename = 'one.txt'
// fs.readFile(Filename, 'utf8', (err, data) => {
//     if (err) {
//         console.log('err', err)

//     }
//     console.log("data", data)
// })
// const asyncdata = fs.readFileSync(Filename, 'utf8')
// console.log(asyncdata, "asyncdata")




// // Task 2 — Append Data to a File
// console.log('Task 2 — Append Data to a File')
// fs.appendFileSync('one.txt', '\n the new text added ccheck it ');

// console.log('Task 3 — Create and Read JSON File')
const user = [
    { "name": "Tharun", "age": 22 },
    { "name": "Pranav", "age": 24 }
]

// fs.writeFileSync('user.txt', JSON.stringify(user, null, 2))
// const userInfo = fs.readFileSync('user.txt', 'utf8')
// console.log(userInfo)
console.log('Task 4 — Add a New User to JSON')
const nwuser = user.push({ "name": "Ravi Tharun", "age": 22 })
const data=fs.appendFileSync('user.txt',JSON.stringify(user,null,2))

console.log(data)