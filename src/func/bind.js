/**
 * @desc 实现bind
 */
Function.prototype.myBind = function(context){
    if(typeof this!=='function'){
        throw new TypeError('Error')
    }
    const _this =this
    const args = [...arguments].slice(1)
    return function F(){
        if(this instanceof F){
            return new _this(...args,...arguments)
        }
        return _this.apply(context,args.concat(...arguments))
    }
}
