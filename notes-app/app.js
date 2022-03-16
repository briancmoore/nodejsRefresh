// import validator from 'validator'
const validator = require('validator')
const chalk = require('chalk')
// import chalk from 'chalk'

const { default: isEmail } = require('validator/lib/isEmail')
const getNotes = require('./notes.js')
// const add = require('./utils.js')
// const fs = require('fs')
// fs.writeFileSync('notes.txt','Well this is for writing to a new file or overwriting one.')
// fs.appendFileSync('notes.txt','I wonder if this goes on the next line or not.')

console.log(validator.isEmail('brianofmoore@gmail.com'))
console.log(chalk.blue.inverse.bold('hello there'))