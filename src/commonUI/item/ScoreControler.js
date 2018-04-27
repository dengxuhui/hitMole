/*
* 这种传入一个对象  并对该对象进行管理的做法  相当于一种对象代理的感觉，这个对象需要做什么
完全由这个控制器所去做，只需要给这个控制器提供代理对象即可
*/
var ScoreControler = (function () {
    ScoreControler.MAX_ITEM = 10;
    function ScoreControler(scoreUI) {
        if(scoreUI != null && scoreUI instanceof ScoreUI){
            this.ui = scoreUI;
        }
    }
    ScoreControler.prototype.updateScore = function(score){
        if(this.ui == null){
            return;
        }
        var scoreAry = score.toString().spit("");
        if(scoreAry <= 0){
            return;
        }
        for(var i = 0;i < scoreAry.length;i++){
            var item = ui.getChildByName("item" + (scoreAry.length - 1 - i));
            if(item == null){
                continue;
            }
            item.index = parseInt(scoreAry[i]);
        }
    };
    ScoreControler.prototype.clearScore = function(){
        if(this.ui == null){
            return;
        }
        for(var i = 0;i < ScoreControler.MAX_ITEM;i++){
            var item = ui.getChildByName("item" + i);
            item.index = 0;            
        }
    };
    return ScoreControler;
}());