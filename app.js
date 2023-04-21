const { crearArchivo, crearArchivoAsync } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

//console.log(process.argv);

const { base, b, listar, l, hasta, h } = argv;
//console.log('base: yargs', b, l);

//const [ , , arg3 = 'base=3'] = process.argv;
// const [, base] = arg3.split('=');

crearArchivoAsync(base, listar, hasta)
    .then(filename => console.log(filename.rainbow, 'creado'.green))
    .catch(err => console.error(err));