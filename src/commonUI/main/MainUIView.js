/**
* name 
*/
var commonUI;
(function (commonUI) {
    var MainUIView = (function (_super) {
        function MainUIView() {
            return _super.call(this) || this;
        }
        var _proto = MainUIView.prototype;
        _proto.onShow = function(){            
        }
        return MainUIView;
    }(ui.ui.MainUI));
    commonUI.MainUIView = MainUIView;
})(commonUI || (commonUI = {}));