import{g as b}from"./generated-flow-imports-DCXOKDeO.js";function M(k,x){for(var n=0;n<x.length;n++){const d=x[n];if(typeof d!="string"&&!Array.isArray(d)){for(const m in d)if(m!=="default"&&!(m in k)){const h=Object.getOwnPropertyDescriptor(d,m);h&&Object.defineProperty(k,m,h.get?h:{enumerable:!0,get:()=>d[m]})}}}return Object.freeze(Object.defineProperty(k,Symbol.toStringTag,{value:"Module"}))}var R={exports:{}};(function(k,x){ace.define("ace/mode/doc_comment_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(n,d,m){var h=n("../lib/oop"),u=n("./text_highlight_rules").TextHighlightRules,o=function(){this.$rules={start:[{token:"comment.doc.tag",regex:"@[\\w\\d_]+"},o.getTagRule(),{defaultToken:"comment.doc",caseInsensitive:!0}]}};h.inherits(o,u),o.getTagRule=function(g){return{token:"comment.doc.tag.storage.type",regex:"\\b(?:TODO|FIXME|XXX|HACK)\\b"}},o.getStartRule=function(g){return{token:"comment.doc",regex:"\\/\\*(?=\\*)",next:g}},o.getEndRule=function(g){return{token:"comment.doc",regex:"\\*\\/",next:g}},d.DocCommentHighlightRules=o}),ace.define("ace/mode/scad_highlight_rules",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/mode/doc_comment_highlight_rules","ace/mode/text_highlight_rules"],function(n,d,m){var h=n("../lib/oop");n("../lib/lang");var u=n("./doc_comment_highlight_rules").DocCommentHighlightRules,o=n("./text_highlight_rules").TextHighlightRules,g=function(){var e=this.createKeywordMapper({"variable.language":"this",keyword:"module|if|else|for","constant.language":"NULL"},"identifier");this.$rules={start:[{token:"comment",regex:"\\/\\/.*$"},u.getStartRule("start"),{token:"comment",regex:"\\/\\*",next:"comment"},{token:"string",regex:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'},{token:"string",regex:'["].*\\\\$',next:"qqstring"},{token:"string",regex:"['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"},{token:"string",regex:"['].*\\\\$",next:"qstring"},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:"constant",regex:"<[a-zA-Z0-9.]+>"},{token:"keyword",regex:"(?:use|include)"},{token:e,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"keyword.operator",regex:"!|\\$|%|&|\\*|\\-\\-|\\-|\\+\\+|\\+|~|==|=|!=|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\\|\\||\\?\\:|\\*=|%=|\\+=|\\-=|&=|\\^=|\\b(?:in|new|delete|typeof|void)"},{token:"paren.lparen",regex:"[[({]"},{token:"paren.rparen",regex:"[\\])}]"},{token:"text",regex:"\\s+"}],comment:[{token:"comment",regex:"\\*\\/",next:"start"},{defaultToken:"comment"}],qqstring:[{token:"string",regex:'(?:(?:\\\\.)|(?:[^"\\\\]))*?"',next:"start"},{token:"string",regex:".+"}],qstring:[{token:"string",regex:"(?:(?:\\\\.)|(?:[^'\\\\]))*?'",next:"start"},{token:"string",regex:".+"}]},this.embedRules(u,"doc-",[u.getEndRule("start")])};h.inherits(g,o),d.scadHighlightRules=g}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(n,d,m){var h=n("../range").Range,u=function(){};(function(){this.checkOutdent=function(o,g){return/^\s+$/.test(o)?/^\s*\}/.test(g):!1},this.autoOutdent=function(o,g){var e=o.getLine(g),i=e.match(/^(\s*\})/);if(!i)return 0;var t=i[1].length,a=o.findMatchingBracket({row:g,column:t});if(!a||a.row==g)return 0;var r=this.$getIndent(o.getLine(a.row));o.replace(new h(g,0,g,t-1),r)},this.$getIndent=function(o){return o.match(/^\s*/)[0]}}).call(u.prototype),d.MatchingBraceOutdent=u}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(n,d,m){var h=n("../../lib/oop"),u=n("../../range").Range,o=n("./fold_mode").FoldMode,g=d.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};h.inherits(g,o),(function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,i,t){var a=e.getLine(t);if(this.singleLineBlockCommentRe.test(a)&&!this.startRegionRe.test(a)&&!this.tripleStarBlockCommentRe.test(a))return"";var r=this._getFoldWidgetBase(e,i,t);return!r&&this.startRegionRe.test(a)?"start":r},this.getFoldWidgetRange=function(e,i,t,a){var r=e.getLine(t);if(this.startRegionRe.test(r))return this.getCommentRegionBlock(e,r,t);var c=r.match(this.foldingStartMarker);if(c){var s=c.index;if(c[1])return this.openingBracketBlock(e,c[1],t,s);var l=e.getCommentFoldRange(t,s+c[0].length,1);return l&&!l.isMultiLine()&&(a?l=this.getSectionRange(e,t):i!="all"&&(l=null)),l}if(i!=="markbegin"){var c=r.match(this.foldingStopMarker);if(c){var s=c.index+c[0].length;return c[1]?this.closingBracketBlock(e,c[1],t,s):e.getCommentFoldRange(t,s,-1)}}},this.getSectionRange=function(e,i){var t=e.getLine(i),a=t.search(/\S/),r=i,s=t.length;i=i+1;for(var l=i,c=e.getLength();++i<c;){t=e.getLine(i);var f=t.search(/\S/);if(f!==-1){if(a>f)break;var v=this.getFoldWidgetRange(e,"all",i);if(v){if(v.start.row<=r)break;if(v.isMultiLine())i=v.end.row;else if(a==f)break}l=i}}return new u(r,s,l,e.getLine(l).length)},this.getCommentRegionBlock=function(e,i,t){for(var a=i.search(/\s*$/),r=e.getLength(),s=t,l=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,c=1;++t<r;){i=e.getLine(t);var f=l.exec(i);if(f&&(f[1]?c--:c++,!c))break}var v=t;if(v>s)return new u(s,a,v,i.length)}}).call(g.prototype)}),ace.define("ace/mode/scad",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/scad_highlight_rules","ace/mode/matching_brace_outdent","ace/mode/behaviour/cstyle","ace/mode/folding/cstyle"],function(n,d,m){var h=n("../lib/oop"),u=n("./text").Mode,o=n("./scad_highlight_rules").scadHighlightRules,g=n("./matching_brace_outdent").MatchingBraceOutdent,e=n("./behaviour/cstyle").CstyleBehaviour,i=n("./folding/cstyle").FoldMode,t=function(){this.HighlightRules=o,this.$outdent=new g,this.$behaviour=new e,this.foldingRules=new i};h.inherits(t,u),(function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.getNextLineIndent=function(a,r,s){var l=this.$getIndent(r),c=this.getTokenizer().getLineTokens(r,a),f=c.tokens,v=c.state;if(f.length&&f[f.length-1].type=="comment")return l;if(a=="start"){var p=r.match(/^.*[\{\(\[]\s*$/);p&&(l+=s)}else if(a=="doc-start"){if(v=="start")return"";var p=r.match(/^\s*(\/?)\*/);p&&(p[1]&&(l+=" "),l+="* ")}return l},this.checkOutdent=function(a,r,s){return this.$outdent.checkOutdent(r,s)},this.autoOutdent=function(a,r,s){this.$outdent.autoOutdent(r,s)},this.$id="ace/mode/scad"}).call(t.prototype),d.Mode=t}),function(){ace.require(["ace/mode/scad"],function(n){k&&(k.exports=n)})}()})(R);var _=R.exports;const $=b(_),S=M({__proto__:null,default:$},[_]);export{S as m};
