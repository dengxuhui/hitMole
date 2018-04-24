/**
* name 
*/
var commonUI;
(function (commonUI) {
    var MainUIControl = (function (_super) {
        function MainUIControl() {

        }        
        //注册继承
        Laya.class(MainUIControl,"MainUIControl",_super);


        return MainUIControl;
    }(BaseUIControl));
    commonUI.MainUIControl = MainUIControl;
})(commonUI || (commonUI = {}));