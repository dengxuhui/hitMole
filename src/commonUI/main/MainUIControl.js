/*
* name;
*/
var MainUIControl = (function (_super) {
    function MainUIControl() {
        MainUIControl.super(this);
    }
    MainUIControl.prototype.onShow = function(){
        console.log("onshow");
    };
    MainUIControl.prototype.onHide = function(){
        console.log("onHide");
    };
    return MainUIControl;
}(BaseUIControl));