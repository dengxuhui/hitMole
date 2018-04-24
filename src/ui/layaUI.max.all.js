var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var MainUI=(function(_super){
		function MainUI(){
			

			MainUI.__super.call(this);
		}

		CLASS$(MainUI,'ui.ui.MainUI',_super);
		var __proto__=MainUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(MainUI.uiView);

		}

		MainUI.uiView={"type":"View","props":{"width":800,"height":600}};
		return MainUI;
	})(View);