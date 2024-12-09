import{g as w}from"./generated-flow-imports-DCXOKDeO.js";function R(x,f){for(var n=0;n<f.length;n++){const d=f[n];if(typeof d!="string"&&!Array.isArray(d)){for(const h in d)if(h!=="default"&&!(h in x)){const u=Object.getOwnPropertyDescriptor(d,h);u&&Object.defineProperty(x,h,u.get?u:{enumerable:!0,get:()=>d[h]})}}}return Object.freeze(Object.defineProperty(x,Symbol.toStringTag,{value:"Module"}))}var y={exports:{}};(function(x,f){ace.define("ace/mode/vala_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(n,d,h){var u=n("../lib/oop"),v=n("./text_highlight_rules").TextHighlightRules,l=function(){this.$rules={start:[{token:["meta.using.vala","keyword.other.using.vala","meta.using.vala","storage.modifier.using.vala","meta.using.vala","punctuation.terminator.vala"],regex:"^(\\s*)(using)\\b(?:(\\s*)([^ ;$]+)(\\s*)((?:;)?))?"},{include:"#code"}],"#all-types":[{include:"#primitive-arrays"},{include:"#primitive-types"},{include:"#object-types"}],"#annotations":[{token:["storage.type.annotation.vala","punctuation.definition.annotation-arguments.begin.vala"],regex:"(@[^ (]+)(\\()",push:[{token:"punctuation.definition.annotation-arguments.end.vala",regex:"\\)",next:"pop"},{token:["constant.other.key.vala","text","keyword.operator.assignment.vala"],regex:"(\\w*)(\\s*)(=)"},{include:"#code"},{token:"punctuation.seperator.property.vala",regex:","},{defaultToken:"meta.declaration.annotation.vala"}]},{token:"storage.type.annotation.vala",regex:"@\\w*"}],"#anonymous-classes-and-new":[{token:"keyword.control.new.vala",regex:"\\bnew\\b",push_disabled:[{token:"text",regex:"(?<=\\)|\\])(?!\\s*{)|(?<=})|(?=;)",TODO:"FIXME: regexp doesn't have js equivalent",originalRegex:"(?<=\\)|\\])(?!\\s*{)|(?<=})|(?=;)",next:"pop"},{token:["storage.type.vala","text"],regex:"(\\w+)(\\s*)(?=\\[)",push:[{token:"text",regex:"}|(?=;|\\))",next:"pop"},{token:"text",regex:"\\[",push:[{token:"text",regex:"\\]",next:"pop"},{include:"#code"}]},{token:"text",regex:"{",push:[{token:"text",regex:"(?=})",next:"pop"},{include:"#code"}]}]},{token:"text",regex:"(?=\\w.*\\()",push:[{token:"text",regex:"(?<=\\))",TODO:"FIXME: regexp doesn't have js equivalent",originalRegex:"(?<=\\))",next:"pop"},{include:"#object-types"},{token:"text",regex:"\\(",push:[{token:"text",regex:"\\)",next:"pop"},{include:"#code"}]}]},{token:"meta.inner-class.vala",regex:"{",push:[{token:"meta.inner-class.vala",regex:"}",next:"pop"},{include:"#class-body"},{defaultToken:"meta.inner-class.vala"}]}]}],"#assertions":[{token:["keyword.control.assert.vala","meta.declaration.assertion.vala"],regex:"\\b(assert|requires|ensures)(\\s)",push:[{token:"meta.declaration.assertion.vala",regex:"$",next:"pop"},{token:"keyword.operator.assert.expression-seperator.vala",regex:":"},{include:"#code"},{defaultToken:"meta.declaration.assertion.vala"}]}],"#class":[{token:"meta.class.vala",regex:"(?=\\w?[\\w\\s]*(?:class|(?:@)?interface|enum|struct|namespace)\\s+\\w+)",push:[{token:"paren.vala",regex:"}",next:"pop"},{include:"#storage-modifiers"},{include:"#comments"},{token:["storage.modifier.vala","meta.class.identifier.vala","entity.name.type.class.vala"],regex:"(class|(?:@)?interface|enum|struct|namespace)(\\s+)([\\w\\.]+)"},{token:"storage.modifier.extends.vala",regex:":",push:[{token:"meta.definition.class.inherited.classes.vala",regex:"(?={|,)",next:"pop"},{include:"#object-types-inherited"},{include:"#comments"},{defaultToken:"meta.definition.class.inherited.classes.vala"}]},{token:["storage.modifier.implements.vala","meta.definition.class.implemented.interfaces.vala"],regex:"(,)(\\s)",push:[{token:"meta.definition.class.implemented.interfaces.vala",regex:"(?=\\{)",next:"pop"},{include:"#object-types-inherited"},{include:"#comments"},{defaultToken:"meta.definition.class.implemented.interfaces.vala"}]},{token:"paren.vala",regex:"{",push:[{token:"paren.vala",regex:"(?=})",next:"pop"},{include:"#class-body"},{defaultToken:"meta.class.body.vala"}]},{defaultToken:"meta.class.vala"}],comment:"attempting to put namespace in here."}],"#class-body":[{include:"#comments"},{include:"#class"},{include:"#enums"},{include:"#methods"},{include:"#annotations"},{include:"#storage-modifiers"},{include:"#code"}],"#code":[{include:"#comments"},{include:"#class"},{token:"text",regex:"{",push:[{token:"text",regex:"}",next:"pop"},{include:"#code"}]},{include:"#assertions"},{include:"#parens"},{include:"#constants-and-special-vars"},{include:"#anonymous-classes-and-new"},{include:"#keywords"},{include:"#storage-modifiers"},{include:"#strings"},{include:"#all-types"}],"#comments":[{token:"punctuation.definition.comment.vala",regex:"/\\*\\*/"},{include:"text.html.javadoc"},{include:"#comments-inline"}],"#comments-inline":[{token:"punctuation.definition.comment.vala",regex:"/\\*",push:[{token:"punctuation.definition.comment.vala",regex:"\\*/",next:"pop"},{defaultToken:"comment.block.vala"}]},{token:["text","punctuation.definition.comment.vala","comment.line.double-slash.vala"],regex:"(\\s*)(//)(.*$)"}],"#constants-and-special-vars":[{token:"constant.language.vala",regex:"\\b(?:true|false|null)\\b"},{token:"variable.language.vala",regex:"\\b(?:this|base)\\b"},{token:"constant.numeric.vala",regex:"\\b(?:0(?:x|X)[0-9a-fA-F]*|(?:[0-9]+\\.?[0-9]*|\\.[0-9]+)(?:(?:e|E)(?:\\+|-)?[0-9]+)?)(?:[LlFfUuDd]|UL|ul)?\\b"},{token:["keyword.operator.dereference.vala","constant.other.vala"],regex:"((?:\\.)?)\\b([A-Z][A-Z0-9_]+)(?!<|\\.class|\\s*\\w+\\s*=)\\b"}],"#enums":[{token:"text",regex:"^(?=\\s*[A-Z0-9_]+\\s*(?:{|\\(|,))",push:[{token:"text",regex:"(?=;|})",next:"pop"},{token:"constant.other.enum.vala",regex:"\\w+",push:[{token:"meta.enum.vala",regex:"(?=,|;|})",next:"pop"},{include:"#parens"},{token:"text",regex:"{",push:[{token:"text",regex:"}",next:"pop"},{include:"#class-body"}]},{defaultToken:"meta.enum.vala"}]}]}],"#keywords":[{token:"keyword.control.catch-exception.vala",regex:"\\b(?:try|catch|finally|throw)\\b"},{token:"keyword.control.vala",regex:"\\?|:|\\?\\?"},{token:"keyword.control.vala",regex:"\\b(?:return|break|case|continue|default|do|while|for|foreach|switch|if|else|in|yield|get|set|value)\\b"},{token:"keyword.operator.vala",regex:"\\b(?:typeof|is|as)\\b"},{token:"keyword.operator.comparison.vala",regex:"==|!=|<=|>=|<>|<|>"},{token:"keyword.operator.assignment.vala",regex:"="},{token:"keyword.operator.increment-decrement.vala",regex:"\\-\\-|\\+\\+"},{token:"keyword.operator.arithmetic.vala",regex:"\\-|\\+|\\*|\\/|%"},{token:"keyword.operator.logical.vala",regex:"!|&&|\\|\\|"},{token:"keyword.operator.dereference.vala",regex:"\\.(?=\\S)",originalRegex:"(?<=\\S)\\.(?=\\S)"},{token:"punctuation.terminator.vala",regex:";"},{token:"keyword.operator.ownership",regex:"owned|unowned"}],"#methods":[{token:"meta.method.vala",regex:"(?!new)(?=\\w.*\\s+)(?=[^=]+\\()",push:[{token:"paren.vala",regex:"}|(?=;)",next:"pop"},{include:"#storage-modifiers"},{token:["entity.name.function.vala","meta.method.identifier.vala"],regex:"([\\~\\w\\.]+)(\\s*\\()",push:[{token:"meta.method.identifier.vala",regex:"\\)",next:"pop"},{include:"#parameters"},{defaultToken:"meta.method.identifier.vala"}]},{token:"meta.method.return-type.vala",regex:"(?=\\w.*\\s+\\w+\\s*\\()",push:[{token:"meta.method.return-type.vala",regex:"(?=\\w+\\s*\\()",next:"pop"},{include:"#all-types"},{defaultToken:"meta.method.return-type.vala"}]},{include:"#throws"},{token:"paren.vala",regex:"{",push:[{token:"paren.vala",regex:"(?=})",next:"pop"},{include:"#code"},{defaultToken:"meta.method.body.vala"}]},{defaultToken:"meta.method.vala"}]}],"#namespace":[{token:"text",regex:"^(?=\\s*[A-Z0-9_]+\\s*(?:{|\\(|,))",push:[{token:"text",regex:"(?=;|})",next:"pop"},{token:"constant.other.namespace.vala",regex:"\\w+",push:[{token:"meta.namespace.vala",regex:"(?=,|;|})",next:"pop"},{include:"#parens"},{token:"text",regex:"{",push:[{token:"text",regex:"}",next:"pop"},{include:"#code"}]},{defaultToken:"meta.namespace.vala"}]}],comment:"This is not quite right. See the class grammar right now"}],"#object-types":[{token:"storage.type.generic.vala",regex:"\\b(?:[a-z]\\w*\\.)*[A-Z]+\\w*<",push:[{token:"storage.type.generic.vala",regex:">|[^\\w\\s,\\?<\\[()\\]]",TODO:"FIXME: regexp doesn't have js equivalent",originalRegex:">|[^\\w\\s,\\?<\\[(?:[,]+)\\]]",next:"pop"},{include:"#object-types"},{token:"storage.type.generic.vala",regex:"<",push:[{token:"storage.type.generic.vala",regex:">|[^\\w\\s,\\[\\]<]",next:"pop"},{defaultToken:"storage.type.generic.vala"}],comment:"This is just to support <>'s with no actual type prefix"},{defaultToken:"storage.type.generic.vala"}]},{token:"storage.type.object.array.vala",regex:"\\b(?:[a-z]\\w*\\.)*[A-Z]+\\w*(?=\\[)",push:[{token:"storage.type.object.array.vala",regex:"(?=[^\\]\\s])",next:"pop"},{token:"text",regex:"\\[",push:[{token:"text",regex:"\\]",next:"pop"},{include:"#code"}]},{defaultToken:"storage.type.object.array.vala"}]},{token:["storage.type.vala","keyword.operator.dereference.vala","storage.type.vala"],regex:"\\b(?:([a-z]\\w*)(\\.))*([A-Z]+\\w*\\b)"}],"#object-types-inherited":[{token:"entity.other.inherited-class.vala",regex:"\\b(?:[a-z]\\w*\\.)*[A-Z]+\\w*<",push:[{token:"entity.other.inherited-class.vala",regex:">|[^\\w\\s,<]",next:"pop"},{include:"#object-types"},{token:"storage.type.generic.vala",regex:"<",push:[{token:"storage.type.generic.vala",regex:">|[^\\w\\s,<]",next:"pop"},{defaultToken:"storage.type.generic.vala"}],comment:"This is just to support <>'s with no actual type prefix"},{defaultToken:"entity.other.inherited-class.vala"}]},{token:["entity.other.inherited-class.vala","keyword.operator.dereference.vala","entity.other.inherited-class.vala"],regex:"\\b(?:([a-z]\\w*)(\\.))*([A-Z]+\\w*)"}],"#parameters":[{token:"storage.modifier.vala",regex:"final"},{include:"#primitive-arrays"},{include:"#primitive-types"},{include:"#object-types"},{token:"variable.parameter.vala",regex:"\\w+"}],"#parens":[{token:"text",regex:"\\(",push:[{token:"text",regex:"\\)",next:"pop"},{include:"#code"}]}],"#primitive-arrays":[{token:"storage.type.primitive.array.vala",regex:"\\b(?:bool|byte|sbyte|char|decimal|double|float|int|uint|long|ulong|object|short|ushort|string|void|int8|int16|int32|int64|uint8|uint16|uint32|uint64)(?:\\[\\])*\\b"}],"#primitive-types":[{token:"storage.type.primitive.vala",regex:"\\b(?:var|bool|byte|sbyte|char|decimal|double|float|int|uint|long|ulong|object|short|ushort|string|void|signal|int8|int16|int32|int64|uint8|uint16|uint32|uint64)\\b",comment:"var is not really a primitive, but acts like one in most cases"}],"#storage-modifiers":[{token:"storage.modifier.vala",regex:"\\b(?:public|private|protected|internal|static|final|sealed|virtual|override|abstract|readonly|volatile|dynamic|async|unsafe|out|ref|weak|owned|unowned|const)\\b",comment:"Not sure about unsafe and readonly"}],"#strings":[{token:"punctuation.definition.string.begin.vala",regex:'@"',push:[{token:"punctuation.definition.string.end.vala",regex:'"',next:"pop"},{token:"constant.character.escape.vala",regex:"\\\\.|%[\\w\\.\\-]+|\\$(?:\\w+|\\([\\w\\s\\+\\-\\*\\/]+\\))"},{defaultToken:"string.quoted.interpolated.vala"}]},{token:"punctuation.definition.string.begin.vala",regex:'"',push:[{token:"punctuation.definition.string.end.vala",regex:'"',next:"pop"},{token:"constant.character.escape.vala",regex:"\\\\."},{token:"constant.character.escape.vala",regex:"%[\\w\\.\\-]+"},{defaultToken:"string.quoted.double.vala"}]},{token:"punctuation.definition.string.begin.vala",regex:"'",push:[{token:"punctuation.definition.string.end.vala",regex:"'",next:"pop"},{token:"constant.character.escape.vala",regex:"\\\\."},{defaultToken:"string.quoted.single.vala"}]},{token:"punctuation.definition.string.begin.vala",regex:'"""',push:[{token:"punctuation.definition.string.end.vala",regex:'"""',next:"pop"},{token:"constant.character.escape.vala",regex:"%[\\w\\.\\-]+"},{defaultToken:"string.quoted.triple.vala"}]}],"#throws":[{token:"storage.modifier.vala",regex:"throws",push:[{token:"meta.throwables.vala",regex:"(?={|;)",next:"pop"},{include:"#object-types"},{defaultToken:"meta.throwables.vala"}]}],"#values":[{include:"#strings"},{include:"#object-types"},{include:"#constants-and-special-vars"}]},this.normalizeRules()};l.metaData={comment:`Based heavily on the Java bundle's language syntax. TODO:
* Closures
* Delegates
* Properties: Better support for properties.
* Annotations
* Error domains
* Named arguments
* Array slicing, negative indexes, multidimensional
* construct blocks
* lock blocks?
* regex literals
* DocBlock syntax highlighting. (Currently importing javadoc)
* Folding rule for comments.
`,fileTypes:["vala"],foldingStartMarker:"(\\{\\s*(//.*)?$|^\\s*// \\{\\{\\{)",foldingStopMarker:"^\\s*(\\}|// \\}\\}\\}$)",name:"Vala",scopeName:"source.vala"},u.inherits(l,v),d.ValaHighlightRules=l}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(n,d,h){var u=n("../../lib/oop"),v=n("../../range").Range,l=n("./fold_mode").FoldMode,g=d.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};u.inherits(g,l),(function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,a,t){var r=e.getLine(t);if(this.singleLineBlockCommentRe.test(r)&&!this.startRegionRe.test(r)&&!this.tripleStarBlockCommentRe.test(r))return"";var o=this._getFoldWidgetBase(e,a,t);return!o&&this.startRegionRe.test(r)?"start":o},this.getFoldWidgetRange=function(e,a,t,r){var o=e.getLine(t);if(this.startRegionRe.test(o))return this.getCommentRegionBlock(e,o,t);var i=o.match(this.foldingStartMarker);if(i){var c=i.index;if(i[1])return this.openingBracketBlock(e,i[1],t,c);var s=e.getCommentFoldRange(t,c+i[0].length,1);return s&&!s.isMultiLine()&&(r?s=this.getSectionRange(e,t):a!="all"&&(s=null)),s}if(a!=="markbegin"){var i=o.match(this.foldingStopMarker);if(i){var c=i.index+i[0].length;return i[1]?this.closingBracketBlock(e,i[1],t,c):e.getCommentFoldRange(t,c,-1)}}},this.getSectionRange=function(e,a){var t=e.getLine(a),r=t.search(/\S/),o=a,c=t.length;a=a+1;for(var s=a,i=e.getLength();++a<i;){t=e.getLine(a);var p=t.search(/\S/);if(p!==-1){if(r>p)break;var m=this.getFoldWidgetRange(e,"all",a);if(m){if(m.start.row<=o)break;if(m.isMultiLine())a=m.end.row;else if(r==p)break}s=a}}return new v(o,c,s,e.getLine(s).length)},this.getCommentRegionBlock=function(e,a,t){for(var r=a.search(/\s*$/),o=e.getLength(),c=t,s=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,i=1;++t<o;){a=e.getLine(t);var p=s.exec(a);if(p&&(p[1]?i--:i++,!i))break}var m=t;if(m>c)return new v(c,r,m,a.length)}}).call(g.prototype)}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(n,d,h){var u=n("../range").Range,v=function(){};(function(){this.checkOutdent=function(l,g){return/^\s+$/.test(l)?/^\s*\}/.test(g):!1},this.autoOutdent=function(l,g){var e=l.getLine(g),a=e.match(/^(\s*\})/);if(!a)return 0;var t=a[1].length,r=l.findMatchingBracket({row:g,column:t});if(!r||r.row==g)return 0;var o=this.$getIndent(l.getLine(r.row));l.replace(new u(g,0,g,t-1),o)},this.$getIndent=function(l){return l.match(/^\s*/)[0]}}).call(v.prototype),d.MatchingBraceOutdent=v}),ace.define("ace/mode/vala",["require","exports","module","ace/lib/oop","ace/mode/text","ace/tokenizer","ace/mode/vala_highlight_rules","ace/mode/folding/cstyle","ace/mode/behaviour/cstyle","ace/mode/folding/cstyle","ace/mode/matching_brace_outdent"],function(n,d,h){var u=n("../lib/oop"),v=n("./text").Mode;n("../tokenizer").Tokenizer;var l=n("./vala_highlight_rules").ValaHighlightRules;n("./folding/cstyle").FoldMode;var g=n("./behaviour/cstyle").CstyleBehaviour,e=n("./folding/cstyle").FoldMode,a=n("./matching_brace_outdent").MatchingBraceOutdent,t=function(){this.HighlightRules=l,this.$outdent=new a,this.$behaviour=new g,this.foldingRules=new e};u.inherits(t,v),(function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.getNextLineIndent=function(r,o,c){var s=this.$getIndent(o),i=this.getTokenizer().getLineTokens(o,r),p=i.tokens,m=i.state;if(p.length&&p[p.length-1].type=="comment")return s;if(r=="start"||r=="no_regex"){var k=o.match(/^.*(?:\bcase\b.*:|[\{\(\[])\s*$/);k&&(s+=c)}else if(r=="doc-start"){if(m=="start"||m=="no_regex")return"";var k=o.match(/^\s*(\/?)\*/);k&&(k[1]&&(s+=" "),s+="* ")}return s},this.checkOutdent=function(r,o,c){return this.$outdent.checkOutdent(o,c)},this.autoOutdent=function(r,o,c){this.$outdent.autoOutdent(o,c)},this.$id="ace/mode/vala",this.snippetFileId="ace/snippets/vala"}).call(t.prototype),d.Mode=t}),function(){ace.require(["ace/mode/vala"],function(n){x&&(x.exports=n)})}()})(y);var b=y.exports;const T=w(b),_=R({__proto__:null,default:T},[b]);export{_ as m};
