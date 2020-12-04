const { main } = require('./ipna');
main()
  .then(res => console.log(res))
  .catch(err => console.log(err))
