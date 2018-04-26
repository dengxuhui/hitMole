/*
* name;
*/
var MainUIControl = (function (_super) {
    function MainUIControl() {
        MainUIControl.__super.call(this);
        /** 
         * 一局游戏时间
        */
        MainUIControl.MAX_TIME = 2;
    }
    Laya.class(MainUIControl, "MainUIControl", _super);


    MainUIControl.prototype.onShow = function () {
        var openParam = this._dataCenter.getOpenParam();
        var view = this._viewCenter.getView(MainUIView);
        if (openParam == null || view == null) {
            console.assert(true, "主界面UI打开参数或界面为空");
            return;
        }
        if (openParam.isNewGame) {
            this.startGame();
        }
    };

    MainUIControl.prototype.onOpenAgain = function () {
        var openParam = this._dataCenter.getOpenParam();
        if (openParam.isNewGame) {
            this.startGame();
        }
    };

    MainUIControl.prototype.onHide = function () {
        if (this.hammer != null) {
            this.hammer.destory();
            this.hammer = null;
        }
    };

    /**
     * 开始游戏
     */
    MainUIControl.prototype.startGame = function () {
        this.hammer = new Hammer();
        var view = this._viewCenter.getView(MainUIView);
        view.ui.addChild(this.hammer);
        this.hammer.start();

        view.ui.progressTime.value = 1;
        Laya.timer.loop(1000, this, this.onTimer);
    };

    /** 
     * 计时器回调 倒计时
    */
    MainUIControl.prototype.onTimer = function () {
        var view = this._viewCenter.getView(MainUIView);
        if (view.ui.progressTime.value > 0) {
            if (view.ui.progressTime.value > 1 / MainUIControl.MAX_TIME) {
                view.ui.progressTime.value -= 1 / MainUIControl.MAX_TIME;
            }
            else {
                view.ui.progressTime.value = 0;
            }
        }
        else {
            this.onGameOver();
        }

    };

    /**
     * 游戏结束
     */
    MainUIControl.prototype.onGameOver = function () {
        console.log("游戏结束");
        Laya.timer.clear(this, this.onTimer);
        this.hammer.stop();

        UICenter.instance.openUI(UI.GameResult);
    };
    return MainUIControl;
}(BaseUIControl));