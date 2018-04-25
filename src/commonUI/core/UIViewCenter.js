var Dictionary = laya.utils.Dictionary;
/*
* name;
*/
var UIViewCenter = (function () {
    function UIViewCenter() {
        this._views = new Dictionary();
    }
    var _proto = UIViewCenter.prototype;
    _proto.destory = function(){
        if(this._views != null){
            for(var i = 0;i < this._views.values.length;i++){
                var view = this._views.values[i];
                if(view != null){
                    view.destory();
                    view = null;
                }
            }
            this._views.clear();
            this._views = null;
        }
    };
    _proto.onInit = function(){
        var i = 0;
        for(i = 0;i < this._views.values.length;i++){
            var viewClass = this._views.keys[i];
            this._views.set(viewClass,new viewClass());
        }
        for(i = 0;i < this._views.values.length;i++){
            var view = this._views.values[i];
            if(view != null){
                view.onInit();
            }
        }
    };
    _proto.onShow = function(){
        for(var i = 0;i < this._views.values.length;i++){
            var view = this._views.values[i];
            if(view != null){
                view.onShow();
            }
        }
    };
    _proto.onHide = function(){
        for(var i = 0;i < this._views.values.length;i++){
            var view = this._views.values[i];
            if(view != null){
                view.onHide();
                view.destory();
                this._views.set(this._views.keys[i],null);
            }
        }
    };
    _proto.addView = function(className){
        if(className == null){
            return;
        }
        this._views.set(className,null);
    };
    _proto.getView = function(className){
        if(this._views == null){
            return null;
        }
        return this._views.get(className);
    };
    _proto.isExist = function(){
        if(this._views == null){
            return false;
        }
        return this._views.indexOf(className) != -1;
    };
    _proto.getViewByIndex = function(index){
        return this._views.values[index];
    };
    Object.defineProperty(UIViewCenter.prototype,"viewLength",{
        get:function(){
            return this._views.values.length;
        },
        enumerable:true,
        configurable:true
    });
    return UIViewCenter;
}());