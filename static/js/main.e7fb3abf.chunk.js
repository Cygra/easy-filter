(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(19)},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n,r=a(0),l=a.n(r),u=a(3),o=a.n(u),c=(a(16),a(1)),i=a(4),s=a(5),m=a(6),p=a(8),g=a(7),d=a(9),h=(a(17),a(18),function(){return l.a.createElement("div",{className:"header"},l.a.createElement("h1",null,"Try Filter"),"\xa0",l.a.createElement("a",{href:"https://github.com/Cygra/easy-filter",target:"_blank"},"on Github"))});!function(e){e[e.DRAG_ENTER=0]="DRAG_ENTER",e[e.NULL=1]="NULL"}(n||(n={}));var f=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(p.a)(this,Object(g.a)(t).call(this,e))).reader=void 0,a.onImgChange=function(e){var t=e.target.files;a.handleFile(t)},a.onDragEnter=function(e){e.preventDefault(),a.setState({dragStatus:n.DRAG_ENTER})},a.onDragOver=function(e){e.preventDefault()},a.onDragLeave=function(){!a.state.imgUrl&&a.setState({dragStatus:n.NULL})},a.dropImage=function(e){e.preventDefault();var t=e.dataTransfer.files;a.handleFile(t)},a.handleFile=function(e){e&&a.reader.readAsDataURL(e[0])},a.updateValue=function(e,t){a.setState(function(a){return Object(i.a)({},a,Object(c.a)({},t,e))})},a.reloadFile=function(){a.setState({imgUrl:"",dragStatus:n.NULL})},a.state={imgUrl:"",grayscale:"0",blur:"0",sepia:"0",saturate:"100",hueRotate:"0",invert:"0",opacity:"100",brightness:"100",contrast:"100",dropOffX:"0",dropOffY:"0",dropBlurRad:"0",dropColor:"000",dragStatus:n.NULL},a.reader=new FileReader,a.reader.onload=function(){return a.setState({imgUrl:String(a.reader.result)})},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.imgUrl,n=t.grayscale,r=t.blur,u=t.sepia,o=t.saturate,c=t.invert,i=t.opacity,s=t.brightness,m=t.contrast,p=t.hueRotate,g=t.dropOffX,d=t.dropOffY,f=t.dropBlurRad,b=t.dropColor,E=t.dragStatus,v=["grayscale(".concat(Number(n),"%)"),"blur(".concat(Number(r),"px)"),"sepia(".concat(Number(u),"%)"),"saturate(".concat(Number(o),"%)"),"hue-rotate(".concat(Number(p),"deg)"),"invert(".concat(Number(c),"%)"),"opacity(".concat(Number(i),"%)"),"brightness(".concat(Number(s),"%)"),"contrast(".concat(Number(m),"%)"),"drop-shadow(".concat(Number(g),"px ").concat(Number(d),"px ").concat(Number(f),"px #").concat(b,")")].join(" ");return l.a.createElement("div",{className:"App"},l.a.createElement(h,null),a?l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{onClick:this.reloadFile},"Reload File"),l.a.createElement("img",{src:a,style:{filter:v}}),l.a.createElement("br",null)):l.a.createElement("label",{htmlFor:"upload-file",onDragEnter:this.onDragEnter,onDragOver:function(e){return e.preventDefault()},onDragLeave:this.onDragLeave,onDrop:this.dropImage},l.a.createElement("div",{className:"label-".concat(E)},this.labelText)),l.a.createElement("input",{id:"upload-file",type:"file",accept:"image/*",onChange:this.onImgChange,className:"hidden"}),l.a.createElement("div",null,l.a.createElement("h3",null,"grayscale"),l.a.createElement("input",{type:"number",onChange:function(t){return e.setState({grayscale:t.target.value})},value:n}),"\xa0%",l.a.createElement("br",null),l.a.createElement("h3",null,"blur"),l.a.createElement("input",{type:"number",onChange:function(t){return e.setState({blur:t.target.value})},value:r}),"\xa0px",l.a.createElement("br",null),l.a.createElement("h3",null,"sepia"),l.a.createElement("input",{type:"number",onChange:function(t){return e.setState({sepia:t.target.value})},value:u}),"\xa0%",l.a.createElement("br",null),l.a.createElement("h3",null,"saturate"),l.a.createElement("input",{type:"number",onChange:function(t){return e.setState({saturate:t.target.value})},value:o}),"\xa0%",l.a.createElement("br",null),l.a.createElement("h3",null,"hue-rotate"),l.a.createElement("input",{type:"number",onChange:function(t){return e.setState({hueRotate:t.target.value})},value:p}),"\xa0deg",l.a.createElement("br",null),l.a.createElement("h3",null,"invert"),l.a.createElement("input",{type:"number",onChange:function(t){return e.setState({invert:t.target.value})},value:c}),"\xa0%",l.a.createElement("br",null),l.a.createElement("h3",null,"opacity"),l.a.createElement("input",{type:"number",onChange:function(t){return e.setState({opacity:t.target.value})},value:i}),"\xa0%",l.a.createElement("br",null),l.a.createElement("h3",null,"brightness"),l.a.createElement("input",{type:"number",onChange:function(t){return e.setState({brightness:t.target.value})},value:s}),"\xa0%",l.a.createElement("br",null),l.a.createElement("h3",null,"contrast"),l.a.createElement("input",{type:"number",onChange:function(t){return e.setState({contrast:t.target.value})},value:m}),"\xa0%",l.a.createElement("br",null),l.a.createElement("h3",null,"drop-shadow"),l.a.createElement("br",null),l.a.createElement("span",null,"offset-X"),l.a.createElement("input",{type:"number",onChange:function(t){return e.setState({dropOffX:t.target.value})},value:g}),"\xa0px",l.a.createElement("br",null),l.a.createElement("span",null,"offset-Y"),l.a.createElement("input",{type:"number",onChange:function(t){return e.setState({dropOffY:t.target.value})},value:d}),"\xa0px",l.a.createElement("br",null),l.a.createElement("span",null,"blur-radius"),l.a.createElement("input",{type:"number",onChange:function(t){return e.setState({dropBlurRad:t.target.value})},value:f}),"\xa0px",l.a.createElement("br",null),l.a.createElement("span",null,"color"),"#\xa0",l.a.createElement("input",{type:"text",onChange:function(t){return e.setState({dropColor:t.target.value})},value:b,id:"color-input"})))}},{key:"labelText",get:function(){switch(this.state.dragStatus){case n.DRAG_ENTER:return"Drop to load file!";case n.NULL:default:return"Drop or click to load file!"}}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.e7fb3abf.chunk.js.map