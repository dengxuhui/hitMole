/*
* name;
*/
var GameResultUIView = (function (_super) {
    function GameResultUIView() {
        GameResultUIView.__super.call(this);
        this.ui = new GameResultUI();
    }
    Laya.class(GameResultUIView, "GameResultUIView", _super);

    GameResultUIView.prototype.onShow = function () {
        var mainUIMgr = UICenter.instance.getManager(UI.Main);
        if (mainUIMgr != null && mainUIMgr.isOpened) {
            var view = mainUIMgr.getView(MainUIView);
            if (view != null) {
                view.ui.addChild(this.ui);
                this.ui.pos((view.ui.width - this.ui.width) / 2, (view.ui.height - this.ui.height) / 2);
            }
        }
    };
    GameResultUIView.prototype.onHide = function () {
        var mainUIMgr = UICenter.instance.getManager(UI.Main);
        if (mainUIMgr != null && mainUIMgr.isOpened) {
            var view = mainUIMgr.getView(MainUIView);
            if (view != null) {
                view.ui.removeChild(this.ui);
            }
        }
        if (this.ui != null) {           
            this.ui = null;
        }
    };
    return GameResultUIView;
}(BaseUIView));