import{g as R}from"./generated-flow-imports-DCXOKDeO.js";function M(h,v){for(var n=0;n<v.length;n++){const a=v[n];if(typeof a!="string"&&!Array.isArray(a)){for(const m in a)if(m!=="default"&&!(m in h)){const d=Object.getOwnPropertyDescriptor(a,m);d&&Object.defineProperty(h,m,d.get?d:{enumerable:!0,get:()=>a[m]})}}}return Object.freeze(Object.defineProperty(h,Symbol.toStringTag,{value:"Module"}))}var x={exports:{}};(function(h,v){ace.define("ace/mode/mips_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(n,a,m){var d=n("../lib/oop"),p=n("./text_highlight_rules").TextHighlightRules,u=function(){var c=/\\(?:['"?\\abfnrtv]|[0-7]{1,3}|x[a-fA-F\d]{2}|u[a-fA-F\d]{4}U[a-fA-F\d]{8}|.)/.source;this.$rules={start:[{token:"storage.modifier.mips",regex:/\.\b(?:align|ascii|asciiz|byte|double|extern|float|globl|space|word)\b/,comment:"Assembler directives for data storage"},{token:"entity.name.section.mips",regex:/\.\b(?:data|text|kdata|ktext|)\b/,comment:"Segements: .data .text"},{token:"variable.parameter.mips",regex:/\$(?:(?:3[01]|[12]?[0-9]|[0-9])|zero|at|v[01]|a[0-3]|s[0-7]|t[0-9]|k[01]|gp|sp|fp|ra)/,comment:"Registers by id $1, $2, ..."},{token:"variable.parameter.mips",regex:/\$f(?:[0-9]|[1-2][0-9]|3[0-1])/,comment:"Floating point registers"},{token:"support.function.source.mips",regex:/\b(?:(?:add|sub|div|l|mov|mult|neg|s|c\.eq|c\.le|c\.lt)\.[ds]|cvt\.s\.[dw]|cvt\.d\.[sw]|cvt\.w\.[ds]|bc1[tf])\b/,comment:"The MIPS floating-point instruction set"},{token:"support.function.source.mips",regex:/\b(?:add|addu|addi|addiu|sub|subu|and|andi|or|not|ori|nor|xor|xori|slt|sltu|slti|sltiu|sll|sllv|rol|srl|sra|srlv|ror|j|jr|jal|beq|bne|lw|sw|lb|sb|lui|move|mfhi|mflo|mthi|mtlo)\b/,comment:"Just the hardcoded instructions provided by the MIPS assembly language"},{token:"support.function.other.mips",regex:/\b(?:abs|b|beqz|bge|bgt|bgtu|ble|bleu|blt|bltu|bnez|div|divu|la|li|move|mul|neg|not|rem|remu|seq|sge|sgt|sle|sne)\b/,comment:"Pseudo instructions"},{token:"entity.name.function.mips",regex:/\bsyscall\b/,comment:"Other"},{token:"string",regex:`(?:'")(?:`+c+`|.)?(?:'")`},{token:"string.start",regex:"'",stateName:"qstring",next:[{token:"string",regex:/\\\s*$/,next:"qqstring"},{token:"constant.language.escape",regex:c},{token:"string.end",regex:"'|$",next:"start"},{defaultToken:"string"}]},{token:"string.start",regex:'"',stateName:"qqstring",next:[{token:"string",regex:/\\\s*$/,next:"qqstring"},{token:"constant.language.escape",regex:c},{token:"string.end",regex:'"|$',next:"start"},{defaultToken:"string"}]},{token:"constant.numeric.mips",regex:/\b(?:\d+|0(?:x|X)[a-fA-F0-9]+)\b/,comment:"Numbers like +12, -3, 55, 0x3F"},{token:"entity.name.tag.mips",regex:/\b[\w]+\b:/,comment:"Labels at line start: begin_repeat: add ..."},{token:"comment.assembly",regex:/#.*$/,comment:"Single line comments"}]},this.normalizeRules()};u.metaData={fileTypes:["s","asm"],name:"MIPS",scopeName:"source.mips"},d.inherits(u,p),a.MIPSHighlightRules=u}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(n,a,m){var d=n("../../lib/oop"),p=n("../../range").Range,u=n("./fold_mode").FoldMode,c=a.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};d.inherits(c,u),(function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,i){var s=e.getLine(i);if(this.singleLineBlockCommentRe.test(s)&&!this.startRegionRe.test(s)&&!this.tripleStarBlockCommentRe.test(s))return"";var o=this._getFoldWidgetBase(e,t,i);return!o&&this.startRegionRe.test(s)?"start":o},this.getFoldWidgetRange=function(e,t,i,s){var o=e.getLine(i);if(this.startRegionRe.test(o))return this.getCommentRegionBlock(e,o,i);var r=o.match(this.foldingStartMarker);if(r){var g=r.index;if(r[1])return this.openingBracketBlock(e,r[1],i,g);var l=e.getCommentFoldRange(i,g+r[0].length,1);return l&&!l.isMultiLine()&&(s?l=this.getSectionRange(e,i):t!="all"&&(l=null)),l}if(t!=="markbegin"){var r=o.match(this.foldingStopMarker);if(r){var g=r.index+r[0].length;return r[1]?this.closingBracketBlock(e,r[1],i,g):e.getCommentFoldRange(i,g,-1)}}},this.getSectionRange=function(e,t){var i=e.getLine(t),s=i.search(/\S/),o=t,g=i.length;t=t+1;for(var l=t,r=e.getLength();++t<r;){i=e.getLine(t);var b=i.search(/\S/);if(b!==-1){if(s>b)break;var f=this.getFoldWidgetRange(e,"all",t);if(f){if(f.start.row<=o)break;if(f.isMultiLine())t=f.end.row;else if(s==b)break}l=t}}return new p(o,g,l,e.getLine(l).length)},this.getCommentRegionBlock=function(e,t,i){for(var s=t.search(/\s*$/),o=e.getLength(),g=i,l=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,r=1;++i<o;){t=e.getLine(i);var b=l.exec(t);if(b&&(b[1]?r--:r++,!r))break}var f=i;if(f>g)return new p(g,s,f,t.length)}}).call(c.prototype)}),ace.define("ace/mode/mips",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/mips_highlight_rules","ace/mode/folding/cstyle"],function(n,a,m){var d=n("../lib/oop"),p=n("./text").Mode,u=n("./mips_highlight_rules").MIPSHighlightRules,c=n("./folding/cstyle").FoldMode,e=function(){this.HighlightRules=u,this.foldingRules=new c};d.inherits(e,p),(function(){this.lineCommentStart=["#"],this.$id="ace/mode/mips"}).call(e.prototype),a.Mode=e}),function(){ace.require(["ace/mode/mips"],function(n){h&&(h.exports=n)})}()})(x);var k=x.exports;const S=R(k),F=M({__proto__:null,default:S},[k]);export{F as m};
