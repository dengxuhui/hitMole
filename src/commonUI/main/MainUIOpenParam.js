/*
* name;
*/
var MainUIOpenParam = (function (_super) {
    function MainUIOpenParam() {
        MainUIOpenParam.__super.call(this);
        this.isNewGame = false;
    }
    Laya.class(MainUIOpenParam,"MainUIOpenParam",_super);
    return MainUIOpenParam;
}(UIOpenparam));