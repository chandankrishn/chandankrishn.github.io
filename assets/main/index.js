System.register("chunks:///_virtual/testing.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,n,o,s;return{setters:[function(t){e=t.inheritsLoose},function(t){n=t.cclegacy,o=t._decorator,s=t.Component}],execute:function(){var r;n._RF.push({},"c4b94iR3LtJxoQnVWgXYZsy","testing",void 0);var a=o.ccclass;o.property,t("testing",a("testing")(r=function(t){function n(){return t.apply(this,arguments)||this}e(n,t);var o=n.prototype;return o.start=function(){},o.intentButton=function(){console.log("Navigator",navigator.getBattery()),console.log("Can share",navigator.canShare),navigator.canShare?navigator.share({text:"Our Pictures."}).then((function(){return console.log("Share was successful.")})).catch((function(t){return console.log("Sharing failed",t)})):console.log("Your system doesn't support sharing files.")},o.buttonClick=function(){var t=encodeURI("https://twitter.com/intent/tweet?text=super custom message;via=TwitterAccount"),e=document.createElement("a");e.classList.add("twitter-share-button"),e.href=t,e.target="_blank",e.id="twitter-intent",window.open(t,"_blank","location=yes,height=370,width=520,scrollbars=yes,status=yes"),console.log("call API")},n}(s))||r);n._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./testing.ts"],(function(){"use strict";return{setters:[null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});