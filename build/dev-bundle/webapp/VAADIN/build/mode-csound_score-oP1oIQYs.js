import{g as m}from"./generated-flow-imports-DCXOKDeO.js";function f(a,l){for(var t=0;t<l.length;t++){const o=l[t];if(typeof o!="string"&&!Array.isArray(o)){for(const i in o)if(i!=="default"&&!(i in a)){const s=Object.getOwnPropertyDescriptor(o,i);s&&Object.defineProperty(a,i,s.get?s:{enumerable:!0,get:()=>o[i]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var h={exports:{}};(function(a,l){ace.define("ace/mode/csound_preprocessor_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(t,o,i){var s=t("../lib/oop"),d=t("./text_highlight_rules").TextHighlightRules,c=function(e){this.embeddedRulePrefix=e===void 0?"":e,this.semicolonComments={token:"comment.line.semicolon.csound",regex:";.*$"},this.comments=[{token:"punctuation.definition.comment.begin.csound",regex:"/\\*",push:[{token:"punctuation.definition.comment.end.csound",regex:"\\*/",next:"pop"},{defaultToken:"comment.block.csound"}]},{token:"comment.line.double-slash.csound",regex:"//.*$"},this.semicolonComments],this.macroUses=[{token:["entity.name.function.preprocessor.csound","punctuation.definition.macro-parameter-value-list.begin.csound"],regex:/(\$[A-Z_a-z]\w*\.?)(\()/,next:"macro parameter value list"},{token:"entity.name.function.preprocessor.csound",regex:/\$[A-Z_a-z]\w*(?:\.|\b)/}],this.numbers=[{token:"constant.numeric.float.csound",regex:/(?:\d+[Ee][+-]?\d+)|(?:\d+\.\d*|\d*\.\d+)(?:[Ee][+-]?\d+)?/},{token:["storage.type.number.csound","constant.numeric.integer.hexadecimal.csound"],regex:/(0[Xx])([0-9A-Fa-f]+)/},{token:"constant.numeric.integer.decimal.csound",regex:/\d+/}],this.bracedStringContents=[{token:"constant.character.escape.csound",regex:/\\(?:[\\abnrt"]|[0-7]{1,3})/},{token:"constant.character.placeholder.csound",regex:/%[#0\- +]*\d*(?:\.\d+)?[diuoxXfFeEgGaAcs]/},{token:"constant.character.escape.csound",regex:/%%/}],this.quotedStringContents=[this.macroUses,this.bracedStringContents];var n=[this.comments,{token:"keyword.preprocessor.csound",regex:/#(?:e(?:nd(?:if)?|lse)\b|##)|@@?[ \t]*\d+/},{token:"keyword.preprocessor.csound",regex:/#include/,push:[this.comments,{token:"string.csound",regex:/([^ \t])(?:.*?\1)/,next:"pop"}]},{token:"keyword.preprocessor.csound",regex:/#includestr/,push:[this.comments,{token:"string.csound",regex:/([^ \t])(?:.*?\1)/,next:"pop"}]},{token:"keyword.preprocessor.csound",regex:/#[ \t]*define/,next:"define directive"},{token:"keyword.preprocessor.csound",regex:/#(?:ifn?def|undef)\b/,next:"macro directive"},this.macroUses];this.$rules={start:n,"define directive":[this.comments,{token:"entity.name.function.preprocessor.csound",regex:/[A-Z_a-z]\w*/},{token:"punctuation.definition.macro-parameter-name-list.begin.csound",regex:/\(/,next:"macro parameter name list"},{token:"punctuation.definition.macro.begin.csound",regex:/#/,next:"macro body"}],"macro parameter name list":[{token:"variable.parameter.preprocessor.csound",regex:/[A-Z_a-z]\w*/},{token:"punctuation.definition.macro-parameter-name-list.end.csound",regex:/\)/,next:"define directive"}],"macro body":[{token:"constant.character.escape.csound",regex:/\\#/},{token:"punctuation.definition.macro.end.csound",regex:/#/,next:"start"},n],"macro directive":[this.comments,{token:"entity.name.function.preprocessor.csound",regex:/[A-Z_a-z]\w*/,next:"start"}],"macro parameter value list":[{token:"punctuation.definition.macro-parameter-value-list.end.csound",regex:/\)/,next:"start"},{token:"punctuation.definition.string.begin.csound",regex:/"/,next:"macro parameter value quoted string"},this.pushRule({token:"punctuation.macro-parameter-value-parenthetical.begin.csound",regex:/\(/,next:"macro parameter value parenthetical"}),{token:"punctuation.macro-parameter-value-separator.csound",regex:"[#']"}],"macro parameter value quoted string":[{token:"constant.character.escape.csound",regex:/\\[#'()]/},{token:"invalid.illegal.csound",regex:/[#'()]/},{token:"punctuation.definition.string.end.csound",regex:/"/,next:"macro parameter value list"},this.quotedStringContents,{defaultToken:"string.quoted.csound"}],"macro parameter value parenthetical":[{token:"constant.character.escape.csound",regex:/\\\)/},this.popRule({token:"punctuation.macro-parameter-value-parenthetical.end.csound",regex:/\)/}),this.pushRule({token:"punctuation.macro-parameter-value-parenthetical.begin.csound",regex:/\(/,next:"macro parameter value parenthetical"}),n]}};s.inherits(c,d),(function(){this.pushRule=function(e){if(Array.isArray(e.next))for(var n=0;n<e.next.length;n++)e.next[n]=this.embeddedRulePrefix+e.next[n];return{regex:e.regex,onMatch:function(g,r,u,b){if(u.length===0&&u.push(r),Array.isArray(e.next))for(var p=0;p<e.next.length;p++)u.push(e.next[p]);else u.push(e.next);return this.next=u[u.length-1],e.token},get next(){return Array.isArray(e.next)?e.next[e.next.length-1]:e.next},set next(g){Array.isArray(e.next)||(e.next=g)},get token(){return e.token}}},this.popRule=function(e){return e.next&&(e.next=this.embeddedRulePrefix+e.next),{regex:e.regex,onMatch:function(n,g,r,u){return r.pop(),e.next?(r.push(e.next),this.next=r[r.length-1]):this.next=r.length>1?r[r.length-1]:r.pop(),e.token}}}}).call(c.prototype),o.CsoundPreprocessorHighlightRules=c}),ace.define("ace/mode/csound_score_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/csound_preprocessor_highlight_rules"],function(t,o,i){var s=t("../lib/oop"),d=t("./csound_preprocessor_highlight_rules").CsoundPreprocessorHighlightRules,c=function(e){d.call(this,e),this.quotedStringContents.push({token:"invalid.illegal.csound-score",regex:/[^"]*$/});var n=this.$rules.start;n.push({token:"keyword.control.csound-score",regex:/[aBbCdefiqstvxy]/},{token:"invalid.illegal.csound-score",regex:/w/},{token:"constant.numeric.language.csound-score",regex:/z/},{token:["keyword.control.csound-score","constant.numeric.integer.decimal.csound-score"],regex:/([nNpP][pP])(\d+)/},{token:"keyword.other.csound-score",regex:/[mn]/,push:[{token:"empty",regex:/$/,next:"pop"},this.comments,{token:"entity.name.label.csound-score",regex:/[A-Z_a-z]\w*/}]},{token:"keyword.preprocessor.csound-score",regex:/r\b/,next:"repeat section"},this.numbers,{token:"keyword.operator.csound-score",regex:"[!+\\-*/^%&|<>#~.]"},this.pushRule({token:"punctuation.definition.string.begin.csound-score",regex:/"/,next:"quoted string"}),this.pushRule({token:"punctuation.braced-loop.begin.csound-score",regex:/{/,next:"loop after left brace"})),this.addRules({"repeat section":[{token:"empty",regex:/$/,next:"start"},this.comments,{token:"constant.numeric.integer.decimal.csound-score",regex:/\d+/,next:"repeat section before label"}],"repeat section before label":[{token:"empty",regex:/$/,next:"start"},this.comments,{token:"entity.name.label.csound-score",regex:/[A-Z_a-z]\w*/,next:"start"}],"quoted string":[this.popRule({token:"punctuation.definition.string.end.csound-score",regex:/"/}),this.quotedStringContents,{defaultToken:"string.quoted.csound-score"}],"loop after left brace":[this.popRule({token:"constant.numeric.integer.decimal.csound-score",regex:/\d+/,next:"loop after repeat count"}),this.comments,{token:"invalid.illegal.csound",regex:/\S.*/}],"loop after repeat count":[this.popRule({token:"entity.name.function.preprocessor.csound-score",regex:/[A-Z_a-z]\w*\b/,next:"loop after macro name"}),this.comments,{token:"invalid.illegal.csound",regex:/\S.*/}],"loop after macro name":[n,this.popRule({token:"punctuation.braced-loop.end.csound-score",regex:/}/})]}),this.normalizeRules()};s.inherits(c,d),o.CsoundScoreHighlightRules=c}),ace.define("ace/mode/csound_score",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/csound_score_highlight_rules"],function(t,o,i){var s=t("../lib/oop"),d=t("./text").Mode,c=t("./csound_score_highlight_rules").CsoundScoreHighlightRules,e=function(){this.HighlightRules=c};s.inherits(e,d),(function(){this.lineCommentStart=";",this.blockComment={start:"/*",end:"*/"},this.$id="ace/mode/csound_score"}).call(e.prototype),o.Mode=e}),function(){ace.require(["ace/mode/csound_score"],function(t){a&&(a.exports=t)})}()})(h);var x=h.exports;const k=m(x),_=f({__proto__:null,default:k},[x]);export{_ as m};
