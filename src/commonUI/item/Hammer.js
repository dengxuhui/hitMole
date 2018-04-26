/*
* name;
*/
var Hammer = (function (_super) {
    function Hammer() {
        Hammer.__super.call(this);
    }
    Laya.class(Hammer,"Hammer",_super);

    Hammer.prototype.start = function(){
        Laya.Mouse.hide();
        this.visible = true;
        Laya.stage.on(Laya.Event.MOUSE_DOWN,this,this.onMouseDown);
        Laya.stage.on(Laya.Event.MOUSE_MOVE,this,this.onMouseMove);
        this.onMouseMove();
    };
    Hammer.prototype.stop = function(){
        Laya.Mouse.show();
        this.visible = false;
        Laya.stage.off(Laya.Event.MOUSE_DOWN,this,this.onMouseDown);
        Laya.stage.off(Laya.Event.MOUSE_MOVE,this,this.onMouseMove);
    };
    Hammer.prototype.onMouseDown = function(){
        this.hit.play(0,false);
    };
    Hammer.prototype.onMouseMove = function(){
        this.pos(Laya.stage.mouseX - this.width/2,Laya.stage.mouseY - this.height/3);
        // console.log("当前x值：" + this.x +"当前y值："+ this.y);
    };    
    return Hammer;
}(HammerUI));