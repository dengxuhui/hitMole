/*
* name;
*/
var UIControlCenter = (function () {
    function UIControlCenter(uiMgr,dataCenter,viewCenter) {
        this._uiMgr = uiMgr;
        this._dataCenter = dataCenter;
        this._viewCenter = viewCenter;
        this._controls = new Dictionary();
    }
    var _proto = UIControlCenter.prototype;
    _proto.destory = function(){
        if(this._controls != null){
            for(var i = 0;i < this._controls.values.length;i++){
                var control = this._controls.values[i];
                if(control != null){                    
                    control.destory();
                    control = null;
                }
            }
            this._controls.clear();
            this._controls = null;
        }
        this._viewCenter = null;
        this._dataCenter = null;
        this._ui = null;
    };
    _proto.onInit = function(){
        var control = null;
        var i = 0;
        for(i = 0;i < this._controls.keys.length;i++){
            var controlClass = this._controls.keys[i];
            control = new controlClass();
            control.init(this._dataCenter,this._viewCenter);
            this._controls.set(controlClass,control);            
        }
        for(i = 0;i < this._controls.values.length;i++){
            control = this._controls.values[i];
            if(control != null){
                control.onInit();
            }
        }
    };
    _proto.onShow = function(){
        for(var i = 0;i < this._controls.values.length;i++){
            var control = this._controls.values[i];
            if(control != null){
                control.onShow();
            }
        }
    };
    _proto.onOpenAgain = function(){
        for(var i = 0;i < this._controls.values.length;i++){
            var control = this._controls.values[i];
            if(control != null){
                control.onOpenAgain();
            }
        }
    }
    _proto.onHide = function(){
        for(var i = 0;i < this._controls.values.length;i++){
            var control = this._controls.values[i];
            if(control != null){
                control.onHide();
                control.destory();
                this._controls.set(this._controls.keys[i],null);
            }
        }
    };
    _proto.addControl = function(className){
        if(className == null){
            return;
        }
        this._controls.set(className,null);
    };
    _proto.getControl = function(className){
        if(this._controls == null){
            return null;
        }
        return this._controls.get(className);
    };
    _proto.isExist = function(){
        if(this._controls == null){
            return false;
        }
        return this._controls.indexOf(className) != -1;
    };
    return UIControlCenter;
}());