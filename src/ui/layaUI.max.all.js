var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var GameResultUI=(function(_super){
		function GameResultUI(){
			
		    this.btnRestart=null;
		    this.boxScore=null;
		    this.imgTotalScore=null;
		    this.viewScore=null;

			GameResultUI.__super.call(this);
		}

		CLASS$(GameResultUI,'ui.ui.GameResultUI',_super);
		var __proto__=GameResultUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("ui.ui.ScoreUI",ui.ui.ScoreUI);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameResultUI.uiView);

		}

		GameResultUI.uiView={"type":"View","props":{"width":600,"height":300},"child":[{"type":"Image","props":{"y":0,"x":0,"width":600,"skin":"ui/overBg.png","height":300,"sizeGrid":"10,10,10,10"}},{"type":"Button","props":{"y":204,"x":211,"var":"btnRestart","stateNum":2,"skin":"ui/btn_restart.png"}},{"type":"Box","props":{"y":79,"x":26,"var":"boxScore"},"child":[{"type":"Image","props":{"var":"imgTotalScore","skin":"ui/total Score.png"}}]},{"type":"Score","props":{"y":116,"x":261,"var":"viewScore","runtime":"ui.ui.ScoreUI"}}]};
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
var HammerUI=(function(_super){
		function HammerUI(){
			
		    this.hit=null;
		    this.imgHammer=null;

			HammerUI.__super.call(this);
		}

		CLASS$(HammerUI,'ui.ui.HammerUI',_super);
		var __proto__=HammerUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(HammerUI.uiView);

		}

		HammerUI.uiView={"type":"View","props":{"width":100,"height":100},"child":[{"type":"Image","props":{"y":64,"x":60,"var":"imgHammer","skin":"ui/hammer.png","rotation":20,"pivotY":48,"pivotX":55},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"y":[{"value":60,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":0},{"value":58,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":1},{"value":60,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":5}],"x":[{"value":64,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":0},{"value":64,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":1},{"value":64,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":5}],"rotation":[{"value":20,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":0},{"value":-20,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":1},{"value":20,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":5}],"pivotY":[{"value":48,"tweenMethod":"linearNone","tween":true,"target":2,"key":"pivotY","index":0},{"value":48,"tweenMethod":"linearNone","tween":true,"target":2,"key":"pivotY","index":1},{"value":48,"tweenMethod":"linearNone","tween":true,"target":2,"key":"pivotY","index":5}],"pivotX":[{"value":55,"tweenMethod":"linearNone","tween":true,"target":2,"key":"pivotX","index":0},{"value":55,"tweenMethod":"linearNone","tween":true,"target":2,"key":"pivotX","index":1},{"value":55,"tweenMethod":"linearNone","tween":true,"target":2,"key":"pivotX","index":5}]}}],"name":"hit","id":1,"frameRate":24,"action":1}]};
		return HammerUI;
	})(View);
var MainUI=(function(_super){
		function MainUI(){
			
		    this.boxItemContainer=null;
		    this.progressTime=null;
		    this.viewScore=null;

			MainUI.__super.call(this);
		}

		CLASS$(MainUI,'ui.ui.MainUI',_super);
		var __proto__=MainUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("ui.ui.ScoreUI",ui.ui.ScoreUI);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(MainUI.uiView);

		}

		MainUI.uiView={"type":"View","props":{"width":800,"height":600},"child":[{"type":"Image","props":{"y":25,"x":25,"skin":"ui/back.png"}},{"type":"Box","props":{"y":0,"x":0,"width":800,"var":"boxItemContainer","height":600}},{"type":"ProgressBar","props":{"y":3,"x":3,"var":"progressTime","skin":"ui/progress_time.png"}},{"type":"Score","props":{"y":34,"x":60,"var":"viewScore","runtime":"ui.ui.ScoreUI"}}]};
		return MainUI;
	})(View);
var MoleItemUI=(function(_super){
		function MoleItemUI(){
			
		    this.imgHit=null;
		    this.imgNormal=null;
		    this.imgScoreNum=null;
		    this.imgMask=null;

			MoleItemUI.__super.call(this);
		}

		CLASS$(MoleItemUI,'ui.ui.MoleItemUI',_super);
		var __proto__=MoleItemUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(MoleItemUI.uiView);

		}

		MoleItemUI.uiView={"type":"View","props":{"width":138,"height":113},"child":[{"type":"Image","props":{"y":0,"x":6,"var":"imgHit","skin":"ui/mouse_hit_0.png"}},{"type":"Image","props":{"y":0,"x":1,"var":"imgNormal","skin":"ui/mouse_normal_0.png"}},{"type":"Image","props":{"y":53,"x":16,"var":"imgScoreNum","skin":"ui/score_0.png"}},{"type":"Image","props":{"y":67,"x":0,"var":"imgMask","skin":"ui/mask_0_0.png"}}]};
		return MoleItemUI;
	})(View);
var ScoreUI=(function(_super){
		function ScoreUI(){
			

			ScoreUI.__super.call(this);
		}

		CLASS$(ScoreUI,'ui.ui.ScoreUI',_super);
		var __proto__=ScoreUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(ScoreUI.uiView);

		}

		ScoreUI.uiView={"type":"View","props":{"width":172,"height":23},"child":[{"type":"Clip","props":{"y":0,"x":0,"skin":"ui/clip_number.png","name":"item9","clipY":1,"clipX":10}},{"type":"Clip","props":{"y":0,"x":17,"skin":"ui/clip_number.png","name":"item8","clipY":1,"clipX":10}},{"type":"Clip","props":{"y":0,"x":34,"skin":"ui/clip_number.png","name":"item7","clipY":1,"clipX":10}},{"type":"Clip","props":{"y":0,"x":51,"skin":"ui/clip_number.png","name":"item6","clipY":1,"clipX":10}},{"type":"Clip","props":{"y":0,"x":68,"skin":"ui/clip_number.png","name":"item5","clipY":1,"clipX":10}},{"type":"Clip","props":{"y":0,"x":86,"skin":"ui/clip_number.png","name":"item4","clipY":1,"clipX":10}},{"type":"Clip","props":{"y":0,"x":103,"width":18,"skin":"ui/clip_number.png","name":"item3","height":24,"clipY":1,"clipX":10}},{"type":"Clip","props":{"y":0,"x":120,"width":18,"skin":"ui/clip_number.png","name":"item2","height":24,"clipY":1,"clipX":10}},{"type":"Clip","props":{"y":0,"x":137,"skin":"ui/clip_number.png","name":"item1","clipY":1,"clipX":10}},{"type":"Clip","props":{"y":0,"x":154,"skin":"ui/clip_number.png","name":"item0","clipY":1,"clipX":10}}]};
		return ScoreUI;
	})(View);