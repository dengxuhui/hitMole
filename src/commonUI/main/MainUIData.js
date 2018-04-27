/*
* name;
*/
var MainUIData = (function (_super) {
    MainUIData.UPDATE_SCORE = "mainUI_update_score";
    function MainUIData() {
        MainUIData.__super.call(this);
        this._score = 0;
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