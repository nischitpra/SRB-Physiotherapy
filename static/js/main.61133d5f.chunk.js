(this.webpackJsonpsbr_physio=this.webpackJsonpsbr_physio||[]).push([[0],[,,,,,,,,function(e,n,t){e.exports=t.p+"static/media/HomePatientDoctor.5d5d9eef.svg"},,function(e,n,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},function(e,n,t){e.exports=t(22)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(7),c=t.n(o),i=(t(16),t(17),t(1)),l=t(2),s=t(3),u=t(4),m=t(8),d=t.n(m),p=t(5),h=t(9),f=(t(18),function(e){Object(u.a)(t,e);var n=Object(s.a)(t);function t(e){var a;return Object(i.a)(this,t),(a=n.call(this,e)).state={name:"",phoneNumber:"",address:""},a}return Object(l.a)(t,[{key:"changeFormValue",value:function(e,n){this.setState(Object(h.a)({},e,n))}},{key:"submitForm",value:function(){null!=this.props.slidingPanelRef&&this.props.slidingPanelRef.current.nextPanel()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"form-container"},r.a.createElement("div",{className:"form-title"},"Schedule an Appointment"),r.a.createElement("div",{className:"form-content"},r.a.createElement("input",{className:"form-content-row",type:"name",placeholder:"Name",onChange:function(n){return e.changeFormValue("name",n.target.value)}}),r.a.createElement("input",{className:"form-content-row",type:"phonenumber",placeholder:"Phone Number",onChange:function(n){return e.changeFormValue("phoneNumber",n.target.value)}})),r.a.createElement("button",{className:"form-submit-button",onClick:function(){return e.submitForm()}},"Book Now"))}}]),t}(r.a.Component)),b=(t(19),function(e){Object(u.a)(t,e);var n=Object(s.a)(t);function t(e){var a;return Object(i.a)(this,t),(a=n.call(this,e)).state={currentContentIndex:0,maxContentIndex:e.panels.length-1,currentContent:e.panels[0],nextContent:e.panels[1],nextButtonLabel:e.startButtonLabel},a}return Object(l.a)(t,[{key:"_enterAnimation",value:function(){document.getElementById("sliding-panel-content").className="enter"}},{key:"_exitAnimation",value:function(){document.getElementById("sliding-panel-content").className="exit"}},{key:"nextPanel",value:function(){var e=this;this.state.currentContentIndex<this.state.maxContentIndex&&(this._exitAnimation(),setTimeout((function(){var n=e.state.currentContentIndex+1,t=e.props.panels[n],a=null,r=e.props.endButtonLabel;n+1<e.props.panels.length&&(r=e.props.nextButtonLabel,a=e.props.panels[n+1]),e.setState({currentContentIndex:n,currentContent:t,nextContent:a,nextButtonLabel:r},e._enterAnimation)}),250))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"sliding-panel-content"},this.state.currentContent))}}]),t}(r.a.Component)),v=function(e){Object(u.a)(t,e);var n=Object(s.a)(t);function t(e){var a;return Object(i.a)(this,t),(a=n.call(this,e)).slidingPanelRef=r.a.createRef(),a.render1=a.render1.bind(Object(p.a)(a)),a.render2=a.render2.bind(Object(p.a)(a)),a.render3=a.render3.bind(Object(p.a)(a)),a}return Object(l.a)(t,[{key:"render1",value:function(){return r.a.createElement(f,{slidingPanelRef:this.slidingPanelRef})}},{key:"render2",value:function(){var e=this;return r.a.createElement("div",null,"This is plane 2. This should slide in after plane 1",r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){return e.slidingPanelRef.current.nextPanel()}},"Next"))}},{key:"render3",value:function(){var e=this;return r.a.createElement("div",null,"This is plane 3. This should slide in after plane 2.",r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){return e.slidingPanelRef.current.nextPanel()}},"Submit"))}},{key:"render",value:function(){return r.a.createElement("div",{className:this.props.className},r.a.createElement("h1",{className:"home-book-appointment-form-caption"},"We come to your home!"),r.a.createElement("hr",{style:{width:"200px"}}),r.a.createElement(b,{ref:this.slidingPanelRef,panels:[this.render1(),this.render2(),this.render3()]}))}}]),t}(r.a.Component),E=(t(20),function(e){Object(u.a)(t,e);var n=Object(s.a)(t);function t(){return Object(i.a)(this,t),n.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"home-container"},r.a.createElement("img",{className:"home-patient-image",src:d.a}),r.a.createElement(v,{className:"home-book-appointment-form"}))}}]),t}(a.Component)),g=t(10),y=t.n(g),j=(t(21),function(e){Object(u.a)(t,e);var n=Object(s.a)(t);function t(e){return Object(i.a)(this,t),n.call(this,e)}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"navbar"},r.a.createElement("img",{className:"logo",src:y.a}),r.a.createElement("div",{className:"company-block"},r.a.createElement("div",{className:"company-name"},"SRB Physio"),r.a.createElement("div",{className:"company-motto"},"Cure at Home")))}}]),t}(r.a.Component)),O=function(e){Object(u.a)(t,e);var n=Object(s.a)(t);function t(e){return Object(i.a)(this,t),n.call(this,e)}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(j,null),r.a.createElement(E,null))}}]),t}(r.a.Component);var N=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(O,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.61133d5f.chunk.js.map