/*
* name;
*/
var MainUIView = (function (_super) {
    function MainUIView() {        
        MainUIView.__super.call(this);    
        this.ui = new MainUI();    
    }   
    Laya.class(MainUIView,"MainUIView",_super); 
    MainUIView.prototype.onShow = function(){
        LayerManager.instance.addToLayer(this.ui);        
    };
    MainUIView.prototype.onHide = function(){
        LayerManager.getInstance.removeToLayer(this.ui);
    };
    return MainUIView;
}(BaseUIView));