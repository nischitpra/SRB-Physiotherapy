(this.webpackJsonpsbr_physio=this.webpackJsonpsbr_physio||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/1.ac7a6f14.JPG"},function(e,t,a){e.exports=a.p+"static/media/2.cd11a005.JPG"},function(e,t,a){e.exports=a.p+"static/media/3.bbda2bb1.JPG"},function(e,t,a){e.exports=a.p+"static/media/4.9ebc0b69.JPG"},function(e,t,a){e.exports=a.p+"static/media/5.8556ca13.JPG"},function(e,t,a){e.exports=a.p+"static/media/6.226484af.JPG"},function(e,t,a){e.exports=a.p+"static/media/7.89361c97.JPG"},function(e,t,a){e.exports=a.p+"static/media/8.6d232336.JPG"},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){e.exports=a(26)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/HomePatientDoctor.5d5d9eef.svg"},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),o=a.n(i),s=(a(24),a(1)),c=a(2),l=a(4),m=a(3),u=a(5),d=(a(25),a(6)),h=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={name:"",phoneNumber:"",date:"",disableButton:!1},n}return Object(c.a)(a,[{key:"changeFormValue",value:function(e,t){this.setState(Object(d.a)({},e,t))}},{key:"submitForm",value:function(){var e=this;this.setState({disableButton:!0});var t="https://docs.google.com/forms/d/e/1FAIpQLSdzM-T-0_C6kr5AEugu7kSt_bcHO2nM7W2t1_AcfujsT7l_mA/formResponse?usp=pp_url&entry.1000057=".concat(this.state.name,"&entry.1000027=").concat(this.state.phoneNumber,"&entry.2055232012=").concat(this.state.date);fetch("https://cors-anywhere.herokuapp.com/"+t).then((function(t){e.setState({disableButton:!1});var a="";t.ok?t.text().then((function(t){for(var n=t.indexOf("edit2=")+"edit2=".length;n<t.length;n++){var r=t[n];if('"'==r||"&"==r)break;a+=t[n]}e.props.updateFormData("formId",a),null!=e.props.slidingPanelRef&&e.props.slidingPanelRef.current.nextPanel()})):(console.log("Something is not right. The server responded with error"),alert("Please check from data and try again."))})).catch((function(t){console.log("Could not submit form"),e.setState({disableButton:!1})}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"flex-center"},r.a.createElement("h1",{className:"book-appointment-form-caption"},"We come to your home!"),r.a.createElement("hr",{style:{width:"200px"}}),r.a.createElement("div",{className:"form-container"},r.a.createElement("div",{className:"form-title"},"Schedule an Appointment"),r.a.createElement("div",{className:"form-content"},r.a.createElement("input",{className:"form-content-row",type:"name",placeholder:"Name",onChange:function(t){return e.changeFormValue("name",t.target.value)}}),r.a.createElement("input",{className:"form-content-row",type:"phonenumber",placeholder:"Phone Number",onChange:function(t){return e.changeFormValue("phoneNumber",t.target.value)}}),r.a.createElement("label",{className:"form-content-row datepicker-container"},r.a.createElement("span",{className:"datepicker-label"},"Book date"),r.a.createElement("input",{className:"datepicker",type:"date",placeholder:"Date",onChange:function(t){return e.changeFormValue("date",t.target.value)}}))),r.a.createElement("button",{className:"form-submit-button",onClick:function(){return e.submitForm()},disabled:this.state.disableButton},"Book Now")))}}]),a}(r.a.Component),p=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={address:"",problem:""},n}return Object(c.a)(a,[{key:"changeFormValue",value:function(e,t){this.setState(Object(d.a)({},e,t))}},{key:"submitForm",value:function(){var e=this;this.setState({disableButton:!0});var t="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdzM-T-0_C6kr5AEugu7kSt_bcHO2nM7W2t1_AcfujsT7l_mA/formResponse?edit2=".concat(this.props.formId,"&entry.1000025=").concat(this.state.address,"&entry.329804431=").concat(this.state.problem);fetch("https://cors-anywhere.herokuapp.com/"+t).then((function(t){e.setState({disableButton:!1});var a="";t.ok?t.text().then((function(t){for(var n=t.indexOf("edit2=")+"edit2=".length;n<t.length;n++){var r=t[n];if('"'==r||"&"==r)break;a+=t[n]}e.props.updateFormData("formId",a),null!=e.props.slidingPanelRef&&e.props.slidingPanelRef.current.nextPanel()})):(console.log("Something is not right. The server responded with error"),alert("Please check from data and try again."))})).catch((function(t){console.log("Could not submit form"),e.setState({disableButton:!1})}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"flex-center"},r.a.createElement("div",{className:"form-container"},r.a.createElement("div",{className:"form-title"},"Just a few more details"),r.a.createElement("div",{className:"form-content"},r.a.createElement("textarea",{className:"form-content-row textarea",type:"name",placeholder:"Address",onChange:function(t){return e.changeFormValue("address",t.target.value)}}),r.a.createElement("input",{className:"form-content-row",type:"name",placeholder:"Problem you're facing",onChange:function(t){return e.changeFormValue("problem",t.target.value)}})),r.a.createElement("button",{className:"form-submit-button",onClick:function(){return e.submitForm()},disabled:this.state.disableButton},"Submit")))}}]),a}(r.a.Component),f=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"flex-center"},r.a.createElement("h1",{className:"book-appointment-form-caption"},"Thankyou!"),r.a.createElement("div",{className:"form-container"},r.a.createElement("div",{className:"form-title-thankyou"},"We will contact you shortly")))}}]),a}(r.a.Component),b=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={currentContentIndex:0,maxContentIndex:e.panels.length-1,currentContent:e.panels[0],nextContent:e.panels[1],nextButtonLabel:e.startButtonLabel},n}return Object(c.a)(a,[{key:"_enterAnimation",value:function(){document.getElementById("sliding-panel-content").className="enter"}},{key:"_exitAnimation",value:function(){document.getElementById("sliding-panel-content").className="exit"}},{key:"nextPanel",value:function(){var e=this;this.state.currentContentIndex<this.state.maxContentIndex&&(this._exitAnimation(),setTimeout((function(){var t=e.state.currentContentIndex+1,a=e.props.panels[t],n=null,r=e.props.endButtonLabel;t+1<e.props.panels.length&&(r=e.props.nextButtonLabel,n=e.props.panels[t+1]),e.setState({currentContentIndex:t,currentContent:a,nextContent:n,nextButtonLabel:r},e._enterAnimation)}),250))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{id:"sliding-panel-content"},this.state.currentContent),this.props.startButtonLabel&&r.a.createElement("button",{onClick:function(){return e.nextPanel()}},this.state.nextButtonLabel))}}]),a}(r.a.Component),v=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={formId:""},n.slidingPanelRef=r.a.createRef(),n.updateFormData=n.updateFormData.bind(Object(u.a)(n)),n.render1=n.render1.bind(Object(u.a)(n)),n.render2=n.render2.bind(Object(u.a)(n)),n.render3=n.render3.bind(Object(u.a)(n)),n}return Object(c.a)(a,[{key:"updateFormData",value:function(e,t){this.setState(Object(d.a)({},e,t))}},{key:"render1",value:function(){return r.a.createElement(h,{slidingPanelRef:this.slidingPanelRef,updateFormData:this.updateFormData})}},{key:"render2",value:function(){return r.a.createElement(p,{slidingPanelRef:this.slidingPanelRef,updateFormData:this.updateFormData,formId:this.state.formId})}},{key:"render3",value:function(){return r.a.createElement(f,null)}},{key:"render",value:function(){return r.a.createElement("div",{className:this.props.className},r.a.createElement(b,{ref:this.slidingPanelRef,panels:[this.render1(),this.render2(),this.render3()]}))}}]),a}(r.a.Component),g=a(7),y=a(10),E=a.n(y),x=a(11),k=a.n(x),N=a(12),O=a.n(N),j=a(13),C=a.n(j),I=a(14),P=a.n(I),B=a(15),F=a.n(B),w=a(16),S=a.n(w),R=a(17),A=a.n(R),_=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={images:[E.a,k.a,O.a,C.a,P.a,F.a,S.a,A.a],index:0,index1:0,index2:0,isImg1Visible:!0},n.animateMainImage=n.animateMainImage.bind(Object(u.a)(n)),n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.imageInterval=setInterval(this.animateMainImage,2e3)}},{key:"animateMainImage",value:function(){this.state.index=(this.state.index+1)%this.state.images.length,this.state.isImg1Visible?this.state.index2=this.state.index:this.state.index1=this.state.index,this.setState({isImg1Visible:!this.state.isImg1Visible})}},{key:"render",value:function(){var e={open:{opacity:1},closed:{opacity:0}};return r.a.createElement("div",{style:{flex:1}},r.a.createElement("div",{className:"home-container"},r.a.createElement("div",{className:"flex-1 main-physio-image-container"},r.a.createElement(g.a,null,r.a.createElement(g.b.img,{className:"main-image",animate:this.state.isImg1Visible?"open":"closed",variants:e,src:this.state.images[this.state.index1]}),r.a.createElement(g.b.img,{className:"main-image",animate:this.state.isImg1Visible?"closed":"open",variants:e,src:this.state.images[this.state.index2]}))),r.a.createElement(v,{className:"flex-center basic-form"})),r.a.createElement("div",{className:"footer"},r.a.createElement("div",null,r.a.createElement("i",{class:"fa fa-phone",style:{marginLeft:24,marginRight:8}}),"+918837647890"),r.a.createElement("div",null,r.a.createElement("i",{className:"fa ",style:{marginLeft:24,marginRight:8}},"\uf0e0"),"ramratanyadav@gmail.com")))}}]),a}(n.Component),V=a(18),D=a.n(V),J=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(s.a)(this,a),t.call(this,e)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"navbar"},r.a.createElement("img",{className:"logo",src:D.a}),r.a.createElement("div",{className:"company-block"},r.a.createElement("div",{className:"company-name"},"SRB Physio"),r.a.createElement("div",{className:"company-motto"},"Cure at Home")))}}]),a}(r.a.Component),L=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(s.a)(this,a),t.call(this,e)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"dashboard"},r.a.createElement(J,null),r.a.createElement(_,null))}}]),a}(r.a.Component);var M=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(L,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[19,1,2]]]);
//# sourceMappingURL=main.bd27f7f3.chunk.js.map