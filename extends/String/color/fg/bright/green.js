export default String.prototype.b_green = function(){
    return `\x1b[32;1m${ this }\x1b[0m`
}
