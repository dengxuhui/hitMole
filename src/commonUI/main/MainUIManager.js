/*
* name;
*/
var MainUIManager = (function (_super) {
    function MainUIManager() {
        MainUIManager.super(this);
        this.addControl(MainUIControl);
        this.addView(MainUIView);
    }
    Laya.class(MainUIManager,"MainUIManager",_super);
    return MainUIManager;
}(BaseUIManager));