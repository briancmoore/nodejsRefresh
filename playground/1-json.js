const fs = require('fs')

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holida'
}

const bookJSON = JSON.stringify(book)
console.log(bookJSON)
fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const parsedData = JSON.parse(dataJSON)
// console.log(parsedData.author)