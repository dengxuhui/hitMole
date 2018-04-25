/*
* name;
*/
var GameRuleUIManager = (function (_super) {
    function GameRuleUIManager() {
        GameRuleUIManager.__super.call(this);
        this.addControl(GameRuleUIControl);
        this.addView(GameRuleUIView);        
    }
    Laya.class(GameRuleUIManager,"GameRuleUIManager",_super);
    return GameRuleUIManager;
}(BaseUIManager));