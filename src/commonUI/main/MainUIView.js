/*
* name;
*/
var MainUIView = (function (_super) {
    function MainUIView() {
        MainUIView.super(this);    
        this._ui = new MainUI();    
    }
    Laya.class(MainUIView,"MainUIView",_super);
    MainUIView.prototype.onShow = function(){
        manager.LayerManager.addToLayer(this._ui);
    };
    MainUIView.prototype.onHide = function(){
        manager.LayerManager.removeToLayer(this._ui);
    };

    return MainUIView;
}(BaseUIView));