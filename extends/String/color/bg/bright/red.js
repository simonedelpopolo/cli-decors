export default String.prototype.b_bg_red = function(){
    return `\x1b[41;1m${ this }\x1b[0m`
}
