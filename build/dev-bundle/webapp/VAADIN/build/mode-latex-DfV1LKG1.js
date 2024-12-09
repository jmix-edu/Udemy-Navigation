import{g as $}from"./generated-flow-imports-DCXOKDeO.js";function S(f,y){for(var t=0;t<y.length;t++){const g=y[t];if(typeof g!="string"&&!Array.isArray(g)){for(const u in g)if(u!=="default"&&!(u in f)){const p=Object.getOwnPropertyDescriptor(g,u);p&&Object.defineProperty(f,u,p.get?p:{enumerable:!0,get:()=>g[u]})}}}return Object.freeze(Object.defineProperty(f,Symbol.toStringTag,{value:"Module"}))}var C={exports:{}};(function(f,y){ace.define("ace/mode/latex_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(t,g,u){var p=t("../lib/oop"),k=t("./text_highlight_rules").TextHighlightRules,d=function(){this.$rules={start:[{token:"comment",regex:"%.*$"},{token:["keyword","lparen","variable.parameter","rparen","lparen","storage.type","rparen"],regex:"(\\\\(?:documentclass|usepackage|input))(?:(\\[)([^\\]]*)(\\]))?({)([^}]*)(})"},{token:["keyword","lparen","variable.parameter","rparen"],regex:"(\\\\(?:label|v?ref|cite(?:[^{]*)))(?:({)([^}]*)(}))?"},{token:["storage.type","lparen","variable.parameter","rparen"],regex:"(\\\\begin)({)(verbatim)(})",next:"verbatim"},{token:["storage.type","lparen","variable.parameter","rparen"],regex:"(\\\\begin)({)(lstlisting)(})",next:"lstlisting"},{token:["storage.type","lparen","variable.parameter","rparen"],regex:"(\\\\(?:begin|end))({)([\\w*]*)(})"},{token:"storage.type",regex:/\\verb\b\*?/,next:[{token:["keyword.operator","string","keyword.operator"],regex:"(.)(.*?)(\\1|$)|",next:"start"}]},{token:"storage.type",regex:"\\\\[a-zA-Z]+"},{token:"lparen",regex:"[[({]"},{token:"rparen",regex:"[\\])}]"},{token:"constant.character.escape",regex:"\\\\[^a-zA-Z]?"},{token:"string",regex:"\\${1,2}",next:"equation"}],equation:[{token:"comment",regex:"%.*$"},{token:"string",regex:"\\${1,2}",next:"start"},{token:"constant.character.escape",regex:"\\\\(?:[^a-zA-Z]|[a-zA-Z]+)"},{token:"error",regex:"^\\s*$",next:"start"},{defaultToken:"string"}],verbatim:[{token:["storage.type","lparen","variable.parameter","rparen"],regex:"(\\\\end)({)(verbatim)(})",next:"start"},{defaultToken:"text"}],lstlisting:[{token:["storage.type","lparen","variable.parameter","rparen"],regex:"(\\\\end)({)(lstlisting)(})",next:"start"},{defaultToken:"text"}]},this.normalizeRules()};p.inherits(d,k),g.LatexHighlightRules=d}),ace.define("ace/mode/folding/latex",["require","exports","module","ace/lib/oop","ace/mode/folding/fold_mode","ace/range","ace/token_iterator"],function(t,g,u){var p=t("../../lib/oop"),k=t("./fold_mode").FoldMode,d=t("../../range").Range,v=t("../../token_iterator").TokenIterator,m={"\\subparagraph":1,"\\paragraph":2,"\\subsubsubsection":3,"\\subsubsection":4,"\\subsection":5,"\\section":6,"\\chapter":7,"\\part":8,"\\begin":9,"\\end":10},x=g.FoldMode=function(){};p.inherits(x,k),(function(){this.foldingStartMarker=/^\s*\\(begin)|\s*\\(part|chapter|(?:sub)*(?:section|paragraph))\b|{\s*$/,this.foldingStopMarker=/^\s*\\(end)\b|^\s*}/,this.getFoldWidgetRange=function(r,n,o){var l=r.doc.getLine(o),e=this.foldingStartMarker.exec(l);if(e)return e[1]?this.latexBlock(r,o,e[0].length-1):e[2]?this.latexSection(r,o,e[0].length-1):this.openingBracketBlock(r,"{",o,e.index);var e=this.foldingStopMarker.exec(l);if(e)return e[1]?this.latexBlock(r,o,e[0].length-1):this.closingBracketBlock(r,"}",o,e.index+e[0].length)},this.latexBlock=function(r,h,o,l){var e={"\\begin":1,"\\end":-1},a=new v(r,h,o),i=a.getCurrentToken();if(!(!i||!(i.type=="storage.type"||i.type=="constant.character.escape"))){var c=i.value,s=e[c],T=function(){var B=a.stepForward(),M=B&&B.type=="lparen"?a.stepForward().value:"";return s===-1&&(a.stepBackward(),M&&a.stepBackward()),M},b=[T()],w=s===-1?a.getCurrentTokenColumn():r.getLine(h).length,R=h;for(a.step=s===-1?a.stepBackward:a.stepForward;i=a.step();)if(!(!i||!(i.type=="storage.type"||i.type=="constant.character.escape"))){var _=e[i.value];if(_){var L=T();if(_===s)b.unshift(L);else if(b.shift()!==L||!b.length)break}}if(!b.length){if(s==1&&(a.stepBackward(),a.stepBackward()),l)return a.getCurrentTokenRange();var h=a.getCurrentTokenRow();return s===-1?new d(h,r.getLine(h).length,R,w):new d(R,w,h,a.getCurrentTokenColumn())}}},this.latexSection=function(r,n,o){var l=new v(r,n,o),e=l.getCurrentToken();if(!(!e||e.type!="storage.type")){for(var a=m[e.value]||0,i=0,c=n;e=l.stepForward();)if(e.type==="storage.type"){var s=m[e.value]||0;if(s>=9){if(i||(c=l.getCurrentTokenRow()-1),i+=s==9?1:-1,i<0)break}else if(s>=a)break}for(i||(c=l.getCurrentTokenRow()-1);c>n&&!/\S/.test(r.getLine(c));)c--;return new d(n,r.getLine(n).length,c,r.getLine(c).length)}}}).call(x.prototype)}),ace.define("ace/mode/latex",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/latex_highlight_rules","ace/mode/behaviour/cstyle","ace/mode/folding/latex"],function(t,g,u){var p=t("../lib/oop"),k=t("./text").Mode,d=t("./latex_highlight_rules").LatexHighlightRules,v=t("./behaviour/cstyle").CstyleBehaviour,m=t("./folding/latex").FoldMode,x=function(){this.HighlightRules=d,this.foldingRules=new m,this.$behaviour=new v({braces:!0})};p.inherits(x,k),(function(){this.type="text",this.lineCommentStart="%",this.$id="ace/mode/latex",this.getMatching=function(r,n,o){n==null&&(n=r.selection.lead),typeof n=="object"&&(o=n.column,n=n.row);var l=r.getTokenAt(n,o);if(l&&(l.value=="\\begin"||l.value=="\\end"))return this.foldingRules.latexBlock(r,n,o,!0)}}).call(x.prototype),g.Mode=x}),function(){ace.require(["ace/mode/latex"],function(t){f&&(f.exports=t)})}()})(C);var F=C.exports;const A=$(F),j=S({__proto__:null,default:A},[F]);export{j as m};
