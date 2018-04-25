/*
* name;
*/
var GameRuleUIControl = (function (_super) {
    function GameRuleUIControl() {
        GameRuleUIControl.__super.call(this);
    }
    Laya.class(GameRuleUIControl,"GameRuleUIControl",_super);
    GameRuleUIControl.prototype.onShow = function(){
        var view = this._viewCenter.getView(GameRuleUIView);
        if(view == null){
            return;
        }                
        view.ui.btnStart.clickHandler = Laya.Handler.create(this,this.onStartClick,null,false);
    };
    GameRuleUIControl.prototype.onStartClick = function(){
        var view = this._viewCenter.getView(GameRuleUIView);
        if(view == null){
            return;
        }
        view.ui.btnStart.enable = false;
        var openParam = UICenter.instance.getOpenParam(UI.Main);
        if(openParam != null){
            openParam.isNewGame = true;
        }
        UICenter.instance.openUI(UI.Main);        
        UICenter.instance.closeUI(UI.GameRule);
    };
    GameRuleUIControl.prototype.onHide =function(){

    };    
    return GameRuleUIControl;
}(BaseUIControl));