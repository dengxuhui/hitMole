/*
* name;
*/
var Main = (function () {
    function Main() {
        Laya.init(800,600);
        Laya.stage.scaleMode = Laya.Stage.SCALE_NOSCALE;
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        Laya.stage.scaleMode = Laya.Stage.SCREEN_NONE;
        Laya.stage.bgColor = "#ffcccc";
        Laya.loader.load("res/atlas/ui.atlas",Laya.Handler.create(this,this.onLoaded),null,Laya.Loader.ATLAS);
    }
    Main.prototype.onLoaded = function(){
        UICenter.instance.openUI(UI.Main);
    };
    return Main;
}());

new Main();