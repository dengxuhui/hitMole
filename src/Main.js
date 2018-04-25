/*
* name;
*/
var Main = (function () {
    function Main() {
        Laya.init(800, 600);
        Laya.stage.scaleMode = Laya.Stage.SCALE_NOSCALE;
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        Laya.stage.scaleMode = Laya.Stage.SCREEN_NONE;
        Laya.stage.bgColor = "#ffcccc";
        //首先通过resConf中配置文件加载Loading阶段所需资源
        Laya.loader.load("res/conf/resConf.json", Laya.Handler.create(this,
            this.onConfLoaded, null, true), null, Laya.Loader.JSON);
    }
    Main.prototype.onConfLoaded = function () {
        //加载完所需资源打开主场景界面
        var jsonData = Laya.loader.getRes("res/conf/resConf.json");
        Laya.loader.load(jsonData.Loading, Laya.Handler.create(this, this.onLoaded));
    };
    Main.prototype.onLoaded = function () {
        UICenter.instance.openUI(UI.GameRule);
    };
    return Main;
}());

new Main();