var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var MainUI=(function(_super){
		function MainUI(){
			
		    this.boxHoleBg0=null;
		    this.boxHoleBg1=null;
		    this.boxHoleBg2=null;

			MainUI.__super.call(this);
		}

		CLASS$(MainUI,'ui.ui.MainUI',_super);
		var __proto__=MainUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("ui.ui.MoleItemUI",ui.ui.MoleItemUI);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(MainUI.uiView);

		}

		MainUI.uiView={"type":"View","props":{"width":800,"height":600},"child":[{"type":"Image","props":{"y":25,"x":25,"skin":"ui/back.png"}},{"type":"MoleItem","props":{"y":218,"x":157,"runtime":"ui.ui.MoleItemUI"}},{"type":"Box","props":{"y":276,"x":152,"var":"boxHoleBg0"},"child":[{"type":"Image","props":{"y":1,"skin":"ui/mask-01.png"}},{"type":"Image","props":{"y":3,"x":388,"skin":"ui/mask-03.png"}},{"type":"Image","props":{"x":192,"skin":"ui/mask-02.png"}}]},{"type":"Box","props":{"y":369,"x":129,"var":"boxHoleBg1"},"child":[{"type":"Image","props":{"skin":"ui/mask-04.png"}},{"type":"Image","props":{"y":2,"x":218,"skin":"ui/mask-05.png"}},{"type":"Image","props":{"y":1,"x":417,"skin":"ui/mask-06.png"}}]},{"type":"Box","props":{"y":467,"x":123,"var":"boxHoleBg2"},"child":[{"type":"Image","props":{"skin":"ui/mask-07.png"}},{"type":"Image","props":{"y":5,"x":223,"skin":"ui/mask-08.png"}},{"type":"Image","props":{"y":6,"x":442,"skin":"ui/mask-09.png"}}]}]};
		return MainUI;
	})(View);
var MoleItemUI=(function(_super){
		function MoleItemUI(){
			
		    this.imgHit=null;
		    this.imgNormal=null;

			MoleItemUI.__super.call(this);
		}

		CLASS$(MoleItemUI,'ui.ui.MoleItemUI',_super);
		var __proto__=MoleItemUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(MoleItemUI.uiView);

		}

		MoleItemUI.uiView={"type":"View","props":{"width":111,"height":104},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"imgHit","skin":"ui/mouse_hit_0.png"}},{"type":"Image","props":{"y":0,"x":0,"var":"imgNormal","skin":"ui/mouse_normal_0.png"}}]};
		return MoleItemUI;
	})(View);