/*
* name;
*/
var UIDataCenter = (function () {
    function UIDataCenter() {
        this._datas = new laya.utils.Dictionary();
        this._isLoaded = false;
        this._isLoading = false;
        this._isOpened = false;
        this._openParamClass = null;
        this._openParam = null;
    }
    var _proto = UIDataCenter.prototype;
    _proto.setOpenParam = function(className){
        this._openParamClass = className;
    };
    _proto.getOpenParam = function(){
        if(this._openParam == null){
            this._openParam = new this._openParamClass();
        }
        return this._openParam;
    };
    _proto.destory = function(){
        if(this._datas != null){
            for(var i = 0;i < this._datas.values.length;i++){
                var data = this._datas.values[i];
                if(data != null){
                    data.destory();
                    data = null;
                }
            }
            this._datas.clear();
            this._datas = null;
        }
        if(this._openParam != null){
            this._openParam.reset();
            this._openParam = null;
        }
    };
    _proto.onInit = function(){
        for(var i = 0;i < this._datas.keys.length;i++){
            var dataClass = this._datas.keys[i];
            this._datas.set(dataClass,new dataClass());
        }
    };
    _proto.onShow = function(){

    }
    _proto.onHide = function(){
        if(this._datas != null){
            for(var i = 0;i < this._datas.values.length;i++){
                var data = this._datas.values[i];
                if(data != null){
                    data.destory();
                    data = null;
                }
            }
            this._datas.clear();
            this._datas = null;
        }
        if(this._openParam != null){
            this._openParam.reset();
        }
    };
    _proto.addData = function(className){
        if(className == null){
            return;
        }
        this._datas.set(className,null);
    };
    _proto.getData = function(className){
        if(this._datas == null){
            return null;
        }
        return this._datas.get(className);
    };
    _proto.isExist = function(className){
        if(this._datas == null){
            return false;
        }
        return this._datas.indexOf(className) != -1;
    };
    Object.defineProperty(UIDataCenter.prototype,"isLoading",{
        get:function(){
            return this._isLoading;
        },
        set:function(value){
            this._isLoading = value;
        },
        enumerable:true,
        configurable:true
    });
    return UIDataCenter;
}());