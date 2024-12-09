import{g as y}from"./generated-flow-imports-DCXOKDeO.js";function R(x,_){for(var e=0;e<_.length;e++){const c=_[e];if(typeof c!="string"&&!Array.isArray(c)){for(const h in c)if(h!=="default"&&!(h in x)){const u=Object.getOwnPropertyDescriptor(c,h);u&&Object.defineProperty(x,h,u.get?u:{enumerable:!0,get:()=>c[h]})}}}return Object.freeze(Object.defineProperty(x,Symbol.toStringTag,{value:"Module"}))}var k={exports:{}};(function(x,_){ace.define("ace/mode/doc_comment_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,c,h){var u=e("../lib/oop"),f=e("./text_highlight_rules").TextHighlightRules,o=function(){this.$rules={start:[{token:"comment.doc.tag",regex:"@[\\w\\d_]+"},o.getTagRule(),{defaultToken:"comment.doc",caseInsensitive:!0}]}};u.inherits(o,f),o.getTagRule=function(i){return{token:"comment.doc.tag.storage.type",regex:"\\b(?:TODO|FIXME|XXX|HACK)\\b"}},o.getStartRule=function(i){return{token:"comment.doc",regex:"\\/\\*(?=\\*)",next:i}},o.getEndRule=function(i){return{token:"comment.doc",regex:"\\*\\/",next:i}},c.DocCommentHighlightRules=o}),ace.define("ace/mode/c_cpp_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/doc_comment_highlight_rules","ace/mode/text_highlight_rules"],function(e,c,h){var u=e("../lib/oop"),f=e("./doc_comment_highlight_rules").DocCommentHighlightRules,o=e("./text_highlight_rules").TextHighlightRules,i=c.cFunctions="\\b(?:hypot(?:f|l)?|s(?:scanf|ystem|nprintf|ca(?:nf|lb(?:n(?:f|l)?|ln(?:f|l)?))|i(?:n(?:h(?:f|l)?|f|l)?|gn(?:al|bit))|tr(?:s(?:tr|pn)|nc(?:py|at|mp)|c(?:spn|hr|oll|py|at|mp)|to(?:imax|d|u(?:l(?:l)?|max)|k|f|l(?:d|l)?)|error|pbrk|ftime|len|rchr|xfrm)|printf|et(?:jmp|vbuf|locale|buf)|qrt(?:f|l)?|w(?:scanf|printf)|rand)|n(?:e(?:arbyint(?:f|l)?|xt(?:toward(?:f|l)?|after(?:f|l)?))|an(?:f|l)?)|c(?:s(?:in(?:h(?:f|l)?|f|l)?|qrt(?:f|l)?)|cos(?:h(?:f)?|f|l)?|imag(?:f|l)?|t(?:ime|an(?:h(?:f|l)?|f|l)?)|o(?:s(?:h(?:f|l)?|f|l)?|nj(?:f|l)?|pysign(?:f|l)?)|p(?:ow(?:f|l)?|roj(?:f|l)?)|e(?:il(?:f|l)?|xp(?:f|l)?)|l(?:o(?:ck|g(?:f|l)?)|earerr)|a(?:sin(?:h(?:f|l)?|f|l)?|cos(?:h(?:f|l)?|f|l)?|tan(?:h(?:f|l)?|f|l)?|lloc|rg(?:f|l)?|bs(?:f|l)?)|real(?:f|l)?|brt(?:f|l)?)|t(?:ime|o(?:upper|lower)|an(?:h(?:f|l)?|f|l)?|runc(?:f|l)?|gamma(?:f|l)?|mp(?:nam|file))|i(?:s(?:space|n(?:ormal|an)|cntrl|inf|digit|u(?:nordered|pper)|p(?:unct|rint)|finite|w(?:space|c(?:ntrl|type)|digit|upper|p(?:unct|rint)|lower|al(?:num|pha)|graph|xdigit|blank)|l(?:ower|ess(?:equal|greater)?)|al(?:num|pha)|gr(?:eater(?:equal)?|aph)|xdigit|blank)|logb(?:f|l)?|max(?:div|abs))|di(?:v|fftime)|_Exit|unget(?:c|wc)|p(?:ow(?:f|l)?|ut(?:s|c(?:har)?|wc(?:har)?)|error|rintf)|e(?:rf(?:c(?:f|l)?|f|l)?|x(?:it|p(?:2(?:f|l)?|f|l|m1(?:f|l)?)?))|v(?:s(?:scanf|nprintf|canf|printf|w(?:scanf|printf))|printf|f(?:scanf|printf|w(?:scanf|printf))|w(?:scanf|printf)|a_(?:start|copy|end|arg))|qsort|f(?:s(?:canf|e(?:tpos|ek))|close|tell|open|dim(?:f|l)?|p(?:classify|ut(?:s|c|w(?:s|c))|rintf)|e(?:holdexcept|set(?:e(?:nv|xceptflag)|round)|clearexcept|testexcept|of|updateenv|r(?:aiseexcept|ror)|get(?:e(?:nv|xceptflag)|round))|flush|w(?:scanf|ide|printf|rite)|loor(?:f|l)?|abs(?:f|l)?|get(?:s|c|pos|w(?:s|c))|re(?:open|e|ad|xp(?:f|l)?)|m(?:in(?:f|l)?|od(?:f|l)?|a(?:f|l|x(?:f|l)?)?))|l(?:d(?:iv|exp(?:f|l)?)|o(?:ngjmp|cal(?:time|econv)|g(?:1(?:p(?:f|l)?|0(?:f|l)?)|2(?:f|l)?|f|l|b(?:f|l)?)?)|abs|l(?:div|abs|r(?:int(?:f|l)?|ound(?:f|l)?))|r(?:int(?:f|l)?|ound(?:f|l)?)|gamma(?:f|l)?)|w(?:scanf|c(?:s(?:s(?:tr|pn)|nc(?:py|at|mp)|c(?:spn|hr|oll|py|at|mp)|to(?:imax|d|u(?:l(?:l)?|max)|k|f|l(?:d|l)?|mbs)|pbrk|ftime|len|r(?:chr|tombs)|xfrm)|to(?:b|mb)|rtomb)|printf|mem(?:set|c(?:hr|py|mp)|move))|a(?:s(?:sert|ctime|in(?:h(?:f|l)?|f|l)?)|cos(?:h(?:f|l)?|f|l)?|t(?:o(?:i|f|l(?:l)?)|exit|an(?:h(?:f|l)?|2(?:f|l)?|f|l)?)|b(?:s|ort))|g(?:et(?:s|c(?:har)?|env|wc(?:har)?)|mtime)|r(?:int(?:f|l)?|ound(?:f|l)?|e(?:name|alloc|wind|m(?:ove|quo(?:f|l)?|ainder(?:f|l)?))|a(?:nd|ise))|b(?:search|towc)|m(?:odf(?:f|l)?|em(?:set|c(?:hr|py|mp)|move)|ktime|alloc|b(?:s(?:init|towcs|rtowcs)|towc|len|r(?:towc|len))))\\b",n=function(){var r="break|case|continue|default|do|else|for|goto|if|_Pragma|return|switch|while|catch|operator|try|throw|using",t="asm|__asm__|auto|bool|_Bool|char|_Complex|double|enum|float|_Imaginary|int|int8_t|int16_t|int32_t|int64_t|long|short|signed|size_t|struct|typedef|uint8_t|uint16_t|uint32_t|uint64_t|union|unsigned|void|class|wchar_t|template|char16_t|char32_t",l="const|extern|register|restrict|static|volatile|inline|private|protected|public|friend|explicit|virtual|export|mutable|typename|constexpr|new|delete|alignas|alignof|decltype|noexcept|thread_local",a="and|and_eq|bitand|bitor|compl|not|not_eq|or|or_eq|typeid|xor|xor_eq|const_cast|dynamic_cast|reinterpret_cast|static_cast|sizeof|namespace",d="NULL|true|false|TRUE|FALSE|nullptr",g=this.$keywords=this.createKeywordMapper({"keyword.control":r,"storage.type":t,"storage.modifier":l,"keyword.operator":a,"variable.language":"this","constant.language":d},"identifier"),s=/\\(?:['"?\\abfnrtv]|[0-7]{1,3}|x[a-fA-F\d]{2}|u[a-fA-F\d]{4}U[a-fA-F\d]{8}|.)/.source,m="%"+/(\d+\$)?/.source+/[#0\- +']*/.source+/[,;:_]?/.source+/((-?\d+)|\*(-?\d+\$)?)?/.source+/(\.((-?\d+)|\*(-?\d+\$)?)?)?/.source+/(hh|h|ll|l|j|t|z|q|L|vh|vl|v|hv|hl)?/.source+/(\[[^"\]]+\]|[diouxXDOUeEfFgGaACcSspn%])/.source;this.$rules={start:[{token:"comment",regex:"//$",next:"start"},{token:"comment",regex:"//",next:"singleLineComment"},f.getStartRule("doc-start"),{token:"comment",regex:"\\/\\*",next:"comment"},{token:"string",regex:"'(?:"+s+"|.)?'"},{token:"string.start",regex:'"',stateName:"qqstring",next:[{token:"string",regex:/\\\s*$/,next:"qqstring"},{token:"constant.language.escape",regex:s},{token:"constant.language.escape",regex:m},{token:"string.end",regex:'"|$',next:"start"},{defaultToken:"string"}]},{token:"string.start",regex:'R"\\(',stateName:"rawString",next:[{token:"string.end",regex:'\\)"',next:"start"},{defaultToken:"string"}]},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b"},{token:"keyword",regex:"#\\s*(?:include|import|pragma|line|define|undef)\\b",next:"directive"},{token:"keyword",regex:"#\\s*(?:endif|if|ifdef|else|elif|ifndef)\\b"},{token:"support.function.C99.c",regex:i},{token:g,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*"},{token:"keyword.operator",regex:/--|\+\+|<<=|>>=|>>>=|<>|&&|\|\||\?:|[*%\/+\-&\^|~!<>=]=?/},{token:"punctuation.operator",regex:"\\?|\\:|\\,|\\;|\\."},{token:"paren.lparen",regex:"[[({]"},{token:"paren.rparen",regex:"[\\])}]"},{token:"text",regex:"\\s+"}],comment:[{token:"comment",regex:"\\*\\/",next:"start"},{defaultToken:"comment"}],singleLineComment:[{token:"comment",regex:/\\$/,next:"singleLineComment"},{token:"comment",regex:/$/,next:"start"},{defaultToken:"comment"}],directive:[{token:"constant.other.multiline",regex:/\\/},{token:"constant.other.multiline",regex:/.*\\/},{token:"constant.other",regex:"\\s*<.+?>",next:"start"},{token:"constant.other",regex:'\\s*["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]',next:"start"},{token:"constant.other",regex:"\\s*['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']",next:"start"},{token:"constant.other",regex:/[^\\\/]+/,next:"start"}]},this.embedRules(f,"doc-",[f.getEndRule("start")]),this.normalizeRules()};u.inherits(n,o),c.c_cppHighlightRules=n}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(e,c,h){var u=e("../range").Range,f=function(){};(function(){this.checkOutdent=function(o,i){return/^\s+$/.test(o)?/^\s*\}/.test(i):!1},this.autoOutdent=function(o,i){var n=o.getLine(i),r=n.match(/^(\s*\})/);if(!r)return 0;var t=r[1].length,l=o.findMatchingBracket({row:i,column:t});if(!l||l.row==i)return 0;var a=this.$getIndent(o.getLine(l.row));o.replace(new u(i,0,i,t-1),a)},this.$getIndent=function(o){return o.match(/^\s*/)[0]}}).call(f.prototype),c.MatchingBraceOutdent=f}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(e,c,h){var u=e("../../lib/oop"),f=e("../../range").Range,o=e("./fold_mode").FoldMode,i=c.FoldMode=function(n){n&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+n.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+n.end)))};u.inherits(i,o),(function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(n,r,t){var l=n.getLine(t);if(this.singleLineBlockCommentRe.test(l)&&!this.startRegionRe.test(l)&&!this.tripleStarBlockCommentRe.test(l))return"";var a=this._getFoldWidgetBase(n,r,t);return!a&&this.startRegionRe.test(l)?"start":a},this.getFoldWidgetRange=function(n,r,t,l){var a=n.getLine(t);if(this.startRegionRe.test(a))return this.getCommentRegionBlock(n,a,t);var s=a.match(this.foldingStartMarker);if(s){var d=s.index;if(s[1])return this.openingBracketBlock(n,s[1],t,d);var g=n.getCommentFoldRange(t,d+s[0].length,1);return g&&!g.isMultiLine()&&(l?g=this.getSectionRange(n,t):r!="all"&&(g=null)),g}if(r!=="markbegin"){var s=a.match(this.foldingStopMarker);if(s){var d=s.index+s[0].length;return s[1]?this.closingBracketBlock(n,s[1],t,d):n.getCommentFoldRange(t,d,-1)}}},this.getSectionRange=function(n,r){var t=n.getLine(r),l=t.search(/\S/),a=r,d=t.length;r=r+1;for(var g=r,s=n.getLength();++r<s;){t=n.getLine(r);var m=t.search(/\S/);if(m!==-1){if(l>m)break;var p=this.getFoldWidgetRange(n,"all",r);if(p){if(p.start.row<=a)break;if(p.isMultiLine())r=p.end.row;else if(l==m)break}g=r}}return new f(a,d,g,n.getLine(g).length)},this.getCommentRegionBlock=function(n,r,t){for(var l=r.search(/\s*$/),a=n.getLength(),d=t,g=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,s=1;++t<a;){r=n.getLine(t);var m=g.exec(r);if(m&&(m[1]?s--:s++,!s))break}var p=t;if(p>d)return new f(d,l,p,r.length)}}).call(i.prototype)}),ace.define("ace/mode/c_cpp",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/c_cpp_highlight_rules","ace/mode/matching_brace_outdent","ace/range","ace/mode/behaviour/cstyle","ace/mode/folding/cstyle"],function(e,c,h){var u=e("../lib/oop"),f=e("./text").Mode,o=e("./c_cpp_highlight_rules").c_cppHighlightRules,i=e("./matching_brace_outdent").MatchingBraceOutdent;e("../range").Range;var n=e("./behaviour/cstyle").CstyleBehaviour,r=e("./folding/cstyle").FoldMode,t=function(){this.HighlightRules=o,this.$outdent=new i,this.$behaviour=new n,this.foldingRules=new r};u.inherits(t,f),(function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.getNextLineIndent=function(l,a,d){var g=this.$getIndent(a),s=this.getTokenizer().getLineTokens(a,l),m=s.tokens,p=s.state;if(m.length&&m[m.length-1].type=="comment")return g;if(l=="start"){var v=a.match(/^.*[\{\(\[]\s*$/);v&&(g+=d)}else if(l=="doc-start"){if(p=="start")return"";var v=a.match(/^\s*(\/?)\*/);v&&(v[1]&&(g+=" "),g+="* ")}return g},this.checkOutdent=function(l,a,d){return this.$outdent.checkOutdent(a,d)},this.autoOutdent=function(l,a,d){this.$outdent.autoOutdent(a,d)},this.$id="ace/mode/c_cpp",this.snippetFileId="ace/snippets/c_cpp"}).call(t.prototype),c.Mode=t}),ace.define("ace/mode/glsl_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/c_cpp_highlight_rules"],function(e,c,h){var u=e("../lib/oop"),f=e("./c_cpp_highlight_rules").c_cppHighlightRules,o=function(){var i="attribute|const|uniform|varying|break|continue|do|for|while|if|else|in|out|inout|float|int|void|bool|true|false|lowp|mediump|highp|precision|invariant|discard|return|mat2|mat3|mat4|vec2|vec3|vec4|ivec2|ivec3|ivec4|bvec2|bvec3|bvec4|sampler2D|samplerCube|struct",n="radians|degrees|sin|cos|tan|asin|acos|atan|pow|exp|log|exp2|log2|sqrt|inversesqrt|abs|sign|floor|ceil|fract|mod|min|max|clamp|mix|step|smoothstep|length|distance|dot|cross|normalize|faceforward|reflect|refract|matrixCompMult|lessThan|lessThanEqual|greaterThan|greaterThanEqual|equal|notEqual|any|all|not|dFdx|dFdy|fwidth|texture2D|texture2DProj|texture2DLod|texture2DProjLod|textureCube|textureCubeLod|gl_MaxVertexAttribs|gl_MaxVertexUniformVectors|gl_MaxVaryingVectors|gl_MaxVertexTextureImageUnits|gl_MaxCombinedTextureImageUnits|gl_MaxTextureImageUnits|gl_MaxFragmentUniformVectors|gl_MaxDrawBuffers|gl_DepthRangeParameters|gl_DepthRange|gl_Position|gl_PointSize|gl_FragCoord|gl_FrontFacing|gl_PointCoord|gl_FragColor|gl_FragData",r=this.createKeywordMapper({"variable.language":"this",keyword:i,"constant.language":n},"identifier");this.$rules=new f().$rules,this.$rules.start.forEach(function(t){typeof t.token=="function"&&(t.token=r)})};u.inherits(o,f),c.glslHighlightRules=o}),ace.define("ace/mode/glsl",["require","exports","module","ace/lib/oop","ace/mode/c_cpp","ace/mode/glsl_highlight_rules","ace/mode/matching_brace_outdent","ace/range","ace/mode/behaviour/cstyle","ace/mode/folding/cstyle"],function(e,c,h){var u=e("../lib/oop"),f=e("./c_cpp").Mode,o=e("./glsl_highlight_rules").glslHighlightRules,i=e("./matching_brace_outdent").MatchingBraceOutdent;e("../range").Range;var n=e("./behaviour/cstyle").CstyleBehaviour,r=e("./folding/cstyle").FoldMode,t=function(){this.HighlightRules=o,this.$outdent=new i,this.$behaviour=new n,this.foldingRules=new r};u.inherits(t,f),(function(){this.$id="ace/mode/glsl"}).call(t.prototype),c.Mode=t}),function(){ace.require(["ace/mode/glsl"],function(e){x&&(x.exports=e)})}()})(k);var b=k.exports;const w=y(b),C=R({__proto__:null,default:w},[b]);export{C as m};
