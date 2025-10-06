console.log('Task 4 — Add a New User to JSON')
const nwuser = user.push({ "name": "Ravi Tharun", "age": 22 })
const data=fs.appendFileSync('user.txt',JSON.stringify(nwuser,null,2))

console.log(data)