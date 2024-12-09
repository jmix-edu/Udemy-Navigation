import{g as b}from"./generated-flow-imports-DCXOKDeO.js";function _(k,p){for(var o=0;o<p.length;o++){const s=p[o];if(typeof s!="string"&&!Array.isArray(s)){for(const u in s)if(u!=="default"&&!(u in k)){const d=Object.getOwnPropertyDescriptor(s,u);d&&Object.defineProperty(k,u,d.get?d:{enumerable:!0,get:()=>s[u]})}}}return Object.freeze(Object.defineProperty(k,Symbol.toStringTag,{value:"Module"}))}var x={exports:{}};(function(k,p){ace.define("ace/mode/json_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(o,s,u){var d=o("../lib/oop"),f=o("./text_highlight_rules").TextHighlightRules,g=function(){this.$rules={start:[{token:"variable",regex:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]\\s*(?=:)'},{token:"string",regex:'"',next:"string"},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:"constant.language.boolean",regex:"(?:true|false)\\b"},{token:"text",regex:"['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"},{token:"comment",regex:"\\/\\/.*$"},{token:"comment.start",regex:"\\/\\*",next:"comment"},{token:"paren.lparen",regex:"[[({]"},{token:"paren.rparen",regex:"[\\])}]"},{token:"punctuation.operator",regex:/[,]/},{token:"text",regex:"\\s+"}],string:[{token:"constant.language.escape",regex:/\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|["\\\/bfnrt])/},{token:"string",regex:'"|$',next:"start"},{defaultToken:"string"}],comment:[{token:"comment.end",regex:"\\*\\/",next:"start"},{defaultToken:"comment"}]}};d.inherits(g,f),s.JsonHighlightRules=g}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(o,s,u){var d=o("../range").Range,f=function(){};(function(){this.checkOutdent=function(g,h){return/^\s+$/.test(g)?/^\s*\}/.test(h):!1},this.autoOutdent=function(g,h){var e=g.getLine(h),t=e.match(/^(\s*\})/);if(!t)return 0;var n=t[1].length,c=g.findMatchingBracket({row:h,column:n});if(!c||c.row==h)return 0;var r=this.$getIndent(g.getLine(c.row));g.replace(new d(h,0,h,n-1),r)},this.$getIndent=function(g){return g.match(/^\s*/)[0]}}).call(f.prototype),s.MatchingBraceOutdent=f}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(o,s,u){var d=o("../../lib/oop"),f=o("../../range").Range,g=o("./fold_mode").FoldMode,h=s.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};d.inherits(h,g),(function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,n){var c=e.getLine(n);if(this.singleLineBlockCommentRe.test(c)&&!this.startRegionRe.test(c)&&!this.tripleStarBlockCommentRe.test(c))return"";var r=this._getFoldWidgetBase(e,t,n);return!r&&this.startRegionRe.test(c)?"start":r},this.getFoldWidgetRange=function(e,t,n,c){var r=e.getLine(n);if(this.startRegionRe.test(r))return this.getCommentRegionBlock(e,r,n);var a=r.match(this.foldingStartMarker);if(a){var i=a.index;if(a[1])return this.openingBracketBlock(e,a[1],n,i);var l=e.getCommentFoldRange(n,i+a[0].length,1);return l&&!l.isMultiLine()&&(c?l=this.getSectionRange(e,n):t!="all"&&(l=null)),l}if(t!=="markbegin"){var a=r.match(this.foldingStopMarker);if(a){var i=a.index+a[0].length;return a[1]?this.closingBracketBlock(e,a[1],n,i):e.getCommentFoldRange(n,i,-1)}}},this.getSectionRange=function(e,t){var n=e.getLine(t),c=n.search(/\S/),r=t,i=n.length;t=t+1;for(var l=t,a=e.getLength();++t<a;){n=e.getLine(t);var m=n.search(/\S/);if(m!==-1){if(c>m)break;var v=this.getFoldWidgetRange(e,"all",t);if(v){if(v.start.row<=r)break;if(v.isMultiLine())t=v.end.row;else if(c==m)break}l=t}}return new f(r,i,l,e.getLine(l).length)},this.getCommentRegionBlock=function(e,t,n){for(var c=t.search(/\s*$/),r=e.getLength(),i=n,l=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,a=1;++n<r;){t=e.getLine(n);var m=l.exec(t);if(m&&(m[1]?a--:a++,!a))break}var v=n;if(v>i)return new f(i,c,v,t.length)}}).call(h.prototype)}),ace.define("ace/mode/json",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/json_highlight_rules","ace/mode/matching_brace_outdent","ace/mode/behaviour/cstyle","ace/mode/folding/cstyle","ace/worker/worker_client"],function(o,s,u){var d=o("../lib/oop"),f=o("./text").Mode,g=o("./json_highlight_rules").JsonHighlightRules,h=o("./matching_brace_outdent").MatchingBraceOutdent,e=o("./behaviour/cstyle").CstyleBehaviour,t=o("./folding/cstyle").FoldMode,n=o("../worker/worker_client").WorkerClient,c=function(){this.HighlightRules=g,this.$outdent=new h,this.$behaviour=new e,this.foldingRules=new t};d.inherits(c,f),(function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.getNextLineIndent=function(r,i,l){var a=this.$getIndent(i);if(r=="start"){var m=i.match(/^.*[\{\(\[]\s*$/);m&&(a+=l)}return a},this.checkOutdent=function(r,i,l){return this.$outdent.checkOutdent(i,l)},this.autoOutdent=function(r,i,l){this.$outdent.autoOutdent(i,l)},this.createWorker=function(r){var i=new n(["ace"],"ace/mode/json_worker","JsonWorker");return i.attachToDocument(r.getDocument()),i.on("annotate",function(l){r.setAnnotations(l.data)}),i.on("terminate",function(){r.clearAnnotations()}),i},this.$id="ace/mode/json"}).call(c.prototype),s.Mode=c}),function(){ace.require(["ace/mode/json"],function(o){k&&(k.exports=o)})}()})(x);var R=x.exports;const M=b(R),$=_({__proto__:null,default:M},[R]);export{$ as m};