ace.define("ace/theme/tomorrow_night_bright",["require","exports","module","ace/lib/dom"], function(require, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-tomorrow-night-bright";
exports.cssText = ".ace-tomorrow-night-bright .ace_gutter {\
background: rgba(26, 26, 26, 0.8);\
color: #DEDEDE\
}\
.ace-tomorrow-night-bright .ace_print-margin {\
width: 1px;\
background: rgba(26, 26, 26, 0.8);\
}\
.ace-tomorrow-night-bright {\
    background: url('https://media.istockphoto.com/id/2031340689/photo/little-baby-boy-enjoying-in-mothers-touch.jpg?s=1024x1024&w=is&k=20&c=8hbgE8hvYRG7pxd8cLj_UC4RNIc9jSZQM8lWJpC5sJ0=') no-repeat center center;\
    background-size: cover;\
}\
.ace-tomorrow-night-bright .ace_cursor {\
color: #9F9F9F\
}\
.ace-tomorrow-night-bright .ace_marker-layer .ace_selection {\
background: rgba(66, 66, 66, 0.5);\
}\
.ace-tomorrow-night-bright .ace_marker-layer .ace_active-line {\
background: rgba(42, 42, 42, 0.5);\
}\
.ace-tomorrow-night-bright .ace_gutter-active-line {\
background-color: rgba(42, 42, 42, 0.5);\
}\
.ace-tomorrow-night-bright .ace_comment {\
color: #969896;\
background: rgba(0, 0, 0, 0.3);\
}\
";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
}); 

(function() {
    ace.require(["ace/theme/tomorrow_night_bright"], function(m) {
        if (typeof module == "object" && typeof exports == "object" && module) {
            module.exports = m;
        }
    });
})();