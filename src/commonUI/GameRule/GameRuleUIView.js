/*
* name;
*/
var GameRuleUIView = (function (_super) {
    function GameRuleUIView() {
        //调用父类构造方法
        GameRuleUIView.__super.call(this);
        //利用闭包关系创建私有变量
        // var _ui = new GameRuleUI();
        // this.getUI = function(){
        //     return _ui;
        // }

        //直接创建全局变量
        this.ui = new GameRuleUI();
    }
    //注册继承关系 一定要放在构造函数之后  否则无法注册父类
    Laya.class(GameRuleUIView,"GameRuleUIView",_super);
    
    GameRuleUIView.prototype.onShow = function(){
        LayerManager.instance.addToLayer(this.ui);
    };    
    GameRuleUIView.prototype.onHide = function(){
        LayerManager.instance.removeToLayer(this.ui);
    };    
    return GameRuleUIView;
}(BaseUIView));