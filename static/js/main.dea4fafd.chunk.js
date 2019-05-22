(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){},266:function(e,t,a){"use strict";a.r(t);var r,n=a(0),l=a.n(n),o=a(50),i=a.n(o),c=(a(98),a(31)),s=a(14),m=a(87),u=a(88),p=a(91),d=a(89),h=a(92),f=(a(99),a(100),function(){return l.a.createElement("div",{className:"header"},l.a.createElement("h1",null,"Try Filter"),l.a.createElement("br",null),l.a.createElement("a",{href:"https://github.com/Cygra/easy-filter",target:"_blank"},"on Github"))}),b={Brooklyn:{sepia:"0.25",contrast:"1.25",brightness:"1.25",hueRotate:"5"},LoFi:{brightness:"1.5",contrast:"0.99",grayscale:"0.6",invert:"0.23",sepia:"0.20"},"LoFi-2":{saturate:"1.1",contrast:"1.5"},Moon:{brightness:"1.4",contrast:"0.95",saturate:"0",sepia:"0.35"},Silver:{saturate:"0",invert:"0.2",brightness:"1.9",contrast:"1.6"}},g=a(90),E=(a(265),a(3)),v=a.n(E);!function(e){e[e.DRAG_ENTER=0]="DRAG_ENTER",e[e.NULL=1]="NULL"}(r||(r={}));var D={grayscale:"0",blur:"0",sepia:"0",saturate:"1",hueRotate:"0",invert:"0",opacity:"1",brightness:"1",contrast:"1",dropOffX:"0",dropOffY:"0",dropBlurRad:"0",dropColor:"#000"},x=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).reader=void 0,a.onImgChange=function(e){var t=e.target.files;a.handleFile(t)},a.onDragEnter=function(e){e.preventDefault(),a.setState({dragStatus:r.DRAG_ENTER})},a.onDragOver=function(e){e.preventDefault()},a.onDragLeave=function(){!a.state.imgUrl&&a.setState({dragStatus:r.NULL})},a.dropImage=function(e){e.preventDefault();var t=e.dataTransfer.files;a.handleFile(t)},a.handleFile=function(e){e&&a.reader.readAsDataURL(e[0])},a.updateValue=function(e,t){a.setState(function(a){return Object(s.a)({},a,Object(c.a)({},t,e))})},a.reloadFile=function(){a.setState({imgUrl:"",dragStatus:r.NULL})},a.resetFilters=function(){a.setState({selectedExample:"",filters:Object(s.a)({},D)})},a.setExampleFilter=function(e){a.setState({selectedExample:e.target.value,filters:Object(s.a)({},D,b[e.target.value])})},a.handleUpdate=function(e){return a.setState({filters:e})},a.handleUpdateDropColor=function(e){a.setState(function(t){return Object(s.a)({},t,{filters:Object(s.a)({},t.filters,{dropColor:e.hex})})})},a.state={imgUrl:"",dragStatus:r.NULL,selectedExample:"",filters:Object(s.a)({},D)},a.reader=new FileReader,a.reader.onload=function(){a.setState({imgUrl:String(a.reader.result)})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.imgUrl,a=e.filters,r=e.filters,n=r.grayscale,o=r.blur,i=r.sepia,c=r.saturate,s=r.invert,m=r.opacity,u=r.brightness,p=r.contrast,d=r.hueRotate,h=r.dropOffX,b=r.dropOffY,D=r.dropBlurRad,x=r.dropColor,N=e.dragStatus,y=e.selectedExample,O=["grayscale(".concat(n,")"),"blur(".concat(o,"px)"),"sepia(".concat(i,")"),"saturate(".concat(c,")"),"hue-rotate(".concat(d,"deg)"),"invert(".concat(s,")"),"opacity(".concat(m,")"),"brightness(".concat(u,")"),"contrast(".concat(p,")"),"drop-shadow(".concat(h,"px ").concat(b,"px ").concat(D,"px ").concat(x,")")].join(" ");return l.a.createElement("div",{className:"App"},l.a.createElement(v.a,{data:a,onUpdate:this.handleUpdate},l.a.createElement(E.DatNumber,{path:"grayscale",label:"grayscale",min:0,max:1,step:.1}),l.a.createElement(E.DatNumber,{path:"blur",label:"blur",min:0,max:10,step:.1}),l.a.createElement(E.DatNumber,{path:"sepia",label:"sepia",min:0,max:1,step:.1}),l.a.createElement(E.DatNumber,{path:"saturate",label:"saturate",min:0,max:1,step:.1}),l.a.createElement(E.DatNumber,{path:"hueRotate",label:"hue-rotate",min:0,max:360,step:1}),l.a.createElement(E.DatNumber,{path:"invert",label:"invert",min:0,max:1,step:.1}),l.a.createElement(E.DatNumber,{path:"opacity",label:"opacity",min:0,max:1,step:.1}),l.a.createElement(E.DatNumber,{path:"brightness",label:"brightness",min:0,max:1,step:.1}),l.a.createElement(E.DatNumber,{path:"contrast",label:"contrast",min:0,max:1,step:.1}),l.a.createElement(E.DatFolder,{title:"drop-shadow",closed:!1},l.a.createElement(E.DatNumber,{path:"dropOffX",label:"x",min:0,max:100,step:1}),l.a.createElement(E.DatNumber,{path:"dropOffY",label:"y",min:0,max:100,step:1}),l.a.createElement(E.DatNumber,{path:"dropBlurRad",label:"radius",min:0,max:10,step:.1}),l.a.createElement(E.DatString,{path:"dropColor",label:"color"}))),l.a.createElement("div",{style:{position:"fixed",right:16,top:388}},l.a.createElement(g.ChromePicker,{color:this.state.filters.dropColor,onChangeComplete:this.handleUpdateDropColor})),l.a.createElement(f,null),t?l.a.createElement(l.a.Fragment,null,l.a.createElement("img",{src:t,style:{filter:O}}),l.a.createElement("br",null),l.a.createElement("div",{className:"btn-row"},l.a.createElement("button",{onClick:this.reloadFile},"Reload Image"),l.a.createElement("button",{onClick:this.resetFilters},"Reset Filters"))):l.a.createElement("label",{htmlFor:"upload-file",onDragEnter:this.onDragEnter,onDragOver:function(e){return e.preventDefault()},onDragLeave:this.onDragLeave,onDrop:this.dropImage},l.a.createElement("div",{className:"label-".concat(N)},this.labelText)),l.a.createElement("input",{id:"upload-file",type:"file",accept:"image/*",onChange:this.onImgChange,className:"hidden"}),l.a.createElement("div",{className:"filters-container"},l.a.createElement("div",null,l.a.createElement("h2",null,"Examples"),l.a.createElement("select",{onChange:this.setExampleFilter,value:y},l.a.createElement("option",{value:""},"Default"),Object.keys(a).map(function(e){return l.a.createElement("option",{value:e,key:e},e)})),l.a.createElement("code",null,"filter: ",O,";"))))}},{key:"labelText",get:function(){switch(this.state.dragStatus){case r.DRAG_ENTER:return"Drop to load image!";case r.NULL:default:return"Drop or click to load image!"}}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},93:function(e,t,a){e.exports=a(266)},98:function(e,t,a){},99:function(e,t,a){}},[[93,1,2]]]);
//# sourceMappingURL=main.dea4fafd.chunk.js.map