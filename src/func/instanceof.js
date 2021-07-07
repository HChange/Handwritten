function _instanceof(left,right){
    let leftPrototype = left.__proto__;
    const rightPrototype = right.prototype;
    while(true){
        if(leftPrototype === null) return false;
        if(leftPrototype === rightPrototype) return true;
        leftPrototype = leftPrototype.__proto__;
    }
}