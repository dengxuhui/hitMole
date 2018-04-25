/*
* name;
*/
var MainUIControl = (function (_super) {
    function MainUIControl() {
        MainUIControl.__super.call(this);
    }
    Laya.class(MainUIControl,"MainUIControl",_super);


    MainUIControl.prototype.onShow = function(){
        var openParam = this._dataCenter.getOpenParam();
        var view = this._viewCenter.getView(MainUIView);
        if(openParam == null || view == null){
            console.assert(true,"主界面UI打开参数或界面为空");
            return;            
        }    
        this.startGame();    
    };
    MainUIControl.prototype.onHide = function(){
        
    };

    /**
     * 开始游戏
     */
    MainUIControl.prototype.startGame = function(){
        this.hammer = new Hammer();
        var view = this._viewCenter.getView(MainUIView);
        view.ui.addChild(this.hammer);
        this.hammer.start();
    }; 
    return MainUIControl;
}(BaseUIControl));