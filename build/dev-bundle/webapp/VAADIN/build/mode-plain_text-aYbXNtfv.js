import{g as d}from"./generated-flow-imports-DCXOKDeO.js";function h(o,n){for(var e=0;e<n.length;e++){const t=n[e];if(typeof t!="string"&&!Array.isArray(t)){for(const i in t)if(i!=="default"&&!(i in o)){const r=Object.getOwnPropertyDescriptor(t,i);r&&Object.defineProperty(o,i,r.get?r:{enumerable:!0,get:()=>t[i]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}var l={exports:{}};(function(o,n){ace.define("ace/mode/plain_text",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/text_highlight_rules","ace/mode/behaviour"],function(e,t,i){var r=e("../lib/oop"),c=e("./text").Mode,u=e("./text_highlight_rules").TextHighlightRules,p=e("./behaviour").Behaviour,a=function(){this.HighlightRules=u,this.$behaviour=new p};r.inherits(a,c),(function(){this.type="text",this.getNextLineIndent=function(f,g,m){return""},this.$id="ace/mode/plain_text"}).call(a.prototype),t.Mode=a}),function(){ace.require(["ace/mode/plain_text"],function(e){o&&(o.exports=e)})}()})(l);var s=l.exports;const x=d(s),v=h({__proto__:null,default:x},[s]);export{v as m};
