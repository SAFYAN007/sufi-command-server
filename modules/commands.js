// appSetup.js

let sufiCommands = {};

/**
 * Add new command.
 * @param {string} name - Name or title of the command.
 * @param {function(config)} fn - The function to execute when the command is called.
 * @param {string} title - The title of the command (optional, defaults to name).
 * @typedef {Object} config
 * @property {function} reOpenMain - Description of kotak property.
 */
export function addCommand(name, fn, title) {
    sufiCommands[name] = {
        title: title ? title : name,
        fn: fn,
    };
}
export { sufiCommands };