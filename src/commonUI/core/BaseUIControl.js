/*
* name;
*/
var BaseUIControl = (function () {
    function BaseUIControl() {
        /**
         * 数据集合
         */
        this._dataCenter = null;
        this._viewCenter = null;
    }
    var _proto = BaseUIControl.prototype;
    _proto.init = function(dataCenter,viewCenter){
        this._dataCenter = dataCenter;
        this._viewCenter = viewCenter;         
    };
    _proto.onInit = function(){

    };
    _proto.onShow = function(){

    };
    _proto.onOpenAgain = function(){

    };
    _proto.onHide = function(){

    };
    _proto.destory = function(){
        this._viewCenter = null;
        this._dataCenter = null;
    }
    return BaseUIControl;
}());