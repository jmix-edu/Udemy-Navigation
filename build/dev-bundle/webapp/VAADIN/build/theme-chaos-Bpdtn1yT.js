import{g as d}from"./generated-flow-imports-DCXOKDeO.js";function i(a,r){for(var n=0;n<r.length;n++){const e=r[n];if(typeof e!="string"&&!Array.isArray(e)){for(const c in e)if(c!=="default"&&!(c in a)){const o=Object.getOwnPropertyDescriptor(e,c);o&&Object.defineProperty(a,c,o.get?o:{enumerable:!0,get:()=>e[c]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var t={exports:{}};(function(a,r){ace.define("ace/theme/chaos.css",["require","exports","module"],function(n,e,c){c.exports=`.ace-chaos .ace_gutter {
  background: #141414;
  color: #595959;
  border-right: 1px solid #282828;
}
.ace-chaos .ace_gutter-cell.ace_warning {
  background-image: none;
  background: #FC0;
  border-left: none;
  padding-left: 0;
  color: #000;
}
.ace-chaos .ace_gutter-cell.ace_error {
  background-position: -6px center;
  background-image: none;
  background: #F10;
  border-left: none;
  padding-left: 0;
  color: #000;
}
.ace-chaos .ace_print-margin {
  border-left: 1px solid #555;
  right: 0;
  background: #1D1D1D;
}
.ace-chaos {
  background-color: #161616;
  color: #E6E1DC;
}

.ace-chaos .ace_cursor {
  border-left: 2px solid #FFFFFF;
}
.ace-chaos .ace_cursor.ace_overwrite {
  border-left: 0px;
  border-bottom: 1px solid #FFFFFF;
}
.ace-chaos .ace_marker-layer .ace_selection {
  background: #494836;
}
.ace-chaos .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}
.ace-chaos .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #FCE94F;
}
.ace-chaos .ace_marker-layer .ace_active-line {
  background: #333;
}
.ace-chaos .ace_gutter-active-line {
  background-color: #222;
}
.ace-chaos .ace_invisible {
  color: #404040;
}
.ace-chaos .ace_keyword {
  color:#00698F;
}
.ace-chaos .ace_keyword.ace_operator {
  color:#FF308F;
}
.ace-chaos .ace_constant {
  color:#1EDAFB;
}
.ace-chaos .ace_constant.ace_language {
  color:#FDC251;
}
.ace-chaos .ace_constant.ace_library {
  color:#8DFF0A;
}
.ace-chaos .ace_constant.ace_numeric {
  color:#58C554;
}
.ace-chaos .ace_invalid {
  color:#FFFFFF;
  background-color:#990000;
}
.ace-chaos .ace_invalid.ace_deprecated {
  color:#FFFFFF;
  background-color:#990000;
}
.ace-chaos .ace_support {
  color: #999;
}
.ace-chaos .ace_support.ace_function {
  color:#00AEEF;
}
.ace-chaos .ace_function {
  color:#00AEEF;
}
.ace-chaos .ace_string {
  color:#58C554;
}
.ace-chaos .ace_comment {
  color:#555;
  font-style:italic;
  padding-bottom: 0px;
}
.ace-chaos .ace_variable {
  color:#997744;
}
.ace-chaos .ace_meta.ace_tag {
  color:#BE53E6;
}
.ace-chaos .ace_entity.ace_other.ace_attribute-name {
  color:#FFFF89;
}
.ace-chaos .ace_markup.ace_underline {
  text-decoration: underline;
}
.ace-chaos .ace_fold-widget {
  text-align: center;
}

.ace-chaos .ace_fold-widget:hover {
  color: #777;
}

.ace-chaos .ace_fold-widget.ace_start,
.ace-chaos .ace_fold-widget.ace_end,
.ace-chaos .ace_fold-widget.ace_closed{
  background: none !important;
  border: none;
  box-shadow: none;
}

.ace-chaos .ace_fold-widget.ace_start:after {
  content: '▾'
}

.ace-chaos .ace_fold-widget.ace_end:after {
  content: '▴'
}

.ace-chaos .ace_fold-widget.ace_closed:after {
  content: '‣'
}

.ace-chaos .ace_indent-guide {
  border-right:1px dotted #333333;
  margin-right:-1px;
}

.ace-chaos .ace_indent-guide-active {
  border-right:1px dotted #afafaf;
  margin-right:-1px;
}

.ace-chaos .ace_fold { 
  background: #222; 
  border-radius: 3px; 
  color: #7AF; 
  border: none; 
}
.ace-chaos .ace_fold:hover {
  background: #CCC; 
  color: #000;
}
`}),ace.define("ace/theme/chaos",["require","exports","module","ace/theme/chaos.css","ace/lib/dom"],function(n,e,c){e.isDark=!0,e.cssClass="ace-chaos",e.cssText=n("./chaos.css");var o=n("../lib/dom");o.importCssString(e.cssText,e.cssClass,!1)}),function(){ace.require(["ace/theme/chaos"],function(n){a&&(a.exports=n)})}()})(t);var s=t.exports;const l=d(s),_=i({__proto__:null,default:l},[s]);export{_ as t};
