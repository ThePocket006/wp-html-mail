!function(e){var t={};function n(a){if(t[a])return t[a].exports;var i=t[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(a,i,function(t){return e[t]}.bind(null,i));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t){!function(){e.exports=this.wp.components}()},function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){!function(){e.exports=this.wp.element}()},,function(e,t){!function(){e.exports=this.React}()},function(e,t){!function(){e.exports=this.ReactDOM}()},function(e,t){!function(){e.exports=this.wp.blockEditor}()},function(e,t,n){"use strict";n.r(t);var a=n(4),i=n.n(a),r=n(5),l=n.n(r),o=n(2),c=n(0),u=n(1);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,i=!1,r=void 0;try{for(var l,o=e[Symbol.iterator]();!(a=(l=o.next()).done)&&(n.push(l.value),!t||n.length!==t);a=!0);}catch(e){i=!0,r=e}finally{try{a||null==o.return||o.return()}finally{if(i)throw r}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var h=Object(o.createContext)();var f=function(e){var t=s(Object(o.useState)(""),2),n=t[0],a=t[1],i=s(Object(o.useState)(null),2),r=i[0],l=i[1],c=s(Object(o.useState)("container"),2),u=c[0],g=c[1],f=s(Object(o.useState)({}),2),p=f[0],b=f[1],E=s(Object(o.useState)(!0),2),w=E[0],y=E[1];return React.createElement(h.Provider,{value:{panelTitle:n,setPanelTitle:a,panelOptions:r,setPanelOptions:l,editingElement:u,setEditingElement:g,settings:p,setSettings:b,updateSetting:function(e,t){b(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},p,d({},e,t)))},isLoading:w,setIsLoading:y}},e.children)};function p(){var e=Object(o.useContext)(h);return e.settings!=={}&&e.editingElement?React.createElement(c.Panel,{header:e.panelTitle,className:"mail-optionspanel"},e.panelOptions):null}function b(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return isNaN(parseInt(e))?t:parseInt(e)}function E(e,t){return t+"_enable_translation"in e&&1==e[t+"_enable_translation"]}function w(e,t){return window.mailTemplateDesigner.isMultiLanguageSite&&E(e,t)&&window.mailTemplateDesigner.currentLanguage&&""!=window.mailTemplateDesigner.currentLanguage?t+"_"+window.mailTemplateDesigner.currentLanguage:t}function y(e,t){if(!window.mailTemplateDesigner.isMultiLanguageSite||!E(e,t))return e[t];var n=w(e,t);return n in e?e[n]:e[t]}function R(e){var t=e.children,n=e.elementTitle,a=e.elementName,i=e.frameSize,r=void 0===i?"normal":i,l=e.handleAlign,u=void 0===l?"left":l,m=Object(o.useContext)(h);return React.createElement("div",{className:"editable-element clearfix",onClick:function(e){e.stopPropagation(),m.setEditingElement(a)}},React.createElement("div",{className:(m.editingElement===a?"edit-frame-active":"edit-frame-default")+" frame-size-"+r+" handle-align-"+u},React.createElement("div",{className:"edit-frame-handle",onClick:function(e){e.stopPropagation(),m.setEditingElement(a)}},n,React.createElement(c.Icon,{icon:"edit"}))),t)}var v=n(6);function _(e){!function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e);var t=Object(o.useContext)(h),n=t.settings,a=Object(u.__)("Header text","wp-html-mail"),i=React.createElement(React.Fragment,null,React.createElement(c.PanelBody,{title:Object(u.__)("Color","wp-html-mail"),initialOpen:!1},React.createElement(c.PanelRow,null,React.createElement(c.ColorPicker,{color:n.headercolor,onChangeComplete:function(e){t.updateSetting("headercolor",e.hex)},disableAlpha:!0}))),React.createElement(c.PanelBody,{title:Object(u.__)("Font","wp-html-mail"),initialOpen:!1},React.createElement(c.PanelRow,null,React.createElement(c.SelectControl,{value:n.headerfont,options:window.mailTemplateDesigner.fonts,onChange:function(e){t.updateSetting("headerfont",e)}})),React.createElement(c.PanelRow,null,React.createElement(c.TextControl,{type:"number",onChange:function(e){t.updateSetting("headerfontsize",e)},value:b(n.headerfontsize)}),React.createElement(c.Toolbar,{controls:[{icon:"editor-alignleft",isActive:"left"===n.headeralign,onClick:function(){return t.updateSetting("headeralign","left")}},{icon:"editor-aligncenter",isActive:"center"===n.headeralign,onClick:function(){return t.updateSetting("headeralign","center")}},{icon:"editor-alignright",isActive:"right"===n.headeralign,onClick:function(){return t.updateSetting("headeralign","right")}},{icon:"editor-bold",isActive:1===b(n.headerbold),onClick:function(){return t.updateSetting("headerbold",1===b(n.headerbold)?0:1)}},{icon:"editor-italic",isActive:1===b(n.headeritalic),onClick:function(){return t.updateSetting("headeritalic",1===b(n.headeritalic)?0:1)}},{icon:"arrow-up",isActive:"uppercase"===n.headertexttransform,onClick:function(){return t.updateSetting("headertexttransform","uppercase"===n.headertexttransform?"none":"uppercase")}}]}))),1==window.mailTemplateDesigner.isMultiLanguageSite&&React.createElement(c.PanelBody,{title:Object(u.__)("Translation","wp-html-mail"),initialOpen:!1},React.createElement(c.PanelRow,null,React.createElement(c.FormToggle,{checked:E(n,"headertext"),onChange:function(e){return t.updateSetting("headertext_enable_translation",!E(n,"headertext"))}}),Object(u.__)("Enable translation for this field","wp-html-mail")),React.createElement(c.PanelRow,null,React.createElement("p",{className:"description"},Object(u.__)("If enabled you can use individual settings depending on the current language selected at the top of the page in your admin bar.","wp-html-mail")))));Object(o.useEffect)((function(){"headertext"===t.editingElement&&t.setPanelTitle(a)}),[t.editingElement]),Object(o.useEffect)((function(){"headertext"===t.editingElement&&t.setPanelOptions(i)}),[t.editingElement,n]);var r=y(n,"headertext"),l=w(n,"headertext");return React.createElement(R,{elementTitle:a,elementName:"headertext",frameSize:"s",handleAlign:"right"},React.createElement("div",{className:"headertext",style:{color:n.headercolor,textAlign:n.headeralign,fontSize:b(n.headerfontsize),fontFamily:n.headerfont,fontStyle:1===b(n.headeritalic)?"italic":"normal",fontWeight:1===b(n.headerbold)?"bold":"normal",textTransform:n.headertexttransform}},React.createElement(v.RichText,{tagName:"div",value:r,allowedFormats:[],onChange:function(e){return t.updateSetting(l,e)},placeholder:Object(u.__)("Header text","wp-html-mail")})))}function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){S(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,i=!1,r=void 0;try{for(var l,o=e[Symbol.iterator]();!(a=(l=o.next()).done)&&(n.push(l.value),!t||n.length!==t);a=!0);}catch(e){i=!0,r=e}finally{try{a||null==o.return||o.return()}finally{if(i)throw r}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return C(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return C(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function P(e){!function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e);var t=Object(o.useContext)(h),n=t.settings,a=Object(u.__)("Header image","wp-html-mail"),i=j(Object(o.useState)(),2),r=i[0],l=i[1],m=y(n,"headerimg"),d=w(n,"headerimg"),s=React.createElement(React.Fragment,null,React.createElement(c.PanelBody,{title:Object(u.__)("Image","wp-html-mail"),initialOpen:!0},React.createElement(c.PanelRow,null,React.createElement(c.Button,{className:"editor-post-featured-image__toggle",style:m?{backgroundImage:"url("+m+")"}:{},onClick:function(e){if(r)r.open();else{var a=wp.media.frames.file_frame=wp.media({multiple:!1});a.on("select",(function(){var e,i=a.state().get("selection").first().toJSON(),r=i.width>600?Math.round(i.height/i.width*600):i.height,l=i.width>600?600:i.width;t.setSettings(O({},n,(S(e={},d,i.url),S(e,"headerimg_width",l),S(e,"headerimg_height",r),S(e,"headerimg_alt",i.alt),S(e,"headerimg_notice",""),e)))})),a.open(),l(a)}}},Object(u.__)("Select image","wp-html-mail"))),React.createElement(c.PanelRow,null,React.createElement(c.TextControl,{name:"headerimg",value:m,help:Object(u.__)("You can use this field to add an external image url.","wp-html-mail"),onChange:function(e){t.updateSetting(d,e)}})),n.headerimg_notice&&n.headerimg_notice.length>5&&React.createElement(c.PanelRow,null,React.createElement("p",{dangerouslySetInnerHTML:{__html:n.headerimg_notice}}))),React.createElement(c.PanelBody,{title:Object(u.__)("Size & Align","wp-html-mail"),initialOpen:!1},React.createElement(c.PanelRow,null,React.createElement(c.TextControl,{type:"number",onChange:function(e){t.updateSetting("headerimg_width",e)},value:b(n.headerimg_width,400),style:{width:70}}),React.createElement(c.TextControl,{type:"number",onChange:function(e){t.updateSetting("headerimg_height",e)},value:b(n.headerimg_height,100),style:{width:70}}),React.createElement(c.Toolbar,{controls:[{icon:"align-left",isActive:"left"===n.headerimg_align,onClick:function(){return t.updateSetting("headerimg_align","left")}},{icon:"align-center",isActive:"center"===n.headerimg_align,onClick:function(){return t.updateSetting("headerimg_align","center")}},{icon:"align-right",isActive:"right"===n.headerimg_align,onClick:function(){return t.updateSetting("headerimg_align","right")}}]})),("above_text"===n.headerimg_placement||"below_text"===n.headerimg_placement)&&React.createElement(React.Fragment,null,React.createElement(c.PanelRow,null,Object(u.__)("Spacing between image and text","wp-html-mail")),React.createElement(c.PanelRow,null,React.createElement(c.RangeControl,{beforeIcon:"sort",value:b(n.header_spacer,10),onChange:function(e){t.updateSetting("header_spacer",e)},min:0,max:100}))),React.createElement(c.PanelRow,null,React.createElement("p",null,Object(u.__)("If you would like to provide the header image in retina quality, upload an image with a higher resultion, such as for example 1200px x 400px and enter only half the size values in the input fields above (600 x 200).","wp-html-mail")))),1==window.mailTemplateDesigner.isMultiLanguageSite&&React.createElement(c.PanelBody,{title:Object(u.__)("Translation","wp-html-mail"),initialOpen:!0},React.createElement(c.PanelRow,null,React.createElement(c.FormToggle,{checked:E(n,"headerimg"),onChange:function(e){return t.updateSetting("headerimg_enable_translation",!E(n,"headerimg"))}}),Object(u.__)("Enable translation for this field","wp-html-mail")),React.createElement(c.PanelRow,null,React.createElement("p",{className:"description"},Object(u.__)("If enabled you can use individual settings depending on the current language selected at the top of the page in your admin bar.","wp-html-mail"))),React.createElement(c.PanelRow,null,React.createElement("p",{className:"description"},Object(u.__)("Please make sure all images have the same size because only the image url is language dependent.","wp-html-mail")))));Object(o.useEffect)((function(){"headerimage"===t.editingElement&&t.setPanelTitle(a)}),[t.editingElement]),Object(o.useEffect)((function(){"headerimage"===t.editingElement&&t.setPanelOptions(s)}),[t.editingElement,n]);var g=n.headerimg_align?n.headerimg_align:n.headeralign;return React.createElement(R,{elementTitle:a,elementName:"headerimage",frameSize:"s",handleAlign:"right"},React.createElement("div",{className:"headerimage",style:{textAlign:g}},n.headerimg?React.createElement(c.ResizableBox,{size:{height:parseInt(n.headerimg_height),width:parseInt(n.headerimg_width)},lockAspectRatio:parseInt(n.headerimg_width)/parseInt(n.headerimg_height),minHeight:"20",minWidth:"50",showHandle:"headerimage"===t.editingElement,style:{marginTop:"below_text"===n.headerimg_placement?n.header_spacer+"px":"0px",marginBottom:"above_text"===n.headerimg_placement?n.header_spacer+"px":"0px"},enable:{top:!1,right:!1,bottom:!1,left:!1,topRight:!0,bottomRight:!0,bottomLeft:!0,topLeft:!0},onResizeStop:function(e,a,i,r){t.setSettings(O({},n,{headerimg_width:parseInt(n.headerimg_width)+r.width,headerimg_height:parseInt(n.headerimg_height)+r.height}))}},React.createElement("img",{src:m})):React.createElement("div",{className:"header-image-placeholder",style:{width:n.headerimg_width?n.headerimg_width+"px":"400px",height:n.headerimg_height?n.headerimg_height+"px":"100px",marginTop:"below_text"===n.headerimg_placement?n.header_spacer+"px":"0px",marginBottom:"above_text"===n.headerimg_placement?n.header_spacer+"px":"0px"}})))}function k(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,i=!1,r=void 0;try{for(var l,o=e[Symbol.iterator]();!(a=(l=o.next()).done)&&(n.push(l.value),!t||n.length!==t);a=!0);}catch(e){i=!0,r=e}finally{try{a||null==o.return||o.return()}finally{if(i)throw r}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return T(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return T(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function A(e){!function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e);var t=k(Object(o.useState)(1),2),n=t[0],a=t[1],i=Object(o.useContext)(h),r=i.settings,l=Object(u.__)("Email header","wp-html-mail"),m=r.headerimg_placement;m||(m=r.headerimg?"replace_text":"just_text");var d=React.createElement(React.Fragment,null,React.createElement(c.PanelBody,{title:Object(u.__)("Image and text placement","wp-html-mail"),initialOpen:!0},React.createElement(c.PanelRow,null,React.createElement(c.RadioControl,{selected:m,options:[{value:"just_text",label:Object(u.__)("Show just a text header","wp-html-mail")},{value:"replace_text",label:Object(u.__)("Show image only","wp-html-mail")},{value:"above_text",label:Object(u.__)("Show image above text","wp-html-mail")},{value:"below_text",label:Object(u.__)("Show image below text","wp-html-mail")}],onChange:function(e){console.log(e,r.headerimg_placement),i.updateSetting("headerimg_placement",e),s()}}))),React.createElement(c.PanelBody,{title:Object(u.__)("Background color","wp-html-mail"),initialOpen:!1},React.createElement(c.PanelRow,null,React.createElement(c.ColorPicker,{color:r.headerbackground,onChangeComplete:function(e){i.updateSetting("headerbackground",e.hex),s()},disableAlpha:!0}))),React.createElement(c.PanelBody,{title:Object(u.__)("Padding","wp-html-mail"),initialOpen:!1},React.createElement(c.PanelRow,null,React.createElement(c.RangeControl,{beforeIcon:"arrow-down",value:b(r.headerpaddingtop,10),onChange:function(e){i.updateSetting("headerpaddingtop",e),s()},min:0,max:100})),React.createElement(c.PanelRow,null,React.createElement(c.RangeControl,{beforeIcon:"arrow-left",value:b(r.headerpaddingright,10),onChange:function(e){i.updateSetting("headerpaddingright",e),s()},min:0,max:100})),React.createElement(c.PanelRow,null,React.createElement(c.RangeControl,{beforeIcon:"arrow-up",value:b(r.headerpaddingbottom,10),onChange:function(e){i.updateSetting("headerpaddingbottom",e),s()},min:0,max:100})),React.createElement(c.PanelRow,null,React.createElement(c.RangeControl,{beforeIcon:"arrow-right",value:b(r.headerpaddingleft,10),onChange:function(e){i.updateSetting("headerpaddingleft",e),s()},min:0,max:100}))));Object(o.useEffect)((function(){"header"===i.editingElement&&i.setPanelTitle(l)}),[i.editingElement]),Object(o.useEffect)((function(){"header"===i.editingElement&&i.setPanelOptions(d)}),[i.editingElement,r]);var s=function(){a(Math.random().toString(36).replace(/[^a-z]+/g,"").substr(0,5))};return React.createElement(R,{elementTitle:l,elementName:"header",key:n},React.createElement("div",{className:"mail-header",style:{backgroundColor:r.headerbackground,paddingTop:b(r.headerpaddingtop),paddingRight:b(r.headerpaddingright),paddingBottom:b(r.headerpaddingbottom),paddingLeft:b(r.headerpaddingleft)}},"replace_text"===m&&React.createElement(P,null),"above_text"===m&&React.createElement(React.Fragment,null,React.createElement(P,null),React.createElement(_,null)),"below_text"===m&&React.createElement(React.Fragment,null,React.createElement(_,null),React.createElement(P,null)),"just_text"===m&&React.createElement(_,null)))}function I(e){!function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e);var t=Object(o.useContext)(h),n=t.settings,a=Object(u.__)("Email content","wp-html-mail"),i=React.createElement(React.Fragment,null,React.createElement(c.PanelBody,{title:Object(u.__)("Background color","wp-html-mail"),initialOpen:!1},React.createElement(c.PanelRow,null,React.createElement(c.ColorPicker,{color:n.contentbackground,onChangeComplete:function(e){t.updateSetting("contentbackground",e.hex)},disableAlpha:!0}))),React.createElement(c.PanelBody,{title:Object(u.__)("Headline Font","wp-html-mail"),initialOpen:!1},React.createElement(c.PanelRow,null,React.createElement(c.ColorPicker,{color:n.headlinecolor,onChangeComplete:function(e){t.updateSetting("headlinecolor",e.hex)},disableAlpha:!0})),React.createElement(c.PanelRow,null,React.createElement(c.SelectControl,{value:n.headlinefont,options:window.mailTemplateDesigner.fonts,onChange:function(e){t.updateSetting("headlinefont",e)}})),React.createElement(c.PanelRow,null,React.createElement(c.TextControl,{type:"number",onChange:function(e){t.updateSetting("headlinefontsize",e)},value:b(n.headlinefontsize)}),React.createElement(c.Toolbar,{controls:[{icon:"editor-alignleft",isActive:"left"===n.headlinealign,onClick:function(){return t.updateSetting("headlinealign","left")}},{icon:"editor-aligncenter",isActive:"center"===n.headlinealign,onClick:function(){return t.updateSetting("headlinealign","center")}},{icon:"editor-alignright",isActive:"right"===n.headlinealign,onClick:function(){return t.updateSetting("headlinealign","right")}},{icon:"editor-bold",isActive:1===b(n.headlinebold),onClick:function(){return t.updateSetting("headlinebold",1===b(n.headlinebold)?0:1)}},{icon:"editor-italic",isActive:1===b(n.headlineitalic),onClick:function(){return t.updateSetting("headlineitalic",1===b(n.headlineitalic)?0:1)}},{icon:"arrow-up",isActive:"uppercase"===n.headlinetexttransform,onClick:function(){return t.updateSetting("headlinetexttransform","uppercase"===n.headlinetexttransform?"none":"uppercase")}}]}))),React.createElement(c.PanelBody,{title:Object(u.__)("Subheadline Font","wp-html-mail"),initialOpen:!1},React.createElement(c.PanelRow,null,React.createElement(c.ColorPicker,{color:n.subheadlinecolor,onChangeComplete:function(e){t.updateSetting("subheadlinecolor",e.hex)},disableAlpha:!0})),React.createElement(c.PanelRow,null,React.createElement(c.SelectControl,{value:n.subheadlinefont,options:window.mailTemplateDesigner.fonts,onChange:function(e){t.updateSetting("subheadlinefont",e)}})),React.createElement(c.PanelRow,null,React.createElement(c.TextControl,{type:"number",onChange:function(e){t.updateSetting("subheadlinefontsize",e)},value:b(n.subheadlinefontsize)}),React.createElement(c.Toolbar,{controls:[{icon:"editor-alignleft",isActive:"left"===n.subheadlinealign,onClick:function(){return t.updateSetting("subheadlinealign","left")}},{icon:"editor-aligncenter",isActive:"center"===n.subheadlinealign,onClick:function(){return t.updateSetting("subheadlinealign","center")}},{icon:"editor-alignright",isActive:"right"===n.subheadlinealign,onClick:function(){return t.updateSetting("subheadlinealign","right")}},{icon:"editor-bold",isActive:1===b(n.subheadlinebold),onClick:function(){return t.updateSetting("subheadlinebold",1===b(n.subheadlinebold)?0:1)}},{icon:"editor-italic",isActive:1===b(n.subheadlineitalic),onClick:function(){return t.updateSetting("subheadlineitalic",1===b(n.subheadlineitalic)?0:1)}},{icon:"arrow-up",isActive:"uppercase"===n.subheadlinetexttransform,onClick:function(){return t.updateSetting("subheadlinetexttransform","uppercase"===n.subheadlinetexttransform?"none":"uppercase")}}]}))),React.createElement(c.PanelBody,{title:Object(u.__)("Content Font","wp-html-mail"),initialOpen:!1},React.createElement(c.PanelRow,null,React.createElement(c.ColorPicker,{color:n.textcolor,onChangeComplete:function(e){t.updateSetting("textcolor",e.hex)},disableAlpha:!0})),React.createElement(c.PanelRow,null,React.createElement(c.SelectControl,{value:n.textfont,options:window.mailTemplateDesigner.fonts,onChange:function(e){t.updateSetting("textfont",e)}})),React.createElement(c.PanelRow,null,React.createElement(c.TextControl,{type:"number",onChange:function(e){t.updateSetting("textfontsize",e)},value:b(n.textfontsize)}),React.createElement(c.Toolbar,{controls:[{icon:"editor-alignleft",isActive:"left"===n.textalign,onClick:function(){return t.updateSetting("textalign","left")}},{icon:"editor-aligncenter",isActive:"center"===n.textalign,onClick:function(){return t.updateSetting("textalign","center")}},{icon:"editor-alignright",isActive:"right"===n.textalign,onClick:function(){return t.updateSetting("textalign","right")}},{icon:"editor-bold",isActive:1===b(n.textbold),onClick:function(){return t.updateSetting("textbold",1===b(n.textbold)?0:1)}},{icon:"editor-italic",isActive:1===b(n.textitalic),onClick:function(){return t.updateSetting("textitalic",1===b(n.textitalic)?0:1)}}]}))),React.createElement(c.PanelBody,{title:Object(u.__)("Link styling","wp-html-mail"),initialOpen:!1},React.createElement(c.PanelRow,null,React.createElement(c.ColorPicker,{color:n.linkcolor,onChangeComplete:function(e){t.updateSetting("linkcolor",e.hex)},disableAlpha:!0})),React.createElement(c.PanelRow,null,React.createElement(c.Toolbar,{controls:[{icon:"editor-bold",isActive:1===b(n.linkbold),onClick:function(){return t.updateSetting("linkbold",1===b(n.linkbold)?0:1)}},{icon:"editor-italic",isActive:1===b(n.linkitalic),onClick:function(){return t.updateSetting("linkitalic",1===b(n.linkitalic)?0:1)}},{icon:"editor-underline",isActive:1===b(n.linkunderline),onClick:function(){return t.updateSetting("linkunderline",1===b(n.linkunderline)?0:1)}},{icon:"arrow-up",isActive:"uppercase"===n.linktexttransform,onClick:function(){return t.updateSetting("linktexttransform","uppercase"===n.linktexttransform?"none":"uppercase")}}]}))));Object(o.useEffect)((function(){"content"===t.editingElement&&t.setPanelTitle(a)}),[t.editingElement]),Object(o.useEffect)((function(){"content"===t.editingElement&&t.setPanelOptions(i)}),[t.editingElement,n]);var r={fontSize:b(n.headlinefontsize),fontFamily:n.headlinefont,fontStyle:1===b(n.headlineitalic)?"italic":"normal",fontWeight:1===b(n.headlinebold)?"bold":"normal",textTransform:n.headlinetexttransform,color:n.headlinecolor,textAlign:n.headlinealign,lineHeight:1.5,marginTop:"0.67em",marginBottom:"0.67em"},l={fontSize:b(n.subheadlinefontsize),fontFamily:n.subheadlinefont,fontStyle:1===b(n.subheadlineitalic)?"italic":"normal",fontWeight:1===b(n.subheadlinebold)?"bold":"normal",textTransform:n.subheadlinetexttransform,color:n.subheadlinecolor,textAlign:n.subheadlinealign,lineHeight:1.5,marginTop:"0.83em",marginBottom:"0.83em"},m={fontSize:b(n.textfontsize),fontFamily:n.textfont,fontStyle:1===b(n.textitalic)?"italic":"normal",fontWeight:1===b(n.textbold)?"bold":"normal",color:n.textcolor,textAlign:n.textalign,lineHeight:1.5,marginTop:"0.83em",marginBottom:"0.83em"},d={fontStyle:1===b(n.linkitalic)?"italic":"normal",fontWeight:1===b(n.linkbold)?"bold":"normal",textDecoration:1===b(n.linkunderline)?"underline":"none",textTransform:n.linktexttransform,color:n.linkcolor};return React.createElement(R,{elementTitle:a,elementName:"content"},React.createElement("div",{className:"mail-content clearfix",style:{backgroundColor:n.contentbackground}},React.createElement("h1",{style:r},"Lorem ipsum dolor sit amet"),React.createElement("p",{style:m},"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed"," ",React.createElement("a",{href:"#",style:d},"diam nonumy")," ","eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",React.createElement("br",null),"Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."),React.createElement("h2",{style:l},"Sed diam nonumy eirmod tempor"),React.createElement("p",{style:m},"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.")))}function B(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,i=!1,r=void 0;try{for(var l,o=e[Symbol.iterator]();!(a=(l=o.next()).done)&&(n.push(l.value),!t||n.length!==t);a=!0);}catch(e){i=!0,r=e}finally{try{a||null==o.return||o.return()}finally{if(i)throw r}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return N(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return N(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function z(e){!function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e);var t=Object(o.useContext)(h),n=B(Object(o.useState)(!1),2),a=(n[0],n[1]),i=t.settings,r=Object(u.__)("Email footer","wp-html-mail"),l=y(i,"footer").replace(/\\(.)/gm,"$1"),m=w(i,"footer"),d=React.createElement(React.Fragment,null,React.createElement(c.PanelBody,{title:Object(u.__)("Background color","wp-html-mail"),initialOpen:!1},React.createElement(c.PanelRow,null,React.createElement(c.ColorPicker,{color:i.footerbackground,onChangeComplete:function(e){t.updateSetting("footerbackground",e.hex)},disableAlpha:!0}))),React.createElement(c.PanelBody,{title:Object(u.__)("Edit HTML","wp-html-mail"),initialOpen:!1},React.createElement(c.PanelRow,null,React.createElement(c.TextareaControl,{help:Object(u.__)("Just in case the editor on the left is not flexible enough you can use this field to edit the HTML code.","wp-html-mail"),className:"footer-html",value:l,onChange:function(e){t.updateSetting(m,e)},placeholder:Object(u.__)("your code snippet…")}))),1==window.mailTemplateDesigner.isMultiLanguageSite&&React.createElement(c.PanelBody,{title:Object(u.__)("Translation","wp-html-mail"),initialOpen:!1},React.createElement(c.PanelRow,null,React.createElement(c.FormToggle,{checked:E(i,"footer"),onChange:function(e){return t.updateSetting("footer_enable_translation",!E(i,"footer"))}}),Object(u.__)("Enable translation for this field","wp-html-mail")),React.createElement(c.PanelRow,null,React.createElement("p",{className:"description"},Object(u.__)("If enabled you can use individual settings depending on the current language selected at the top of the page in your admin bar.","wp-html-mail"))))),s=function(e){a(e),l&&e.on("loadContent",(function(){return e.setContent(l)})),e.on("blur",(function(){return t.updateSetting(m,e.getContent()),!1}))};return Object(o.useEffect)((function(){"footer"===t.editingElement&&t.setPanelTitle(r)}),[t.editingElement]),Object(o.useEffect)((function(){"footer"===t.editingElement?(t.setPanelOptions(d),window.setTimeout((function(){var e="";window.mailTemplateDesigner.fonts.forEach((function(t){e+=t.label+"="+t.value+";"})),wp.oldEditor.initialize("footer-html",{tinymce:{inline:!0,content_css:!1,fixed_toolbar_container:"footer-editor-toolbar",toolbar1:"fontselect,fontsizeselect,|,undo,redo",toolbar2:"forecolor,|,bold,italic,|,alignleft,aligncenter,alignright,|,pastetext,|,link,unlink",font_formats:e,fontsize_formats:"10px 11px 12px 13px 14px 15px 16px 17px 18px 20px 22px 24px 26px 28px 30px 35px 40px",setup:s}})}),1e3)):wp.oldEditor.remove("footer-html")}),[t.editingElement,i]),React.createElement(R,{elementTitle:r,elementName:"footer"},React.createElement("div",{className:"mail-footer clearfix",style:{backgroundColor:i.footerbackground}},React.createElement("div",{key:"toolbar",id:"footer-editor-toolbar",className:"block-library-classic__toolbar",onKeyDown:function(e){"footer".stopPropagation(),e.nativeEvent.stopImmediatePropagation()}}),React.createElement("div",{key:"editor",id:"footer-html",className:"wp-block-freeform block-library-rich-text__tinymce",dangerouslySetInnerHTML:{__html:l}})))}function D(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,i=!1,r=void 0;try{for(var l,o=e[Symbol.iterator]();!(a=(l=o.next()).done)&&(n.push(l.value),!t||n.length!==t);a=!0);}catch(e){i=!0,r=e}finally{try{a||null==o.return||o.return()}finally{if(i)throw r}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return L(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return L(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function M(){var e=Object(o.useContext)(h),t=e.settings,n=D(Object(o.useState)(!1),2),a=n[0],i=n[1],r=D(Object(o.useState)(!1),2),l=r[0],m=r[1],d=Object(u.__)("Email Container","wp-html-mail"),s=React.createElement(c.PanelBody,{title:Object(u.__)("Background color","wp-html-mail"),initialOpen:!0},React.createElement(c.PanelRow,null,React.createElement(c.ColorPicker,{color:t.background,onChangeComplete:function(t){e.updateSetting("background",t.hex)},disableAlpha:!0})));return Object(o.useEffect)((function(){fetch(window.mailTemplateDesigner.restUrl+"themesettings").then((function(e){return e.json()})).then((function(t){e.setSettings(t),e.setIsLoading(!1)}))}),[]),Object(o.useEffect)((function(){"container"===e.editingElement&&e.setPanelTitle(d)}),[e.editingElement]),Object(o.useEffect)((function(){"container"===e.editingElement&&e.setPanelOptions(s)}),[e.editingElement,t]),e.isLoading||!e.settings?React.createElement("div",{className:"mail-loader"},React.createElement(c.Spinner,null)):React.createElement(React.Fragment,null,React.createElement("div",{className:"mail-container",style:{backgroundColor:t.background}},l&&React.createElement(c.Notice,{status:"success",isDismissible:!1},React.createElement("p",null,Object(u.__)("Your settings have been saved. Check the preview of your email at the bottom of the page.","wp-html-mail"))),React.createElement("div",{className:"save-button-pane components-panel__header"},React.createElement(c.Button,{isSecondary:!0,href:window.mailTemplateDesigner.templateLibraryUrl,style:{marginRight:10}},Object(u.__)("Browse our template library","wp-html-mail")),React.createElement(c.Button,{isPrimary:!0,isBusy:a,onClick:function(e){e.preventDefault(),function(){i(!0);var e=new Request(window.mailTemplateDesigner.restUrl+"themesettings",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});fetch(e).then((function(e){return e.json()})).then((function(e){i(!1),m(!0),setTimeout((function(){m(!1)}),4e3),e.preview&&haet_mail.previewMail(e.preview)}))}()}},Object(u.__)("Save and Preview","wp-html-mail"))),React.createElement(R,{elementTitle:d,elementName:"container",frameSize:"xs"},React.createElement("div",{className:"mail-content-wrap"},React.createElement(A,null),React.createElement(I,null),React.createElement(z,null)))),React.createElement(p,null))}document.addEventListener("DOMContentLoaded",(function(){l.a.render(i.a.createElement(f,null,i.a.createElement(M,null)),document.getElementById("wp-html-mail-template-designer"))}))}]);
//# sourceMappingURL=main.js.map