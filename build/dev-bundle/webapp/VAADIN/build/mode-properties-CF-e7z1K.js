import{g as u}from"./generated-flow-imports-DCXOKDeO.js";function c(i,n){for(var e=0;e<n.length;e++){const t=n[e];if(typeof t!="string"&&!Array.isArray(t)){for(const o in t)if(o!=="default"&&!(o in i)){const r=Object.getOwnPropertyDescriptor(t,o);r&&Object.defineProperty(i,o,r.get?r:{enumerable:!0,get:()=>t[o]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}var g={exports:{}};(function(i,n){ace.define("ace/mode/properties_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,t,o){var r=e("../lib/oop"),l=e("./text_highlight_rules").TextHighlightRules,a=function(){var s=/\\u[0-9a-fA-F]{4}|\\/;this.$rules={start:[{token:"comment",regex:/[!#].*$/},{token:"keyword",regex:/[=:]$/},{token:"keyword",regex:/[=:]/,next:"value"},{token:"constant.language.escape",regex:s},{defaultToken:"variable"}],value:[{regex:/\\$/,token:"string",next:"value"},{regex:/$/,token:"string",next:"start"},{token:"constant.language.escape",regex:s},{defaultToken:"string"}]}};r.inherits(a,l),t.PropertiesHighlightRules=a}),ace.define("ace/mode/properties",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/properties_highlight_rules"],function(e,t,o){var r=e("../lib/oop"),l=e("./text").Mode,a=e("./properties_highlight_rules").PropertiesHighlightRules,s=function(){this.HighlightRules=a,this.$behaviour=this.$defaultBehaviour};r.inherits(s,l),(function(){this.$id="ace/mode/properties"}).call(s.prototype),t.Mode=s}),function(){ace.require(["ace/mode/properties"],function(e){i&&(i.exports=e)})}()})(g);var p=g.exports;const h=u(p),f=c({__proto__:null,default:h},[p]);export{f as m};
