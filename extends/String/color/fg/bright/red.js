export default String.prototype.b_red = function(){
    return `\x1b[31;1m${ this }\x1b[0m`
}
