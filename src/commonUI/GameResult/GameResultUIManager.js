/*
* name;
*/
var GameResultUIManager = (function (_super) {
    function GameResultUIManager() {
        GameResultUIManager.__super.call(this);
        this.addControl(GameResultUIControl);
        this.addView(GameResultUIView);
    }
    Laya.class(GameResultUIManager,"GameResultUIManager",_super);
    return GameResultUIManager;
}(BaseUIManager));