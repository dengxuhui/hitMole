/*
* name;
*/
var MoleItem = (function () {
    function MoleItem(x,y) {
        this.render = new MoleItemUI();
        this.x = x;
        this.y = y;
        this.render.imgMask.skin = "ui/mask_" + x + "_" + y + ".png";                 
        
        this.itemType = this.getRandomType();
    }

    MoleItem.prototype.initRenderPos = function(){
        var mainMgr = UICenter.instance.getManager(UI.Main);
        if(mainMgr == null || mainMgr.isOpened){
            var data = mainMgr.getData(MainUIData);
            data.getPosData(this.x,this.y);
        }
        this.render.pos();
    };

    /**
     * 获取随机类型
     */
    MoleItem.prototype.getRandomType = function(){
        return Math.random() > 0.5 ? MoleItem.TYPE_ENEMY : MoleItem.TYPE_FRIEND;
    }

    /**
     * 加分类型
     */
    MoleItem.TYPE_FRIEND = 0;
    /**
     * 减分类型
     */
    MoleItem.TYPE_ENEMY = 1;

    MoleItem.prototype.show = function(){
        //
        this.itemType = this.getRandomType();        
    };
    return MoleItem;
}());