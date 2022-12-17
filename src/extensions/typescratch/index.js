const formatMessage = require('format-message');
const BlockType = require('../../extension-support/block-type');
const ArgumentType = require('../../extension-support/argument-type');
// const Cast = require('../../util/cast');

//const blockIconURI = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAFACAMAAAD6TlWYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAPUExURQAAAP+xNQDiGgCU/wAAAJEQGGoAAAAFdFJOU/////8A+7YOUwAAAAlwSFlzAAAOwwAADsMBx2+oZAAABA5JREFUeF7t0EtuW0EUA9F8vP81Z8JRAwzbLuk5COoMBb1LdP34EGJAyICQASEDQgaEDAgZEDIgZEDIgJABIQNCBoQMCBkQMiBkQMiAkAEhA0IGhAwIGRAyIGRAyICQASEDQgaEDAgZEHos4M+HZfbtDAgZEDIgZEDIgJABIQNCBoQMCBkQMiBkQMiAkAEhA0IGhAwIGRAyIGRAyICQASEDQgaEDAgZEDIgZEDIgJABIQNCBoQMCBkQMiBkQMiAkAEhA0IGhAwIGRAyIGRAyICQASEDQgaEDAgZEDIgZEDIgJABIQNCBoQMCBkQMiBkQMiAkAEhA0IGhAwIGRAyIGRAyICQASEDQgaEDAgZEDIgZEDIgJABIQNCBoQMCBkQMiBkQMiAkAEhA0IGhAwIGRAyIGRAyICQASEDQgaEDAgZEDIgZEDIgJABIQNCBoQMCBkQMiBkQMiAkAEhA0KPBfxfGRAyIGRAyICQASEDQgaEDAgZEDIgZEDIgJABIQNCBoQMCBkQMiBkQMiAkAEhA0IGhAwIGRAyIGRAyICQASEDQgaEZsBfh/z8z/r9SfnsywwIGRAyIGRAyICQASEDQp8OeMrfvk06vEzOXjPgIWevGfCQs9cMeMjZawY85Ow1Ax5y9poBDzl7zYCHnL2GA57y2dvlvW+TmcmARWYmAxaZmQxYZGYyYJGZyYBFZiYDFpmZDFhkZnp5wFPOvFze+TaZmQxYZGYyYJGZyYBFZiYDFpmZDFhkZjJgkZnJgEVmprcHPOXsl+V9j8lsZcAhs5UBh8xWBhwyWxlwyGxlwCGzlQGHzFYGHDJbPR7wlJlreddjMlsZcMhsZcAhs5UBh8xWBhwyWxlwyGxlwCGzlQGHzFbfHvCU2SrvekxmKwMOma0MOGS2MuCQ2cqAQ2YrAw6ZrQw4ZLYy4JDZyoBDZisDDpmtDDhktjLgkNnKgENmKwMOma0MOGS2MuCQ2erbA2bmWt71mMxWBhwyWxlwyGxlwCGzlQGHzFYGHDJbGXDIbGXAIbPV4wFz9svyrsdktjLgkNnKgENmKwMOma0MOGS2MuCQ2cqAQ2YrAw6Zrd4eMGdeLu97m8xMBiwyMxmwyMxkwCIzkwGLzEwGLDIzGbDIzGTAIjPTywPms7fLO98mM5MBi8xMBiwyMxmwyMxkwCIzkwGLzEwGLDIzGbDIzIQD5m/fJu99mZy9ZsBDzl4z4CFnrxnwkLPXDHjI2WsGPOTsNQMecvaaAQ85e+3TAfPzPysdruWzLzMgZEDIgJABIQNCBoQMCM2A+jsDQgaEDAgZEDIgZEDIgJABIQNCBoQMCBkQMiBkQMiAkAEhA0IGhAwIGRAyIGRAyICQASEDQgaEDAgZEDIgZEDIgMjHxx+IPExM0h8siAAAAABJRU5ErkJggg=="

/**
 * Class for Proto blocks
 * @constructor
 */
class typeScratch {
    constructor(runtime) {
        /**
         * The runtime instantiating this block package.
         * @type {Runtime}
         */
        this.runtime = runtime;
    }

    /**
     * @returns {object} metadata for this extension and its blocks.
     */
    getInfo() {
        return {
            id: 'typescratch',
            name: formatMessage({
                id: 'typeScratch',
                defaultMessage: 'Typescratch',
                description: 'A Scratch extension for using datatypes'
            }),
            //blockIconURI: blockIconURI,
            color1: '#3178c6',
            color2: '#235a97',
            blocks: [
                {
                    opcode: 'getType',
                    text: formatMessage({
                        id: 'typescratch.blocks.getType',
                        default: 'type [TYPE]',
                        description: 'Get a type.'
                    }),
                    disableMonitor: true,
                    blockType: BlockType.REPORTER,
                    arguments: {
                        TYPE: {
                            type: ArgumentType.STRING,
                            defaultValue: "Number",
                            menu: "types"
                        },
                    }
                },
                {
                    opcode: 'typeof',
                    text: formatMessage({
                        id: 'typescratch.blocks.typeof',
                        default: 'typeof [STRING]',
                        description: 'Get a type.'
                    }),
                    disableMonitor: true,
                    blockType: BlockType.REPORTER,
                    arguments: {
                        STRING: {
                            type: ArgumentType.STRING,
                            defaultValue: "string",
                        },
                    }
                },
                {
                    opcode: 'checktype',
                    text: formatMessage({
                        id: 'typescratch.blocks.checktype',
                        default: 'is [STRING] a valid [TYPE]?',
                        description: 'Check if a string is a certain type.'
                    }),
                    disableMonitor: true,
                    blockType: BlockType.BOOLEAN,
                    arguments: {
                        STRING: {
                            type: ArgumentType.STRING,
                            defaultValue: "string",
                        },
                        TYPE: {
                            type: ArgumentType.STRING,
                            defaultValue: "string",
                        }
                    }
                }
            ],
            menus: {
                types: {
                    acceptReporters: false,
                    items: 'getTypeNames'
                }
            }
        };
    }

    types = {
        "Number": {
            fixed: true,
            show: true,
            compare: (value) => {return Number(value) == value}
        },
        "String": {
            fixed: true,
            show: true,
            compare: (value) => {return Number(value) != value && String(value) == value}
        },
        "Null": {
            fixed: true,
            show: true,
            compare: (value) => {return value !== null || value !== undefined}
        },
        "Unknown": {
            fixed: true,
            show: false,
            compare: (value) => {return false}
        },
    }

    getTypeNames() {
        return Object.keys(this.types).filter((value) => this.types[value].show === true)
    }

    getType(args, util) {
        return this.types[String(args.TYPE)] !== undefined ? String(args.TYPE) : "Unknown"
    }

    typeof(args, util) {
        for (const name of Object.keys(this.types)) {
            if (this.types[name].compare(args.STRING) == true) {
                return name
            }
        }
        return "Unknown"
    }
    checktype(args, util) {
        let stringType = typeof(args.STRING)
        if (stringType == args.TYPE) {
            return true;
        } else {
            return false;
        }
    }
}

module.exports = typeScratch;
