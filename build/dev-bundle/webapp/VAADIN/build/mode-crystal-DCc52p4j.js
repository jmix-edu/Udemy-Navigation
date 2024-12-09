import{g as T}from"./generated-flow-imports-DCXOKDeO.js";function N(b,$){for(var r=0;r<$.length;r++){const h=$[r];if(typeof h!="string"&&!Array.isArray(h)){for(const v in h)if(v!=="default"&&!(v in b)){const x=Object.getOwnPropertyDescriptor(h,v);x&&Object.defineProperty(b,v,x.get?x:{enumerable:!0,get:()=>h[v]})}}}return Object.freeze(Object.defineProperty(b,Symbol.toStringTag,{value:"Module"}))}var A={exports:{}};(function(b,$){ace.define("ace/mode/crystal_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(r,h,v){var x=r("../lib/oop"),m=r("./text_highlight_rules").TextHighlightRules,p=function(){var l="puts|initialize|previous_def|typeof|as|pointerof|sizeof|instance_sizeof",n="if|end|else|elsif|unless|case|when|break|while|next|until|def|return|class|new|getter|setter|property|lib|fun|do|struct|private|protected|public|module|super|abstract|include|extend|begin|enum|raise|yield|with|alias|rescue|ensure|macro|uninitialized|union|type|require",_="true|TRUE|false|FALSE|nil|NIL|__LINE__|__END_LINE__|__FILE__|__DIR__",t="$DEBUG|$defout|$FILENAME|$LOAD_PATH|$SAFE|$stdin|$stdout|$stderr|$VERBOSE|root_url|flash|session|cookies|params|request|response|logger|self",u=this.$keywords=this.createKeywordMapper({keyword:n,"constant.language":_,"variable.language":t,"support.function":l},"identifier"),a="(?:0[xX][\\dA-Fa-f]+)",e="(?:[0-9][\\d_]*)",o="(?:0o[0-7][0-7]*)",g="(?:0[bB][01]+)",d="(?:[+-]?)(?:"+a+"|"+e+"|"+o+"|"+g+")(?:_?[iIuU](?:8|16|32|64))?\\b",f=/\\(?:[nsrtvfbae'"\\]|[0-7]{3}|x[\da-fA-F]{2}|u[\da-fA-F]{4}|u{[\da-fA-F]{1,6}})/,i=/\\(?:[nsrtvfbae'"\\]|[0-7]{3}|x[\da-fA-F]{2}|u[\da-fA-F]{4}|u{[\da-fA-F]{1,6}}|u{(:?[\da-fA-F]{2}\s)*[\da-fA-F]{2}})/;this.$rules={start:[{token:"comment",regex:"#.*$"},{token:"string.regexp",regex:"[/]",push:[{token:"constant.language.escape",regex:i},{token:"string.regexp",regex:"[/][imx]*(?=[).,;\\s]|$)",next:"pop"},{defaultToken:"string.regexp"}]},[{regex:"[{}]",onMatch:function(s,k,c){return this.next=s=="{"?this.nextState:"",s=="{"&&c.length?(c.unshift("start",k),"paren.lparen"):s=="}"&&c.length&&(c.shift(),this.next=c.shift(),this.next.indexOf("string")!=-1)?"paren.end":s=="{"?"paren.lparen":"paren.rparen"},nextState:"start"},{token:"string.start",regex:/"/,push:[{token:"constant.language.escape",regex:i},{token:"string",regex:/\\#{/},{token:"paren.start",regex:/#{/,push:"start"},{token:"string.end",regex:/"/,next:"pop"},{defaultToken:"string"}]},{token:"string.start",regex:/`/,push:[{token:"constant.language.escape",regex:i},{token:"string",regex:/\\#{/},{token:"paren.start",regex:/#{/,push:"start"},{token:"string.end",regex:/`/,next:"pop"},{defaultToken:"string"}]},{stateName:"rpstring",token:"string.start",regex:/%[Qx]?\(/,push:[{token:"constant.language.escape",regex:i},{token:"string.start",regex:/\(/,push:"rpstring"},{token:"string.end",regex:/\)/,next:"pop"},{token:"paren.start",regex:/#{/,push:"start"},{defaultToken:"string"}]},{stateName:"spstring",token:"string.start",regex:/%[Qx]?\[/,push:[{token:"constant.language.escape",regex:i},{token:"string.start",regex:/\[/,push:"spstring"},{token:"string.end",regex:/]/,next:"pop"},{token:"paren.start",regex:/#{/,push:"start"},{defaultToken:"string"}]},{stateName:"fpstring",token:"string.start",regex:/%[Qx]?{/,push:[{token:"constant.language.escape",regex:i},{token:"string.start",regex:/{/,push:"fpstring"},{token:"string.end",regex:/}/,next:"pop"},{token:"paren.start",regex:/#{/,push:"start"},{defaultToken:"string"}]},{stateName:"tpstring",token:"string.start",regex:/%[Qx]?</,push:[{token:"constant.language.escape",regex:i},{token:"string.start",regex:/</,push:"tpstring"},{token:"string.end",regex:/>/,next:"pop"},{token:"paren.start",regex:/#{/,push:"start"},{defaultToken:"string"}]},{stateName:"ppstring",token:"string.start",regex:/%[Qx]?\|/,push:[{token:"constant.language.escape",regex:i},{token:"string.end",regex:/\|/,next:"pop"},{token:"paren.start",regex:/#{/,push:"start"},{defaultToken:"string"}]},{stateName:"rpqstring",token:"string.start",regex:/%[qwir]\(/,push:[{token:"string.start",regex:/\(/,push:"rpqstring"},{token:"string.end",regex:/\)/,next:"pop"},{defaultToken:"string"}]},{stateName:"spqstring",token:"string.start",regex:/%[qwir]\[/,push:[{token:"string.start",regex:/\[/,push:"spqstring"},{token:"string.end",regex:/]/,next:"pop"},{defaultToken:"string"}]},{stateName:"fpqstring",token:"string.start",regex:/%[qwir]{/,push:[{token:"string.start",regex:/{/,push:"fpqstring"},{token:"string.end",regex:/}/,next:"pop"},{defaultToken:"string"}]},{stateName:"tpqstring",token:"string.start",regex:/%[qwir]</,push:[{token:"string.start",regex:/</,push:"tpqstring"},{token:"string.end",regex:/>/,next:"pop"},{defaultToken:"string"}]},{stateName:"ppqstring",token:"string.start",regex:/%[qwir]\|/,push:[{token:"string.end",regex:/\|/,next:"pop"},{defaultToken:"string"}]},{token:"string.start",regex:/'/,push:[{token:"constant.language.escape",regex:f},{token:"string.end",regex:/'|$/,next:"pop"},{defaultToken:"string"}]}],{token:"text",regex:"::"},{token:"variable.instance",regex:"@{1,2}[a-zA-Z_\\d]+"},{token:"variable.fresh",regex:"%[a-zA-Z_\\d]+"},{token:"support.class",regex:"[A-Z][a-zA-Z_\\d]+"},{token:"constant.other.symbol",regex:"[:](?:(?:===|<=>|\\[]\\?|\\[]=|\\[]|>>|\\*\\*|<<|==|!=|>=|<=|!~|=~|<|\\+|-|\\*|\\/|%|&|\\||\\^|>|!|~)|(?:(?:[A-Za-z_]|[@$](?=[a-zA-Z0-9_]))[a-zA-Z0-9_]*[!=?]?))"},{token:"constant.numeric",regex:"[+-]?\\d(?:\\d|_(?=\\d))*(?:(?:\\.\\d(?:\\d|_(?=\\d))*)?(?:[eE][+-]?\\d+)?)?(?:_?[fF](?:32|64))?\\b"},{token:"constant.numeric",regex:d},{token:"constant.other.symbol",regex:':"',push:[{token:"constant.language.escape",regex:i},{token:"constant.other.symbol",regex:'"',next:"pop"},{defaultToken:"constant.other.symbol"}]},{token:"constant.language.boolean",regex:"(?:true|false)\\b"},{token:"support.function",regex:"(?:is_a\\?|nil\\?|responds_to\\?|as\\?)"},{token:u,regex:"[a-zA-Z_$][a-zA-Z0-9_$!?]*\\b"},{token:"variable.system",regex:"\\$\\!|\\$\\?"},{token:"punctuation.separator.key-value",regex:"=>"},{stateName:"heredoc",onMatch:function(s,k,c){var L="heredoc",y=s.split(this.splitRegex);return c.push(L,y[3]),[{type:"constant",value:y[1]},{type:"string",value:y[2]},{type:"support.class",value:y[3]},{type:"string",value:y[4]}]},regex:"(<<-)([']?)([\\w]+)([']?)",rules:{heredoc:[{token:"string",regex:"^ +"},{onMatch:function(s,k,c){return s===c[1]?(c.shift(),c.shift(),this.next=c[0]||"start","support.class"):(this.next="","string")},regex:".*$",next:"start"}]}},{regex:"$",token:"empty",next:function(s,k){return k[0]==="heredoc"?k[0]:s}},{token:"punctuation.operator",regex:/[.]\s*(?![.])/,push:[{token:"punctuation.operator",regex:/[.]\s*(?![.])/},{token:"support.function",regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{regex:"",token:"empty",next:"pop"}]},{token:"keyword.operator",regex:"!|\\$|%|&|\\*|\\-\\-|\\-|\\+\\+|\\+|~|===|==|=|!=|!==|<=|>=|<<=|>>=|>>>=|<>|<|>|!|\\?|\\:|&&|\\|\\||\\?\\:|\\*=|%=|\\+=|\\-=|&=|\\^=|\\^|\\|"},{token:"punctuation.operator",regex:/[?:,;.]/},{token:"paren.lparen",regex:"[[({]"},{token:"paren.rparen",regex:"[\\])}]"},{token:"text",regex:"\\s+"}]},this.normalizeRules()};x.inherits(p,m),h.CrystalHighlightRules=p}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(r,h,v){var x=r("../range").Range,m=function(){};(function(){this.checkOutdent=function(p,l){return/^\s+$/.test(p)?/^\s*\}/.test(l):!1},this.autoOutdent=function(p,l){var n=p.getLine(l),_=n.match(/^(\s*\})/);if(!_)return 0;var t=_[1].length,u=p.findMatchingBracket({row:l,column:t});if(!u||u.row==l)return 0;var a=this.$getIndent(p.getLine(u.row));p.replace(new x(l,0,l,t-1),a)},this.$getIndent=function(p){return p.match(/^\s*/)[0]}}).call(m.prototype),h.MatchingBraceOutdent=m}),ace.define("ace/mode/folding/coffee",["require","exports","module","ace/lib/oop","ace/mode/folding/fold_mode","ace/range"],function(r,h,v){var x=r("../../lib/oop"),m=r("./fold_mode").FoldMode,p=r("../../range").Range,l=h.FoldMode=function(){};x.inherits(l,m),(function(){this.getFoldWidgetRange=function(n,_,t){var u=this.indentationBlock(n,t);if(u)return u;var a=/\S/,e=n.getLine(t),o=e.search(a);if(!(o==-1||e[o]!="#")){for(var g=e.length,d=n.getLength(),f=t,i=t;++t<d;){e=n.getLine(t);var s=e.search(a);if(s!=-1){if(e[s]!="#")break;i=t}}if(i>f){var k=n.getLine(i).length;return new p(f,g,i,k)}}},this.getFoldWidget=function(n,_,t){var u=n.getLine(t),a=u.search(/\S/),e=n.getLine(t+1),o=n.getLine(t-1),g=o.search(/\S/),d=e.search(/\S/);if(a==-1)return n.foldWidgets[t-1]=g!=-1&&g<d?"start":"","";if(g==-1){if(a==d&&u[a]=="#"&&e[a]=="#")return n.foldWidgets[t-1]="",n.foldWidgets[t+1]="","start"}else if(g==a&&u[a]=="#"&&o[a]=="#"&&n.getLine(t-2).search(/\S/)==-1)return n.foldWidgets[t-1]="start",n.foldWidgets[t+1]="","";return g!=-1&&g<a?n.foldWidgets[t-1]="start":n.foldWidgets[t-1]="",a<d?"start":""}}).call(l.prototype)}),ace.define("ace/mode/crystal",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/crystal_highlight_rules","ace/mode/matching_brace_outdent","ace/range","ace/mode/behaviour/cstyle","ace/mode/folding/coffee"],function(r,h,v){var x=r("../lib/oop"),m=r("./text").Mode,p=r("./crystal_highlight_rules").CrystalHighlightRules,l=r("./matching_brace_outdent").MatchingBraceOutdent,n=r("../range").Range,_=r("./behaviour/cstyle").CstyleBehaviour,t=r("./folding/coffee").FoldMode,u=function(){this.HighlightRules=p,this.$outdent=new l,this.$behaviour=new _,this.foldingRules=new t};x.inherits(u,m),(function(){this.lineCommentStart="#",this.getNextLineIndent=function(a,e,o){var g=this.$getIndent(e),d=this.getTokenizer().getLineTokens(e,a),f=d.tokens;if(f.length&&f[f.length-1].type=="comment")return g;if(a=="start"){var i=e.match(/^.*[\{\(\[]\s*$/),s=e.match(/^\s*(class|def|module)\s.*$/),k=e.match(/.*do(\s*|\s+\|.*\|\s*)$/),c=e.match(/^\s*(if|else|when)\s*/);(i||s||k||c)&&(g+=o)}return g},this.checkOutdent=function(a,e,o){return/^\s+(end|else)$/.test(e+o)||this.$outdent.checkOutdent(e,o)},this.autoOutdent=function(a,e,o){var g=e.getLine(o);if(/}/.test(g))return this.$outdent.autoOutdent(e,o);var d=this.$getIndent(g),f=e.getLine(o-1),i=this.$getIndent(f),s=e.getTabString();i.length<=d.length&&d.slice(-s.length)==s&&e.remove(new n(o,d.length-s.length,o,d.length))},this.$id="ace/mode/crystal"}).call(u.prototype),h.Mode=u}),function(){ace.require(["ace/mode/crystal"],function(r){b&&(b.exports=r)})}()})(A);var F=A.exports;const R=T(F),z=N({__proto__:null,default:R},[F]);export{z as m};
