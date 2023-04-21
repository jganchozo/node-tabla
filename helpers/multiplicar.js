const fs = require('fs');
var colors = require('colors');

const crearArchivoAsync = async (base = 9, listar, limite) => {

    try {

        let salida = '', consola = '';

        for (let index = 1; index <= limite; index++) {

            salida += `${base} x ${index} = ${base * index}\n`;
            consola += `${colors.blue(base)} ${colors.red('x')} ${colors.yellow(index)} ${colors.gray('=')} ${base * index}\n`;
        }

        if (listar) {
            console.log('====================='.green);
            console.log(`    Tabla del: ${colors.blue(base)} `.green)
            console.log('====================='.green);   
            console.log(consola);
        }

        fs.writeFileSync(`./outputs/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;

    } catch (error) {
        throw error;
    }

}

const crearArchivo = (base = 9) => {

    return new Promise((resolve, reject) => {

        console.log('=====================');
        console.log(`    Tabla del: ${base} `)
        console.log('=====================');

        let salida, consola = '';

        for (let index = 1; index <= 12; index++) {

            salida += `${base} x ${index} = ${base * index}\n`;
            consola += `${base} ${colors.red('x')} ${index} = ${base * index}\n`;
        }

        console.log(consola);

        fs.writeFileSync(`./outputs/tabla-${base}.txt`, salida);

        resolve(`tabla-${base}.txt`);

    });


}

module.exports = {
    crearArchivo,
    crearArchivoAsync
};