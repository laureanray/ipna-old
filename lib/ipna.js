const chalk = require('chalk')
const log = console.log

const { clientV1 } = require('./http-client')

const yargs = require('yargs')

const argv = yargs
    .command({
        command: 'add',
        describe: 'Adding command',
        handler: argv => {
            console.log('Adding notes')
        }
    })
    .argv

console.log(argv)
log('Searching for package name similar to ' + chalk.redBright(argv._[0]))
