var Sprite = Laya.Sprite;
/*
* name;
*/
var LayerManager = (function () {
    function LayerManager() {
        this._layerChildren = new Dictionary();
        this._layer = new Sprite();
        Laya.stage.addChild(this._layer);
    }
    /**
         * 添加到舞台上
         */
    LayerManager.prototype.addToLayer = function (source) {
        if (source == null) {
            return;
        }
        this._layer.addChild(source);
    };
    /**
     * 放置在舞台顶层
     */
    LayerManager.prototype.setTop = function (source) {
        if (source == null) {
            return;
        }
        if (source.parent == this._layer) {
            this._layer.setChildIndex(source, 0);
        }
        else if (source.parent == null) {
            this._layer.addChild(source);
        }
    };
    /**
     * 放置在舞台底层
     */
    LayerManager.prototype.setFloor = function () {
        if (source == null) {
            return;
        }
        if (source.parent == this._layer) {
            this._layer.setChildIndex(source, this._layer.numChildren - 1);
        }
        else if (source.parent == null) {
            this._layer.addChildAt(source, this._layer.numChildren - 1);
        }
    };
    /**
     * 移除舞台
     */
    LayerManager.prototype.removeToLayer = function (source) {
        if (source == null) {
            return;
        }
        this._layer.removeChild(source); 
    };     
    Object.defineProperty(LayerManager, "instance", {
        get: function () {
            if (this._instance == null || this._instance == "undefined") {
                this._instance = new LayerManager();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });    
    return LayerManager;
}());