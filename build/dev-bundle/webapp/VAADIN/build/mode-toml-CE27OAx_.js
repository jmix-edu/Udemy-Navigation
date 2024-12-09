import{g as M}from"./generated-flow-imports-DCXOKDeO.js";function R(n,u){for(var e=0;e<u.length;e++){const t=u[e];if(typeof t!="string"&&!Array.isArray(t)){for(const i in t)if(i!=="default"&&!(i in n)){const r=Object.getOwnPropertyDescriptor(t,i);r&&Object.defineProperty(n,i,r.get?r:{enumerable:!0,get:()=>t[i]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var p={exports:{}};(function(n,u){ace.define("ace/mode/toml_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,t,i){var r=e("../lib/oop"),d=e("./text_highlight_rules").TextHighlightRules,a=function(){var l=this.createKeywordMapper({"constant.language.boolean":"true|false"},"identifier"),o="[a-zA-Z\\$_¡-￿][a-zA-Z\\d\\$_¡-￿]*\\b";this.$rules={start:[{token:"comment.toml",regex:/#.*$/},{token:"string",regex:'"(?=.)',next:"qqstring"},{token:["variable.keygroup.toml"],regex:"(?:^\\s*)(\\[\\[([^\\]]+)\\]\\])"},{token:["variable.keygroup.toml"],regex:"(?:^\\s*)(\\[([^\\]]+)\\])"},{token:l,regex:o},{token:"support.date.toml",regex:"\\d{4}-\\d{2}-\\d{2}(T)\\d{2}:\\d{2}:\\d{2}(Z)"},{token:"constant.numeric.toml",regex:"-?\\d+(\\.?\\d+)?"}],qqstring:[{token:"string",regex:"\\\\$",next:"qqstring"},{token:"constant.language.escape",regex:'\\\\[0tnr"\\\\]'},{token:"string",regex:'"|$',next:"start"},{defaultToken:"string"}]}};r.inherits(a,d),t.TomlHighlightRules=a}),ace.define("ace/mode/folding/ini",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(e,t,i){var r=e("../../lib/oop"),d=e("../../range").Range,a=e("./fold_mode").FoldMode,l=t.FoldMode=function(){};r.inherits(l,a),(function(){this.foldingStartMarker=/^\s*\[([^\])]*)]\s*(?:$|[;#])/,this.getFoldWidgetRange=function(o,T,g){var c=this.foldingStartMarker,s=o.getLine(g),f=s.match(c);if(f){for(var v=f[1]+".",_=s.length,b=o.getLength(),h=g,m=g;++g<b;)if(s=o.getLine(g),!/^\s*$/.test(s)){if(f=s.match(c),f&&f[1].lastIndexOf(v,0)!==0)break;m=g}if(m>h){var k=o.getLine(m).length;return new d(h,_,m,k)}}}}).call(l.prototype)}),ace.define("ace/mode/toml",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/toml_highlight_rules","ace/mode/folding/ini"],function(e,t,i){var r=e("../lib/oop"),d=e("./text").Mode,a=e("./toml_highlight_rules").TomlHighlightRules,l=e("./folding/ini").FoldMode,o=function(){this.HighlightRules=a,this.foldingRules=new l,this.$behaviour=this.$defaultBehaviour};r.inherits(o,d),(function(){this.lineCommentStart="#",this.$id="ace/mode/toml"}).call(o.prototype),t.Mode=o}),function(){ace.require(["ace/mode/toml"],function(e){n&&(n.exports=e)})}()})(p);var x=p.exports;const y=M(x),F=R({__proto__:null,default:y},[x]);export{F as m};