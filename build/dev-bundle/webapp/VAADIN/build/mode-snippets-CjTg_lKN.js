import{g as _}from"./generated-flow-imports-DCXOKDeO.js";function L(x,h){for(var i=0;i<h.length;i++){const a=h[i];if(typeof a!="string"&&!Array.isArray(a)){for(const s in a)if(s!=="default"&&!(s in x)){const l=Object.getOwnPropertyDescriptor(a,s);l&&Object.defineProperty(x,s,l.get?l:{enumerable:!0,get:()=>a[s]})}}}return Object.freeze(Object.defineProperty(x,Symbol.toStringTag,{value:"Module"}))}var S={exports:{}};(function(x,h){ace.define("ace/mode/folding/coffee",["require","exports","module","ace/lib/oop","ace/mode/folding/fold_mode","ace/range"],function(i,a,s){var l=i("../../lib/oop"),m=i("./fold_mode").FoldMode,p=i("../../range").Range,u=a.FoldMode=function(){};l.inherits(u,m),(function(){this.getFoldWidgetRange=function(t,v,e){var g=this.indentationBlock(t,e);if(g)return g;var n=/\S/,r=t.getLine(e),o=r.search(n);if(!(o==-1||r[o]!="#")){for(var d=r.length,f=t.getLength(),k=e,c=e;++e<f;){r=t.getLine(e);var b=r.search(n);if(b!=-1){if(r[b]!="#")break;c=e}}if(c>k){var R=t.getLine(c).length;return new p(k,d,c,R)}}},this.getFoldWidget=function(t,v,e){var g=t.getLine(e),n=g.search(/\S/),r=t.getLine(e+1),o=t.getLine(e-1),d=o.search(/\S/),f=r.search(/\S/);if(n==-1)return t.foldWidgets[e-1]=d!=-1&&d<f?"start":"","";if(d==-1){if(n==f&&g[n]=="#"&&r[n]=="#")return t.foldWidgets[e-1]="",t.foldWidgets[e+1]="","start"}else if(d==n&&g[n]=="#"&&o[n]=="#"&&t.getLine(e-2).search(/\S/)==-1)return t.foldWidgets[e-1]="start",t.foldWidgets[e+1]="","";return d!=-1&&d<n?t.foldWidgets[e-1]="start":t.foldWidgets[e-1]="",n<f?"start":""}}).call(u.prototype)}),ace.define("ace/mode/snippets",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/text_highlight_rules","ace/mode/folding/coffee"],function(i,a,s){var l=i("../lib/oop"),m=i("./text").Mode,p=i("./text_highlight_rules").TextHighlightRules,u=function(){var g="SELECTION|CURRENT_WORD|SELECTED_TEXT|CURRENT_LINE|LINE_INDEX|LINE_NUMBER|SOFT_TABS|TAB_SIZE|FILENAME|FILEPATH|FULLNAME";this.$rules={start:[{token:"constant.language.escape",regex:/\\[\$}`\\]/},{token:"keyword",regex:"\\$(?:TM_)?(?:"+g+")\\b"},{token:"variable",regex:"\\$\\w+"},{onMatch:function(n,r,o){return o[1]?o[1]++:o.unshift(r,1),this.tokenName},tokenName:"markup.list",regex:"\\${",next:"varDecl"},{onMatch:function(n,r,o){return o[1]?(o[1]--,o[1]||o.splice(0,2),this.tokenName):"text"},tokenName:"markup.list",regex:"}"},{token:"doc.comment",regex:/^\${2}-{5,}$/}],varDecl:[{regex:/\d+\b/,token:"constant.numeric"},{token:"keyword",regex:"(?:TM_)?(?:"+g+")\\b"},{token:"variable",regex:"\\w+"},{regex:/:/,token:"punctuation.operator",next:"start"},{regex:/\//,token:"string.regex",next:"regexp"},{regex:"",next:"start"}],regexp:[{regex:/\\./,token:"escape"},{regex:/\[/,token:"regex.start",next:"charClass"},{regex:"/",token:"string.regex",next:"format"},{token:"string.regex",regex:"."}],charClass:[{regex:"\\.",token:"escape"},{regex:"\\]",token:"regex.end",next:"regexp"},{token:"string.regex",regex:"."}],format:[{regex:/\\[ulULE]/,token:"keyword"},{regex:/\$\d+/,token:"variable"},{regex:"/[gim]*:?",token:"string.regex",next:"start"},{token:"string",regex:"."}]}};l.inherits(u,p),a.SnippetHighlightRules=u;var t=function(){this.$rules={start:[{token:"text",regex:"^\\t",next:"sn-start"},{token:"invalid",regex:/^ \s*/},{token:"comment",regex:/^#.*/},{token:"constant.language.escape",regex:"^regex ",next:"regex"},{token:"constant.language.escape",regex:"^(trigger|endTrigger|name|snippet|guard|endGuard|tabTrigger|key)\\b"}],regex:[{token:"text",regex:"\\."},{token:"keyword",regex:"/"},{token:"empty",regex:"$",next:"start"}]},this.embedRules(u,"sn-",[{token:"text",regex:"^\\t",next:"sn-start"},{onMatch:function(g,n,r){return r.splice(r.length),this.tokenName},tokenName:"text",regex:"^(?!	)",next:"start"}])};l.inherits(t,p),a.SnippetGroupHighlightRules=t;var v=i("./folding/coffee").FoldMode,e=function(){this.HighlightRules=t,this.foldingRules=new v,this.$behaviour=this.$defaultBehaviour};l.inherits(e,m),(function(){this.$indentWithTabs=!0,this.lineCommentStart="#",this.$id="ace/mode/snippets",this.snippetFileId="ace/snippets/snippets"}).call(e.prototype),a.Mode=e}),function(){ace.require(["ace/mode/snippets"],function(i){x&&(x.exports=i)})}()})(S);var E=S.exports;const M=_(E),y=L({__proto__:null,default:M},[E]);export{y as m};
