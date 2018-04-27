/*
* 这种传入一个对象  并对该对象进行管理的做法  相当于一种对象代理的感觉，这个对象需要做什么
完全由这个控制器所去做，只需要给这个控制器提供代理对象即可
*/
var ScoreControler = (function () {
    function ScoreControler(scoreUI) {
        if(scoreUI != null && scoreUI instanceof ScoreUI){
            this.ui = scoreUI;
        }
    }
    ScoreControler.prototype.updateScore = function(score){
        if(this.ui == null){
            return;
        }
        //TODO
    };
    ScoreControler.prototype.clearScore = function(score){
        if(this.ui == null){
            return;
        }
        //TODO
    };
    return ScoreControler;
}());