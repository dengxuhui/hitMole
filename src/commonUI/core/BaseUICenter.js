/*
* name;
*/
var BaseUICenter = (function () {
    function BaseUICenter() {
        this._managers = new laya.utils.Dictionary();
        this._openingUI = new Array();
    }
    var _proto = BaseUICenter.prototype;
    _proto.addManager = function(id,className){
        if(className == null){
            return;
        }
        var manager = new className();
        manager.id = id;      
        this._managers.set(id,manager);
    };
    _proto.getManager = function(id){
        if(this._managers == null){
            return null;
        }
        return this._managers.get(id);
    };
    _proto.isExist = function(id){
        if(this._managers == null){
            return false;
        }
        return this._managers.indexOf(id) != -1;
    };
    _proto.getOpenParam = function(id){
        var manager = this.getManager(id);
        if(manager != null){
            return manager.getOpenParam();
        }
        return null;
    };
    _proto.isOpen = function(id){
        var manager = this.getManager(id);
        if(manager != null){
            return manager.isOpened;
        }
        return true;
    };
    _proto.openUI = function(id){
        var manager = this.getManager(id);
        if(manager != null){
            manager.open(this.onUIinitCallback);
        }
    };
    _proto.closeUI = function(id){
        var manager = this.getManager(id);
        if(manager != null){
            manager.close();
            var index = this._openingUI.indexOf(id);
            if(index != -1){
                this._openingUI.splice(index,1);
            }
        }
    };
    _proto.onUIinitCallback = function(id){
        if(this._openingUI != null){
            this._openingUI.push(id);
        }
        else{
            this._openingUI = new Array();
            this._openingUI.push(id);
        }
    };
    _proto.destory = function(){
        if(this._managers != null){
            for(var i = 0;i < this._managers.values.length;i++){
                var manager = this._managers.values[i];
                if(manager != null){
                    manager.destory();
                    manager = null;
                }
            }
            this._managers.clear();
            this._managers = null;
        }
        if(this._openingUI != null){
            this._openingUI.length = 0;
        }
    };
    return BaseUICenter;
}());