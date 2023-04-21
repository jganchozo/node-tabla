const argv = require('yargs')
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    default: 12,
                    describe: 'Limite para generar la tabla'
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla en la consola'
                })
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'
                })
                .check(({base, b}, options) => {
                    if (isNaN(b)) {
                        throw 'La base tiene que ser un numero';
                    }
                    return true;
                })
                .argv;

module.exports = argv;