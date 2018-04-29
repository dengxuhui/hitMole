/*
* name;
*/
var MoleItem = (function () {
    function MoleItem(x, y) {
        this.render = new MoleItemUI();
        this.x = x;
        this.y = y;
        this.init();
    }

    MoleItem.prototype.init = function () {
        this.render.imgMask.skin = "ui/mask_" + this.x + "_" + this.y + ".png";
        this.initRenderPos();

        this.itemType = this.getRandomType();
        this.isHit = false;
        this.isUping = true;

        this.render.imgScoreNum.visible = this.isHit;
        this.render.imgNormal.visible = !this.isHit;
        this.render.imgHit.visible = this.isHit;
        this.render.imgNormal.skin = "ui/mouse_normal_" + this.itemType + ".png";
        this.render.imgHit.skin = "ui/mouse_hit_" + this.itemType + ".png";
        this.render.imgScoreNum.skin = "ui/score_" + this.itemType + ".png";
        this.render.imgNormal.y = MoleItem.MAX_SHRINK;

        this.render.on(Laya.Event.CLICK, this, this.onClick);
    };

    MoleItem.prototype.onClick = function () {
        this.isHit = true;
        this.isUping = false;
        this.render.imgNormal.visible = !this.isHit;
        this.render.imgHit.visible = this.isHit;

        Laya.Tween.clearAll(this.render.imgNormal);
        Laya.Tween.to(this.render.imgHit, { y: MoleItem.MAX_SHRINK }, 500, Laya.Ease.backIn,
            Laya.Handler.create(this, this.onActionOver));
    };

    MoleItem.prototype.onActionOver = function () {
        //派发完成事件
        var addScoreNum = 0;
        if (this.isHit) {
            if (this.itemType == MoleItem.TYPE_ENEMY) {
                addScoreNum = 100;
            }
            else {
                addScoreNum = -100;
            }
        }

        if (this.callBack != null) {
            this.callBack.call(this,addScoreNum, this.x, this.y);
        }
        laya.utils.Tween.clearAll(this.render);
        if (this.render != null) {
            if (this.render.parent != null) {
                this.render.parent.removeChild(this.render);
            }            
        }
    };

    MoleItem.prototype.initRenderPos = function () {
        var mainMgr = UICenter.instance.getManager(UI.Main);
        if (mainMgr == null || mainMgr.isOpened) {
            var data = mainMgr.getData(MainUIData);
            var view = mainMgr.getView(MainUIView);
            view.ui.addChild(this.render);
            var str = data.getPosData(this.x, this.y);            
            var posAry = str.split(",");
        }
        this.render.pos(parseInt(posAry[0]), parseInt(posAry[1]));
    };

    /**
     * 获取随机类型
     */
    MoleItem.prototype.getRandomType = function () {
        return Math.random() > 0.3 ? MoleItem.TYPE_ENEMY : MoleItem.TYPE_FRIEND;
    }

    /**
     * 加分类型
     */
    MoleItem.TYPE_FRIEND = 0;
    /**
     * 减分类型
     */
    MoleItem.TYPE_ENEMY = 1;

    /** 
     * 地鼠最大y轴坐标
    */
    MoleItem.MAX_SHRINK = 10;

    MoleItem.prototype.show = function (callBack) {
        this.callBack = callBack;
        Laya.Tween.to(this.render.imgNormal, { y: 0 }, 500, Laya.Ease.backOut, Laya.Handler.create(this, this.stay));
    };

    MoleItem.prototype.stay = function () {
        Laya.timer.once(2000, this, this.hide);
    };

    MoleItem.prototype.hide = function () {
        Laya.Tween.to(this.render.imgNormal, { y: MoleItem.MAX_SHRINK }, 500,
            Laya.Ease.backIn, Laya.Handler.create(this, this.onActionOver));
    };
    return MoleItem;
}());