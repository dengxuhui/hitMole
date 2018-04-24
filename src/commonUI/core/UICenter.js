var UICenter = (function(_super){
    function UICenter(){
        // var _this = _super.call(this) || this;
        //以下添加需要添加的manager
        // ex:_this.addManager(....,....);        
        UICenter.super(this);
        this.addManager(UI.Main,MainUIManager);    
    }        
    Laya.class(UICenter,"UICenter",_super);
    var _proto = UICenter.prototype;

    _proto.addManager = function(id,className){
        if(className == null){
            return;
        }
        var manager = new className();
        manager.id = id;
        this._managers.set(id,manager);
    };
    Object.defineProperty(UICenter,"instance",{
        get:function(){
            if(this._instance == null){
                this._instance = new UICenter();
            }
            return this._instance;
        },
        enumerable:true,
        configurable:true
    });
    UICenter._instance = null;
    return UICenter;
})(BaseUICenter);