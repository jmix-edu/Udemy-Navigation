import{g as b}from"./generated-flow-imports-DCXOKDeO.js";function l(r,t){for(var e=0;e<t.length;e++){const n=t[e];if(typeof n!="string"&&!Array.isArray(n)){for(const a in n)if(a!=="default"&&!(a in r)){const c=Object.getOwnPropertyDescriptor(n,a);c&&Object.defineProperty(r,a,c.get?c:{enumerable:!0,get:()=>n[a]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var i={exports:{}};(function(r,t){ace.define("ace/theme/vibrant_ink.css",["require","exports","module"],function(e,n,a){a.exports=`.ace-vibrant-ink .ace_gutter {
  background: #1a1a1a;
  color: #BEBEBE
}

.ace-vibrant-ink .ace_print-margin {
  width: 1px;
  background: #1a1a1a
}

.ace-vibrant-ink {
  background-color: #0F0F0F;
  color: #FFFFFF
}

.ace-vibrant-ink .ace_cursor {
  color: #FFFFFF
}

.ace-vibrant-ink .ace_marker-layer .ace_selection {
  background: #6699CC
}

.ace-vibrant-ink.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #0F0F0F;
}

.ace-vibrant-ink .ace_marker-layer .ace_step {
  background: rgb(102, 82, 0)
}

.ace-vibrant-ink .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #404040
}

.ace-vibrant-ink .ace_marker-layer .ace_active-line {
  background: #333333
}

.ace-vibrant-ink .ace_gutter-active-line {
  background-color: #333333
}

.ace-vibrant-ink .ace_marker-layer .ace_selected-word {
  border: 1px solid #6699CC
}

.ace-vibrant-ink .ace_invisible {
  color: #404040
}

.ace-vibrant-ink .ace_keyword,
.ace-vibrant-ink .ace_meta {
  color: #FF6600
}

.ace-vibrant-ink .ace_constant,
.ace-vibrant-ink .ace_constant.ace_character,
.ace-vibrant-ink .ace_constant.ace_character.ace_escape,
.ace-vibrant-ink .ace_constant.ace_other {
  color: #339999
}

.ace-vibrant-ink .ace_constant.ace_numeric {
  color: #99CC99
}

.ace-vibrant-ink .ace_invalid,
.ace-vibrant-ink .ace_invalid.ace_deprecated {
  color: #CCFF33;
  background-color: #000000
}

.ace-vibrant-ink .ace_fold {
  background-color: #FFCC00;
  border-color: #FFFFFF
}

.ace-vibrant-ink .ace_entity.ace_name.ace_function,
.ace-vibrant-ink .ace_support.ace_function,
.ace-vibrant-ink .ace_variable {
  color: #FFCC00
}

.ace-vibrant-ink .ace_variable.ace_parameter {
  font-style: italic
}

.ace-vibrant-ink .ace_string {
  color: #66FF00
}

.ace-vibrant-ink .ace_string.ace_regexp {
  color: #44B4CC
}

.ace-vibrant-ink .ace_comment {
  color: #9933CC
}

.ace-vibrant-ink .ace_entity.ace_other.ace_attribute-name {
  font-style: italic;
  color: #99CC99
}

.ace-vibrant-ink .ace_indent-guide {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYNDTc/oPAALPAZ7hxlbYAAAAAElFTkSuQmCC) right repeat-y
}

.ace-vibrant-ink .ace_indent-guide-active {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQIW2PQ1dX9zzBz5sz/ABCcBFFentLlAAAAAElFTkSuQmCC) right repeat-y;
}
`}),ace.define("ace/theme/vibrant_ink",["require","exports","module","ace/theme/vibrant_ink.css","ace/lib/dom"],function(e,n,a){n.isDark=!0,n.cssClass="ace-vibrant-ink",n.cssText=e("./vibrant_ink.css");var c=e("../lib/dom");c.importCssString(n.cssText,n.cssClass,!1)}),function(){ace.require(["ace/theme/vibrant_ink"],function(e){r&&(r.exports=e)})}()})(i);var o=i.exports;const k=b(o),_=l({__proto__:null,default:k},[o]);export{_ as t};
