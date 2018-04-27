/*
* name;
*/
var MainUIManager = (function (_super) {
    function MainUIManager() {       
        MainUIManager.__super.call(this);
        this.addControl(MainUIControl);
        this.addView(MainUIView);
        this.setOpenParam(MainUIOpenParam);
        this.addData(MainUIData);
    }
     Laya.class(MainUIManager, "MainUIManager", _super);
    return MainUIManager;
}(BaseUIManager));