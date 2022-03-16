// import validator from 'validator'
// import chalk from 'chalk'
const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')

const { default: isEmail } = require('validator/lib/isEmail')
const getNotes = require('./notes.js')
const { argv } = require('yargs')
// const add = require('./utils.js')
// const fs = require('fs')
// fs.writeFileSync('notes.txt','Well this is for writing to a new file or overwriting one.')
// fs.appendFileSync('notes.txt','I wonder if this goes on the next line or not.')
// console.log(validator.isEmail('brianofmoore@gmail.com'))
// console.log(chalk.blue.inverse.bold('hello there'))

yargs.command({
    command:'add',
    describe: 'Add a new note',
    builder: {
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function () {
        console.log('Title: ' + argv.title)
        console.log('Body: ' + argv.body)
        
    }
})

yargs.command({
    command:'remove',
    describe: 'remove a note',
    handler: function () {
        console.log('Removing the note!')
    }
})

yargs.command({
    command:'list',
    describe: 'list notes',
    handler: function () {
        console.log('Listing the notes!')
    }
})

yargs.command({
    command:'read',
    describe: 'read a note',
    handler: function () {
        console.log('Reading the note!')
    }
})

yargs.parse()