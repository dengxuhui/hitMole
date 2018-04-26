/*
* name;
*/
var GameResultUIControl = (function (_super) {
    function GameResultUIControl() {
        GameResultUIControl.__super.call(this);
    }
    Laya.class(GameResultUIControl,"GameResultUIControl",_super);

    /** 
     * 显示时
    */
    GameResultUIControl.prototype.onShow = function(){
        var view = this._viewCenter.getView(GameResultUIView);
        if(view != null){
            view.ui.btnRestart.clickHandler = Laya.Handler.create(this,this.onReStartClick,null,false);
        }
    };
    
    /** 
     * 点击重新开始按钮
    */
    GameResultUIControl.prototype.onReStartClick = function(){
        var openParam = UICenter.instance.getOpenParam(UI.Main);
        openParam.isNewGame = true;

        UICenter.instance.openUI(UI.Main);
        UICenter.instance.closeUI(UI.GameResult);
    };

    /**
     * 隐藏时
     */
    GameResultUIControl.prototype.onHide = function(){

    };

    return GameResultUIControl;
}(BaseUIControl));