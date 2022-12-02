const argv = require('yargs')
            .option('b', {
                alias:'base',
                type: 'number',
                demandOption: true,
                describe: 'Toma la base para hacer la tabla'
            })
            .option('l', {
                alias: 'listar',
                type: 'boolean',
                default: false,
                describe: 'indica si quiere mostrar la tabla por pantalla'
            })
            .option('h',{
                alias: 'hasta',
                type: 'number',
                default: 10,
                demandOption: false,
                describe: 'Hasta donde realizar la tabla'
            })
            .check((argv,options)=>{
                if(isNaN(argv.b)){
                    throw 'La base tiene que ser de tipo numerica';
                }
                return true;
            })
            .argv;

module.exports = argv;