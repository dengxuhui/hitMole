var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var GameResultUI=(function(_super){
		function GameResultUI(){
			
		    this.btnRestart=null;
		    this.boxScore=null;
		    this.imgTotalScore=null;

			GameResultUI.__super.call(this);
		}

		CLASS$(GameResultUI,'ui.ui.GameResultUI',_super);
		var __proto__=GameResultUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameResultUI.uiView);

		}

		GameResultUI.uiView={"type":"View","props":{"width":600,"height":300},"child":[{"type":"Image","props":{"y":0,"x":0,"width":600,"skin":"ui/overBg.png","height":300,"sizeGrid":"10,10,10,10"}},{"type":"Button","props":{"y":204,"x":211,"var":"btnRestart","stateNum":2,"skin":"ui/btn_restart.png"}},{"type":"Box","props":{"y":79,"x":26,"var":"boxScore"},"child":[{"type":"Image","props":{"var":"imgTotalScore","skin":"ui/total Score.png"}}]}]};
		return GameResultUI;
	})(View);
var GameRuleUI=(function(_super){
		function GameRuleUI(){
			
		    this.btnStart=null;

			GameRuleUI.__super.call(this);
		}

		CLASS$(GameRuleUI,'ui.ui.GameRuleUI',_super);
		var __proto__=GameRuleUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameRuleUI.uiView);

		}

		GameRuleUI.uiView={"type":"View","props":{"width":800,"height":600},"child":[{"type":"Image","props":{"y":55,"x":38,"skin":"ui/help.png"}},{"type":"Button","props":{"y":429,"x":310,"var":"btnStart","stateNum":2,"skin":"ui/btn_start.png"}}]};
		return GameRuleUI;
	})(View);
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
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(MainUI.uiView);

		}

		MainUI.uiView={"type":"View","props":{"width":800,"height":600},"child":[{"type":"Image","props":{"y":25,"x":25,"skin":"ui/back.png"}},{"type":"Box","props":{"y":276,"x":152,"var":"boxHoleBg0"},"child":[{"type":"Image","props":{"y":1,"skin":"ui/mask-01.png"}},{"type":"Image","props":{"y":3,"x":388,"skin":"ui/mask-03.png"}},{"type":"Image","props":{"x":192,"skin":"ui/mask-02.png"}}]},{"type":"Box","props":{"y":369,"x":129,"var":"boxHoleBg1"},"child":[{"type":"Image","props":{"skin":"ui/mask-04.png"}},{"type":"Image","props":{"y":2,"x":218,"skin":"ui/mask-05.png"}},{"type":"Image","props":{"y":1,"x":417,"skin":"ui/mask-06.png"}}]},{"type":"Box","props":{"y":467,"x":123,"var":"boxHoleBg2"},"child":[{"type":"Image","props":{"skin":"ui/mask-07.png"}},{"type":"Image","props":{"y":5,"x":223,"skin":"ui/mask-08.png"}},{"type":"Image","props":{"y":6,"x":442,"skin":"ui/mask-09.png"}}]},{"type":"ProgressBar","props":{"y":-2,"x":223,"skin":"ui/progress_time.png"}}]};
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