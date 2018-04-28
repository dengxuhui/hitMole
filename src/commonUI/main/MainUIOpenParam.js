/*
* name;
*/
var MainUIOpenParam = (function (_super) {
    function MainUIOpenParam() {
        MainUIOpenParam.__super.call(this);
        this.isStartingGame = false;
    }
    Laya.class(MainUIOpenParam,"MainUIOpenParam",_super);
    return MainUIOpenParam;
}(UIOpenparam));