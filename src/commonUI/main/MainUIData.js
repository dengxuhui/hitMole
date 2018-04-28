/*
* name;
*/
var MainUIData = (function (_super) {
    MainUIData.UPDATE_SCORE = "mainUI_update_score";
    function MainUIData() {
        MainUIData.__super.call(this);
        this._score = 0;
        this._posData = Laya.loader.getRes("res/conf/additemPosition.json");
        /**事件监听对象 用于派发事件  需要监听该页面的数据使用该对象进行监听 */
        this.eventDispatcher = new laya.events.EventDispatcher();
    }
    Laya.class(MainUIData,"MainUIData",_super);
    /**
     * 重置分数
     */
    MainUIData.prototype.resetScore = function(){
        this.score = 0;
    };
    
    MainUIData.prototype.updateScore = function(score){
        this.score += score;
    };    

    /**
     * 获取位置数据
     */
    MainUIData.prototype.getPosData = function(x,y){
        var posObj = this._posData["item_" + x + "_" + y];        
        return posObj;
    }

    /**
     * 设置分数
     * 设置规则：
     *  1.减分地鼠进行分数减分   加分地鼠进行分数加分
     *  2.因为全局分数变化唯一地点为主界面存在的情况下，因此可以将分数视为面板数据，
     * 如果遇到大型项目，这种全局数变更可能会来自很多地方，因此需要将这个数据独立于面板逻辑，通过事件派发通知
     *  3.当分数小于0的时候  分数为0
     * 
     */
    Object.defineProperty(MainUIData.prototype,"score",{
        get:function(){
            return this._score;
        },
        set:function(value){            
            this._score = value;    
            if(this._score < 0){
                this._score = 0;
            }
            this.eventDispatcher.event(MainUIData.UPDATE_SCORE,this._score);
        }
    });
    return MainUIData;
}(BaseUIData));