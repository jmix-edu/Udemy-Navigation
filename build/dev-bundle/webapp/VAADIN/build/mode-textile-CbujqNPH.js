import{g as p}from"./generated-flow-imports-DCXOKDeO.js";function m(u,g){for(var e=0;e<g.length;e++){const i=g[e];if(typeof i!="string"&&!Array.isArray(i)){for(const a in i)if(a!=="default"&&!(a in u)){const r=Object.getOwnPropertyDescriptor(i,a);r&&Object.defineProperty(u,a,r.get?r:{enumerable:!0,get:()=>i[a]})}}}return Object.freeze(Object.defineProperty(u,Symbol.toStringTag,{value:"Module"}))}var d={exports:{}};(function(u,g){ace.define("ace/mode/textile_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,i,a){var r=e("../lib/oop"),h=e("./text_highlight_rules").TextHighlightRules,t=function(){this.$rules={start:[{token:function(n){return n.charAt(0)=="h"?"markup.heading."+n.charAt(1):"markup.heading"},regex:"h1|h2|h3|h4|h5|h6|bq|p|bc|pre",next:"blocktag"},{token:"keyword",regex:"[\\*]+|[#]+"},{token:"text",regex:".+"}],blocktag:[{token:"keyword",regex:"\\. ",next:"start"},{token:"keyword",regex:"\\(",next:"blocktagproperties"}],blocktagproperties:[{token:"keyword",regex:"\\)",next:"blocktag"},{token:"string",regex:"[a-zA-Z0-9\\-_]+"},{token:"keyword",regex:"#"}]}};r.inherits(t,h),i.TextileHighlightRules=t}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(e,i,a){var r=e("../range").Range,h=function(){};(function(){this.checkOutdent=function(t,n){return/^\s+$/.test(t)?/^\s*\}/.test(n):!1},this.autoOutdent=function(t,n){var s=t.getLine(n),l=s.match(/^(\s*\})/);if(!l)return 0;var c=l[1].length,o=t.findMatchingBracket({row:n,column:c});if(!o||o.row==n)return 0;var f=this.$getIndent(t.getLine(o.row));t.replace(new r(n,0,n,c-1),f)},this.$getIndent=function(t){return t.match(/^\s*/)[0]}}).call(h.prototype),i.MatchingBraceOutdent=h}),ace.define("ace/mode/textile",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/textile_highlight_rules","ace/mode/matching_brace_outdent"],function(e,i,a){var r=e("../lib/oop"),h=e("./text").Mode,t=e("./textile_highlight_rules").TextileHighlightRules,n=e("./matching_brace_outdent").MatchingBraceOutdent,s=function(){this.HighlightRules=t,this.$outdent=new n,this.$behaviour=this.$defaultBehaviour};r.inherits(s,h),(function(){this.type="text",this.getNextLineIndent=function(l,c,o){return l=="intag"?o:""},this.checkOutdent=function(l,c,o){return this.$outdent.checkOutdent(c,o)},this.autoOutdent=function(l,c,o){this.$outdent.autoOutdent(c,o)},this.$id="ace/mode/textile",this.snippetFileId="ace/snippets/textile"}).call(s.prototype),i.Mode=s}),function(){ace.require(["ace/mode/textile"],function(e){u&&(u.exports=e)})}()})(d);var x=d.exports;const k=p(x),b=m({__proto__:null,default:k},[x]);export{b as m};
