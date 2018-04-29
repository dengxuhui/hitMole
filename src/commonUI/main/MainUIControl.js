/*
* name;
*/
var MainUIControl = (function (_super) {
    function MainUIControl() {
        MainUIControl.__super.call(this);
        /** 
         * 一局游戏时间
        */
        MainUIControl.MAX_TIME = 20;
    }
    Laya.class(MainUIControl, "MainUIControl", _super);

    MainUIControl.prototype.onShow = function () {
        var openParam = this._dataCenter.getOpenParam();
        var view = this._viewCenter.getView(MainUIView);
        if (openParam == null || view == null) {
            console.assert(true, "主界面UI打开参数或界面为空");
            return;
        }
        this.scoreControl = new ScoreControler(view.ui.viewScore);
        if (openParam.isStartingGame) {
            openParam.isStartingGame = false;
            this.startGame();
        }
    };

    MainUIControl.prototype.onOpenAgain = function () {
        var openParam = this._dataCenter.getOpenParam();
        var data = this._dataCenter.getData(MainUIData);        
        if (openParam.isStartingGame) {
            openParam.isStartingGame = false;
            data.resetScore();
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

        this.stateDic = new Laya.Dictionary();
        for (var x = 0; x < 3; x++) {
            for (var y = 0; y < 3; y++) {
                this.stateDic.set(x + "_" + y, false);
            }
        }
        view.ui.progressTime.value = 1;
        Laya.timer.loop(1000, this, this.onTimer);
        Laya.timer.loop(2000, this, this.randomMoleShow);
    };

    /**
     * 随机出现地鼠
     * 出现规则：
     *  1.最大同时出现个数3个
     *  2.出现的地鼠随机为减分地鼠  或  加分地鼠
     */
    MainUIControl.prototype.randomMoleShow = function () {        
        for (var i = 0; i < 3; i++) {
            var x = Math.floor(Math.random() * 3);
            var y = Math.floor(Math.random() * 3);
            var state = this.stateDic.get(x + "_" + y);
            if (!state){
                var mole = new MoleItem(x,y);
                mole.show(this.onMoleActionOver);
                this.stateDic.set(x + "_" + y,true);
            }
        }
    };

    MainUIControl.prototype.onMoleActionOver = function (score,x,y) {
        var uiMgr = UICenter.instance.getManager(UI.Main);
        var dataCls = uiMgr.getData(MainUIData);
        var control = uiMgr.getControl(MainUIControl);
        if (score != 0) {            
            dataCls.updateScore(score);
        }
        control.stateDic.set(x + "_" + y,false);
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
        Laya.timer.clearAll(this);
        this.hammer.stop();

        UICenter.instance.openUI(UI.GameResult);
    };
    return MainUIControl;
}(BaseUIControl));