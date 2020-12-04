const chalk = require('chalk')
const log = console.log
const { clientV1 } = require('./http-client')
const yargs = require('yargs')


const main = async () => {
  const argv = yargs
    .command({
      command: 'add',
      describe: 'Adding command',
      handler: argv => {
        console.log('Adding notes')
      }
    })
    .argv

  let query = argv._[0];
  log('Searching for package name similar to ' + chalk.redBright(query))

  const searchResults = await search(query);
  console.log(searchResults);
}

const search = async (query) => {
  try {
    const response = await clientV1(query);
    return response.body;
  } catch (err) {
    return err.message.body;
  }
}

module.exports = { main };