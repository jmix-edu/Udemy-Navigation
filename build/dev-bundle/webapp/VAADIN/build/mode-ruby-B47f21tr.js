import{g as I}from"./generated-flow-imports-DCXOKDeO.js";function N(A,T){for(var c=0;c<T.length;c++){const l=T[c];if(typeof l!="string"&&!Array.isArray(l)){for(const v in l)if(v!=="default"&&!(v in A)){const k=Object.getOwnPropertyDescriptor(l,v);k&&Object.defineProperty(A,v,k.get?k:{enumerable:!0,get:()=>l[v]})}}}return Object.freeze(Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}))}var B={exports:{}};(function(A,T){ace.define("ace/mode/ruby_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(c,l,v){var k=c("../lib/oop"),R=c("./text_highlight_rules").TextHighlightRules,_=l.constantOtherSymbol={token:"constant.other.symbol.ruby",regex:"[:](?:[A-Za-z_]|[@$](?=[a-zA-Z0-9_]))[a-zA-Z0-9_]*[!=?]?"};l.qString={token:"string",regex:"['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"},l.qqString={token:"string",regex:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'},l.tString={token:"string",regex:"[`](?:(?:\\\\.)|(?:[^'\\\\]))*?[`]"};var m=l.constantNumericHex={token:"constant.numeric",regex:"0[xX][0-9a-fA-F](?:[0-9a-fA-F]|_(?=[0-9a-fA-F]))*\\b"},S=l.constantNumericBinary={token:"constant.numeric",regex:/\b(0[bB][01](?:[01]|_(?=[01]))*)\b/},o=l.constantNumericDecimal={token:"constant.numeric",regex:/\b(0[dD](?:[1-9](?:[\d]|_(?=[\d]))*|0))\b/},y=l.constantNumericDecimal={token:"constant.numeric",regex:/\b(0[oO]?(?:[1-7](?:[0-7]|_(?=[0-7]))*|0))\b/},s=l.constantNumericRational={token:"constant.numeric",regex:/\b([\d]+(?:[./][\d]+)?ri?)\b/},u=l.constantNumericComplex={token:"constant.numeric",regex:/\b([\d]i)\b/},n=l.constantNumericFloat={token:"constant.numeric",regex:"[+-]?\\d(?:\\d|_(?=\\d))*(?:(?:\\.\\d(?:\\d|_(?=\\d))*)?(?:[eE][+-]?\\d+)?)?i?\\b"},r=l.instanceVariable={token:"variable.instance",regex:"@{1,2}[a-zA-Z_\\d]+"},i=function(){var g="abort|Array|assert|assert_equal|assert_not_equal|assert_same|assert_not_same|assert_nil|assert_not_nil|assert_match|assert_no_match|assert_in_delta|assert_throws|assert_raise|assert_nothing_raised|assert_instance_of|assert_kind_of|assert_respond_to|assert_operator|assert_send|assert_difference|assert_no_difference|assert_recognizes|assert_generates|assert_response|assert_redirected_to|assert_template|assert_select|assert_select_email|assert_select_rjs|assert_select_encoded|css_select|at_exit|attr|attr_writer|attr_reader|attr_accessor|attr_accessible|autoload|binding|block_given?|callcc|caller|catch|chomp|chomp!|chop|chop!|defined?|delete_via_redirect|eval|exec|exit|exit!|fail|Float|flunk|follow_redirect!|fork|form_for|form_tag|format|gets|global_variables|gsub|gsub!|get_via_redirect|host!|https?|https!|include|Integer|lambda|link_to|link_to_unless_current|link_to_function|link_to_remote|load|local_variables|loop|open|open_session|p|print|printf|proc|putc|puts|post_via_redirect|put_via_redirect|raise|rand|raw|readline|readlines|redirect?|request_via_redirect|require|scan|select|set_trace_func|sleep|split|sprintf|srand|String|stylesheet_link_tag|syscall|system|sub|sub!|test|throw|trace_var|trap|untrace_var|atan2|cos|exp|frexp|ldexp|log|log10|sin|sqrt|tan|render|javascript_include_tag|csrf_meta_tag|label_tag|text_field_tag|submit_tag|check_box_tag|content_tag|radio_button_tag|text_area_tag|password_field_tag|hidden_field_tag|fields_for|select_tag|options_for_select|options_from_collection_for_select|collection_select|time_zone_select|select_date|select_time|select_datetime|date_select|time_select|datetime_select|select_year|select_month|select_day|select_hour|select_minute|select_second|file_field_tag|file_field|respond_to|skip_before_filter|around_filter|after_filter|verify|protect_from_forgery|rescue_from|helper_method|redirect_to|before_filter|send_data|send_file|validates_presence_of|validates_uniqueness_of|validates_length_of|validates_format_of|validates_acceptance_of|validates_associated|validates_exclusion_of|validates_inclusion_of|validates_numericality_of|validates_with|validates_each|authenticate_or_request_with_http_basic|authenticate_or_request_with_http_digest|filter_parameter_logging|match|get|post|resources|redirect|scope|assert_routing|translate|localize|extract_locale_from_tld|caches_page|expire_page|caches_action|expire_action|cache|expire_fragment|expire_cache_for|observe|cache_sweeper|has_many|has_one|belongs_to|has_and_belongs_to_many|p|warn|refine|using|module_function|extend|alias_method|private_class_method|remove_method|undef_method",p="alias|and|BEGIN|begin|break|case|class|def|defined|do|else|elsif|END|end|ensure|__FILE__|finally|for|gem|if|in|__LINE__|module|next|not|or|private|protected|public|redo|rescue|retry|return|super|then|undef|unless|until|when|while|yield|__ENCODING__|prepend",h="true|TRUE|false|FALSE|nil|NIL|ARGF|ARGV|DATA|ENV|RUBY_PLATFORM|RUBY_RELEASE_DATE|RUBY_VERSION|STDERR|STDIN|STDOUT|TOPLEVEL_BINDING|RUBY_PATCHLEVEL|RUBY_REVISION|RUBY_COPYRIGHT|RUBY_ENGINE|RUBY_ENGINE_VERSION|RUBY_DESCRIPTION",x="$DEBUG|$defout|$FILENAME|$LOAD_PATH|$SAFE|$stdin|$stdout|$stderr|$VERBOSE|$!|root_url|flash|session|cookies|params|request|response|logger|self",M=this.$keywords=this.createKeywordMapper({keyword:p,"constant.language":h,"variable.language":x,"support.function":g,"invalid.deprecated":"debugger"},"identifier"),b=`\\\\(?:n(?:[1-7][0-7]{0,2}|0)|[nsrtvfbae'"\\\\]|c(?:\\\\M-)?.|M-(?:\\\\C-|\\\\c)?.|C-(?:\\\\M-)?.|[0-7]{3}|x[\\da-fA-F]{2}|u[\\da-fA-F]{4}|u{[\\da-fA-F]{1,6}(?:\\s[\\da-fA-F]{1,6})*})`,w={"(":")","[":"]","{":"}","<":">","^":"^","|":"|","%":"%"};this.$rules={start:[{token:"comment",regex:"#.*$"},{token:"comment.multiline",regex:"^=begin(?=$|\\s.*$)",next:"comment"},{token:"string.regexp",regex:/[/](?=.*\/)/,next:"regex"},[{token:["constant.other.symbol.ruby","string.start"],regex:/(:)?(")/,push:[{token:"constant.language.escape",regex:b},{token:"paren.start",regex:/#{/,push:"start"},{token:"string.end",regex:/"/,next:"pop"},{defaultToken:"string"}]},{token:"string.start",regex:/`/,push:[{token:"constant.language.escape",regex:b},{token:"paren.start",regex:/#{/,push:"start"},{token:"string.end",regex:/`/,next:"pop"},{defaultToken:"string"}]},{token:["constant.other.symbol.ruby","string.start"],regex:/(:)?(')/,push:[{token:"constant.language.escape",regex:/\\['\\]/},{token:"string.end",regex:/'/,next:"pop"},{defaultToken:"string"}]},{token:"string.start",regex:/%[qwx]([(\[<{^|%])/,onMatch:function(t,a,e){e.length&&(e=[]);var d=t[t.length-1];return e.unshift(d,a),this.next="qStateWithoutInterpolation",this.token}},{token:"string.start",regex:/%[QWX]?([(\[<{^|%])/,onMatch:function(t,a,e){e.length&&(e=[]);var d=t[t.length-1];return e.unshift(d,a),this.next="qStateWithInterpolation",this.token}},{token:"constant.other.symbol.ruby",regex:/%[si]([(\[<{^|%])/,onMatch:function(t,a,e){e.length&&(e=[]);var d=t[t.length-1];return e.unshift(d,a),this.next="sStateWithoutInterpolation",this.token}},{token:"constant.other.symbol.ruby",regex:/%[SI]([(\[<{^|%])/,onMatch:function(t,a,e){e.length&&(e=[]);var d=t[t.length-1];return e.unshift(d,a),this.next="sStateWithInterpolation",this.token}},{token:"string.regexp",regex:/%[r]([(\[<{^|%])/,onMatch:function(t,a,e){e.length&&(e=[]);var d=t[t.length-1];return e.unshift(d,a),this.next="rState",this.token}}],{token:"punctuation",regex:"::"},r,{token:"variable.global",regex:"[$][a-zA-Z_\\d]+"},{token:"support.class",regex:"[A-Z][a-zA-Z_\\d]*"},{token:["punctuation.operator","support.function"],regex:/(\.)([a-zA-Z_\d]+)(?=\()/},{token:["punctuation.operator","identifier"],regex:/(\.)([a-zA-Z_][a-zA-Z_\d]*)/},{token:"string.character",regex:"\\B\\?(?:"+b+"|\\S)"},{token:"punctuation.operator",regex:/\?(?=.+:)/},s,u,_,m,n,S,o,y,{token:"constant.language.boolean",regex:"(?:true|false)\\b"},{token:M,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"punctuation.separator.key-value",regex:"=>"},{stateName:"heredoc",onMatch:function(t,a,e){var d=t[2]=="-"||t[2]=="~"?"indentedHeredoc":"heredoc",f=t.split(this.splitRegex);return e.push(d,f[3]),[{type:"constant",value:f[1]},{type:"string",value:f[2]},{type:"support.class",value:f[3]},{type:"string",value:f[4]}]},regex:"(<<[-~]?)(['\"`]?)([\\w]+)(['\"`]?)",rules:{heredoc:[{onMatch:function(t,a,e){return t===e[1]?(e.shift(),e.shift(),this.next=e[0]||"start","support.class"):(this.next="","string")},regex:".*$",next:"start"}],indentedHeredoc:[{token:"string",regex:"^ +"},{onMatch:function(t,a,e){return t===e[1]?(e.shift(),e.shift(),this.next=e[0]||"start","support.class"):(this.next="","string")},regex:".*$",next:"start"}]}},{regex:"$",token:"empty",next:function(t,a){return a[0]==="heredoc"||a[0]==="indentedHeredoc"?a[0]:t}},{token:"keyword.operator",regex:"!|\\$|%|&|\\*|/|\\-\\-|\\-|\\+\\+|\\+|~|===|==|=|!=|!==|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\\|\\||\\?\\:|\\*=|%=|\\+=|\\-=|&=|\\^=|\\||\\b(?:in|instanceof|new|delete|typeof|void)"},{token:"paren.lparen",regex:"[[({]"},{token:"paren.rparen",regex:"[\\])}]",onMatch:function(t,a,e){return this.next="",t=="}"&&e.length>1&&e[1]!="start"&&(e.shift(),this.next=e.shift()),this.token}},{token:"text",regex:"\\s+"},{token:"punctuation.operator",regex:/[?:,;.]/}],comment:[{token:"comment.multiline",regex:"^=end(?=$|\\s.*$)",next:"start"},{token:"comment",regex:".+"}],qStateWithInterpolation:[{token:"string.start",regex:/[(\[<{]/,onMatch:function(t,a,e){return e.length&&t===e[0]?(e.unshift(t,a),this.token):"string"}},{token:"constant.language.escape",regex:b},{token:"constant.language.escape",regex:/\\./},{token:"paren.start",regex:/#{/,push:"start"},{token:"string.end",regex:/[)\]>}^|%]/,onMatch:function(t,a,e){return e.length&&t===w[e[0]]?(e.shift(),this.next=e.shift(),this.token):(this.next="","string")}},{defaultToken:"string"}],qStateWithoutInterpolation:[{token:"string.start",regex:/[(\[<{]/,onMatch:function(t,a,e){return e.length&&t===e[0]?(e.unshift(t,a),this.token):"string"}},{token:"constant.language.escape",regex:/\\['\\]/},{token:"constant.language.escape",regex:/\\./},{token:"string.end",regex:/[)\]>}^|%]/,onMatch:function(t,a,e){return e.length&&t===w[e[0]]?(e.shift(),this.next=e.shift(),this.token):(this.next="","string")}},{defaultToken:"string"}],sStateWithoutInterpolation:[{token:"constant.other.symbol.ruby",regex:/[(\[<{]/,onMatch:function(t,a,e){return e.length&&t===e[0]?(e.unshift(t,a),this.token):"constant.other.symbol.ruby"}},{token:"constant.other.symbol.ruby",regex:/[)\]>}^|%]/,onMatch:function(t,a,e){return e.length&&t===w[e[0]]?(e.shift(),this.next=e.shift(),this.token):(this.next="","constant.other.symbol.ruby")}},{defaultToken:"constant.other.symbol.ruby"}],sStateWithInterpolation:[{token:"constant.other.symbol.ruby",regex:/[(\[<{]/,onMatch:function(t,a,e){return e.length&&t===e[0]?(e.unshift(t,a),this.token):"constant.other.symbol.ruby"}},{token:"constant.language.escape",regex:b},{token:"constant.language.escape",regex:/\\./},{token:"paren.start",regex:/#{/,push:"start"},{token:"constant.other.symbol.ruby",regex:/[)\]>}^|%]/,onMatch:function(t,a,e){return e.length&&t===w[e[0]]?(e.shift(),this.next=e.shift(),this.token):(this.next="","constant.other.symbol.ruby")}},{defaultToken:"constant.other.symbol.ruby"}],rState:[{token:"string.regexp",regex:/[(\[<{]/,onMatch:function(t,a,e){return e.length&&t===e[0]?(e.unshift(t,a),this.token):"constant.language.escape"}},{token:"paren.start",regex:/#{/,push:"start"},{token:"string.regexp",regex:/\//},{token:"string.regexp",regex:/[)\]>}^|%][imxouesn]*/,onMatch:function(t,a,e){return e.length&&t[0]===w[e[0]]?(e.shift(),this.next=e.shift(),this.token):(this.next="","constant.language.escape")}},{include:"regex"},{defaultToken:"string.regexp"}],regex:[{token:"regexp.keyword",regex:/\\[wWdDhHsS]/},{token:"constant.language.escape",regex:/\\[AGbBzZ]/},{token:"constant.language.escape",regex:/\\g<[a-zA-Z0-9]*>/},{token:["constant.language.escape","regexp.keyword","constant.language.escape"],regex:/(\\p{\^?)(Alnum|Alpha|Blank|Cntrl|Digit|Graph|Lower|Print|Punct|Space|Upper|XDigit|Word|ASCII|Any|Assigned|Arabic|Armenian|Balinese|Bengali|Bopomofo|Braille|Buginese|Buhid|Canadian_Aboriginal|Carian|Cham|Cherokee|Common|Coptic|Cuneiform|Cypriot|Cyrillic|Deseret|Devanagari|Ethiopic|Georgian|Glagolitic|Gothic|Greek|Gujarati|Gurmukhi|Han|Hangul|Hanunoo|Hebrew|Hiragana|Inherited|Kannada|Katakana|Kayah_Li|Kharoshthi|Khmer|Lao|Latin|Lepcha|Limbu|Linear_B|Lycian|Lydian|Malayalam|Mongolian|Myanmar|New_Tai_Lue|Nko|Ogham|Ol_Chiki|Old_Italic|Old_Persian|Oriya|Osmanya|Phags_Pa|Phoenician|Rejang|Runic|Saurashtra|Shavian|Sinhala|Sundanese|Syloti_Nagri|Syriac|Tagalog|Tagbanwa|Tai_Le|Tamil|Telugu|Thaana|Thai|Tibetan|Tifinagh|Ugaritic|Vai|Yi|Ll|Lm|Lt|Lu|Lo|Mn|Mc|Me|Nd|Nl|Pc|Pd|Ps|Pe|Pi|Pf|Po|No|Sm|Sc|Sk|So|Zs|Zl|Zp|Cc|Cf|Cn|Co|Cs|N|L|M|P|S|Z|C)(})/},{token:["constant.language.escape","invalid","constant.language.escape"],regex:/(\\p{\^?)([^/]*)(})/},{token:"regexp.keyword.operator",regex:"\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"},{token:"string.regexp",regex:/[/][imxouesn]*/,next:"start"},{token:"invalid",regex:/\{\d+\b,?\d*\}[+*]|[+*$^?][+*]|[$^][?]|\?{3,}/},{token:"constant.language.escape",regex:/\(\?(?:[:=!>]|<'?[a-zA-Z]*'?>|<[=!])|\)|\{\d+\b,?\d*\}|[+*]\?|[()$^+*?.]/},{token:"constant.language.delimiter",regex:/\|/},{token:"regexp.keyword",regex:/\[\[:(?:alnum|alpha|blank|cntrl|digit|graph|lower|print|punct|space|upper|xdigit|word|ascii):\]\]/},{token:"constant.language.escape",regex:/\[\^?/,push:"regex_character_class"},{defaultToken:"string.regexp"}],regex_character_class:[{token:"regexp.keyword",regex:/\\[wWdDhHsS]/},{token:"regexp.charclass.keyword.operator",regex:"\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"},{token:"constant.language.escape",regex:/&?&?\[\^?/,push:"regex_character_class"},{token:"constant.language.escape",regex:"]",next:"pop"},{token:"constant.language.escape",regex:"-"},{defaultToken:"string.regexp.characterclass"}]},this.normalizeRules()};k.inherits(i,R),l.RubyHighlightRules=i}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(c,l,v){var k=c("../range").Range,R=function(){};(function(){this.checkOutdent=function(_,m){return/^\s+$/.test(_)?/^\s*\}/.test(m):!1},this.autoOutdent=function(_,m){var S=_.getLine(m),o=S.match(/^(\s*\})/);if(!o)return 0;var y=o[1].length,s=_.findMatchingBracket({row:m,column:y});if(!s||s.row==m)return 0;var u=this.$getIndent(_.getLine(s.row));_.replace(new k(m,0,m,y-1),u)},this.$getIndent=function(_){return _.match(/^\s*/)[0]}}).call(R.prototype),l.MatchingBraceOutdent=R}),ace.define("ace/mode/folding/ruby",["require","exports","module","ace/lib/oop","ace/mode/folding/fold_mode","ace/range","ace/token_iterator"],function(c,l,v){var k=c("../../lib/oop"),R=c("./fold_mode").FoldMode,_=c("../../range").Range,m=c("../../token_iterator").TokenIterator,S=l.FoldMode=function(){};k.inherits(S,R),(function(){this.indentKeywords={class:1,def:1,module:1,do:1,unless:1,if:1,while:1,for:1,until:1,begin:1,else:0,elsif:0,rescue:0,ensure:0,when:0,end:-1,case:1,"=begin":1,"=end":-1},this.foldingStartMarker=/(?:\s|^)(def|do|while|class|unless|module|if|for|until|begin|else|elsif|case|rescue|ensure|when)\b|({\s*$)|(=begin)/,this.foldingStopMarker=/(=end(?=$|\s.*$))|(^\s*})|\b(end)\b/,this.getFoldWidget=function(o,y,s){var u=o.getLine(s),n=this.foldingStartMarker.test(u),r=this.foldingStopMarker.test(u);if(n&&!r){var i=u.match(this.foldingStartMarker);if(i[1]){if((i[1]=="if"||i[1]=="else"||i[1]=="while"||i[1]=="until"||i[1]=="unless")&&(i[1]=="else"&&/^\s*else\s*$/.test(u)===!1||/^\s*(?:if|else|while|until|unless)\s*/.test(u)===!1)||i[1]=="when"&&/\sthen\s/.test(u)===!0)return;if(o.getTokenAt(s,i.index+2).type==="keyword")return"start"}else if(i[3]){if(o.getTokenAt(s,i.index+1).type==="comment.multiline")return"start"}else return"start"}if(y!="markbeginend"||!r||n&&r)return"";var i=u.match(this.foldingStopMarker);if(i[3]==="end"){if(o.getTokenAt(s,i.index+1).type==="keyword")return"end"}else if(i[1]){if(o.getTokenAt(s,i.index+1).type==="comment.multiline")return"end"}else return"end"},this.getFoldWidgetRange=function(o,y,s){var u=o.doc.getLine(s),n=this.foldingStartMarker.exec(u);if(n)return n[1]||n[3]?this.rubyBlock(o,s,n.index+2):this.openingBracketBlock(o,"{",s,n.index);var n=this.foldingStopMarker.exec(u);if(n)return n[3]==="end"&&o.getTokenAt(s,n.index+1).type==="keyword"?this.rubyBlock(o,s,n.index+1):n[1]==="=end"&&o.getTokenAt(s,n.index+1).type==="comment.multiline"?this.rubyBlock(o,s,n.index+1):this.closingBracketBlock(o,"}",s,n.index+n[0].length)},this.rubyBlock=function(o,f,s,u){var n=new m(o,f,s),r=n.getCurrentToken();if(!(!r||r.type!="keyword"&&r.type!="comment.multiline")){var i=r.value,g=o.getLine(f);switch(r.value){case"if":case"unless":case"while":case"until":var p=new RegExp("^\\s*"+r.value);if(!p.test(g))return;var h=this.indentKeywords[i];break;case"when":if(/\sthen\s/.test(g))return;case"elsif":case"rescue":case"ensure":var h=1;break;case"else":var p=new RegExp("^\\s*"+r.value+"\\s*$");if(!p.test(g))return;var h=1;break;default:var h=this.indentKeywords[i];break}var x=[i];if(h){var M=h===-1?o.getLine(f-1).length:o.getLine(f).length,b=f,w=[];if(w.push(n.getCurrentTokenRange()),n.step=h===-1?n.stepBackward:n.stepForward,r.type=="comment.multiline"){for(;r=n.step();)if(r.type==="comment.multiline"){if(h==1){if(M=6,r.value=="=end")break}else if(r.value=="=begin")break}}else for(;r=n.step();){var t=!1;if(r.type==="keyword"){var a=h*this.indentKeywords[r.value];switch(g=o.getLine(n.getCurrentTokenRow()),r.value){case"do":for(var e=n.$tokenIndex-1;e>=0;e--){var d=n.$rowTokens[e];if(d&&(d.value=="while"||d.value=="until"||d.value=="for")){a=0;break}}break;case"else":var p=new RegExp("^\\s*"+r.value+"\\s*$");(!p.test(g)||i=="case")&&(a=0,t=!0);break;case"if":case"unless":case"while":case"until":var p=new RegExp("^\\s*"+r.value);p.test(g)||(a=0,t=!0);break;case"when":(/\sthen\s/.test(g)||i=="case")&&(a=0,t=!0);break}if(a>0)x.unshift(r.value);else if(a<=0&&t===!1){if(x.shift(),!x.length&&((i=="while"||i=="until"||i=="for")&&r.value!="do"||r.value=="do"&&h==-1&&a!=0||r.value!="do"))break;a===0&&x.unshift(r.value)}}}if(!r)return null;if(u)return w.push(n.getCurrentTokenRange()),w;var f=n.getCurrentTokenRow();if(h===-1){if(r.type==="comment.multiline")var $=6;else var $=o.getLine(f).length;return new _(f,$,b-1,M)}else return new _(b,M,f-1,o.getLine(f-1).length)}}}}).call(S.prototype)}),ace.define("ace/mode/ruby",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/ruby_highlight_rules","ace/mode/matching_brace_outdent","ace/range","ace/mode/behaviour/cstyle","ace/mode/folding/ruby"],function(c,l,v){var k=c("../lib/oop"),R=c("./text").Mode,_=c("./ruby_highlight_rules").RubyHighlightRules,m=c("./matching_brace_outdent").MatchingBraceOutdent,S=c("../range").Range,o=c("./behaviour/cstyle").CstyleBehaviour,y=c("./folding/ruby").FoldMode,s=function(){this.HighlightRules=_,this.$outdent=new m,this.$behaviour=new o,this.foldingRules=new y,this.indentKeywords=this.foldingRules.indentKeywords};k.inherits(s,R),(function(){this.lineCommentStart="#",this.getNextLineIndent=function(u,n,r){var i=this.$getIndent(n),g=this.getTokenizer().getLineTokens(n,u),p=g.tokens;if(p.length&&p[p.length-1].type=="comment")return i;if(u=="start"){var h=n.match(/^.*[\{\(\[]\s*$/),x=n.match(/^\s*(class|def|module)\s.*$/),M=n.match(/.*do(\s*|\s+\|.*\|\s*)$/),b=n.match(/^\s*(if|else|when|elsif|unless|while|for|begin|rescue|ensure)\s*/);(h||x||M||b)&&(i+=r)}return i},this.checkOutdent=function(u,n,r){return/^\s+(end|else|rescue|ensure)$/.test(n+r)||this.$outdent.checkOutdent(n,r)},this.autoOutdent=function(u,n,r){var i=n.getLine(r);if(/}/.test(i))return this.$outdent.autoOutdent(n,r);var g=this.$getIndent(i),p=n.getLine(r-1),h=this.$getIndent(p),x=n.getTabString();h.length<=g.length&&g.slice(-x.length)==x&&n.remove(new S(r,g.length-x.length,r,g.length))},this.getMatching=function(u,n,r){if(n==null){var i=u.selection.lead;r=i.column,n=i.row}var g=u.getTokenAt(n,r);if(g&&g.value in this.indentKeywords)return this.foldingRules.rubyBlock(u,n,r,!0)},this.$id="ace/mode/ruby",this.snippetFileId="ace/snippets/ruby"}).call(s.prototype),l.Mode=s}),function(){ace.require(["ace/mode/ruby"],function(c){A&&(A.exports=c)})}()})(B);var L=B.exports;const E=I(L),O=N({__proto__:null,default:E},[L]);export{O as m};