export default String.prototype.b_magenta = function(){
    return `\u001b[35;1m${ this }\x1b[0m`
}
