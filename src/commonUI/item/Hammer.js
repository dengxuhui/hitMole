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
        Laya.stage.on(Laya.Event.MOUSE_DOWN,this,this.onMouseDown);
        Laya.stage.on(Laya.Event.MOUSE_MOVE,this,this.onMouseMove);
        this.onMouseMove();
    };
    Hammer.prototype.end = function(){
        Laya.Mouse.show();
        Laya.stage.off(Laya.Event.MOUSE_DOWN,this,this.onMouseDown);
        Laya.stage.off(Laya.Event.MOUSE_MOVE,this,this.onMouseMove);
    };
    Hammer.prototype.onMouseDown = function(){
        this.hit.play(0,false);
    };
    Hammer.prototype.onMouseMove = function(){
        this.pos(Laya.stage.mouseX - this.width/2,Laya.stage.mousY - this.height/3);
    };
    return Hammer;
}(HammerUI));