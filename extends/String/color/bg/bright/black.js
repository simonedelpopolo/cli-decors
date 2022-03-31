export default String.prototype.b_bg_black = function(){
    return `\u001b[40;1m${ this }\x1b[0m`
}
