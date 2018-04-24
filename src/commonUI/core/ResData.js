/*
* name;
*/
var ResData = (function () {
    function ResData(url,resType) {
        this._url = url;
        this._resType = resType;
    }
    var _proto = ResData.prototype;
    Object.defineProperty(ResData.prototype,"url",{
        get:function(){
            return this._url;
        },
        enumerable:true,
        configurable:true
    });
    Object.defineProperty(ResData.prototype,"_resType",{
        get:function(){
            return this._resType;
        },
        enumerable:true,
        configurable:true
    });
    return ResData;
}());