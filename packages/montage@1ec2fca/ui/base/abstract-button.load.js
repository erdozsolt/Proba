montageDefine("1ec2fca","ui/base/abstract-button",{dependencies:["../../core/core","./abstract-control","../../composer/press-composer"],factory:function(e,t){var n=(e("../../core/core").Montage,e("./abstract-control").AbstractControl),r=e("../../composer/press-composer").PressComposer,i=t.AbstractButton=n.specialize({constructor:{value:function i(){if(this.constructor===i)throw Error("AbstractControl cannot be instantiated.");this.super(),this._pressComposer=new r,this.addComposer(this._pressComposer),this._pressComposer.defineBinding("longPressThreshold ",{"<-":"holdThreshold",source:this}),this.defineBinding("classList.has('montage--disabled')",{"<-":"!enabled"}),this.defineBinding("classList.has('montage--active')",{"<-":"active"})}},enabled:{value:!0},_preventFocus:{value:!1},preventFocus:{get:function(){return this._preventFocus},set:function(e){this._preventFocus=!!e,this.needsDraw=!0}},acceptsActiveTarget:{value:function(){return!this._preventFocus}},willBecomeActiveTarget:{value:function(){}},_labelNode:{value:void 0,enumerable:!1},_label:{value:void 0,enumerable:!1},label:{get:function(){return this._label},set:function(e){if(e!==void 0&&this.converter)try{e=this.converter.convert(e),this.error&&(this.error=null)}catch(t){this.error=t}this._label=""+e,this.needsDraw=!0}},holdThreshold:{value:1e3},_pressComposer:{value:null},_active:{value:!1},active:{get:function(){return this._active},set:function(e){this._active=e,this.needsDraw=!0}},prepareForActivationEvents:{value:function(){this._pressComposer.addEventListener("pressStart",this,!1),this._pressComposer.addEventListener("press",this,!1),this._pressComposer.addEventListener("pressCancel",this,!1)}},addEventListener:{value:function(e,t,r){n.addEventListener.call(this,e,t,r),"longAction"===e&&this._pressComposer.addEventListener("longPress",this,!1)}},handlePressStart:{value:function(e){this.active=!0,e.touch&&document.addEventListener("touchmove",this,!1),this._preventFocus||this._element.focus()}},handlePress:{value:function(){this.active=!1,this.dispatchActionEvent(),document.removeEventListener("touchmove",this,!1)}},handleKeyup:{value:function(e){32===e.keyCode&&(this.active=!1,this.dispatchActionEvent())}},handleLongPress:{value:function(){this._pressComposer.cancelPress();var e=document.createEvent("CustomEvent");e.initCustomEvent("longAction",!0,!0,null),this.dispatchEvent(e)}},handlePressCancel:{value:function(){this.active=!1,document.removeEventListener("touchmove",this,!1)}},handleTouchmove:{value:function(e){e.preventDefault()}},isInputElement:{value:!1},enterDocument:{value:function(e){e&&(this.isInputElement="INPUT"===this.originalElement.tagName,this.isInputElement?void 0===this._label&&(this.label=this.originalElement.value):(this.originalElement.firstChild||this.originalElement.appendChild(document.createTextNode("")),this._labelNode=this.originalElement.firstChild,void 0===this._label&&(this.label=this._labelNode.data)),this.element.setAttribute("role","button"),this.element.addEventListener("keyup",this,!1))}},_drawLabel:{enumerable:!1,value:function(e){this.isInputElement?this._element.value=e:this._labelNode&&(this._labelNode.data=e)}},draw:{value:function(){this._elementNeedsTabIndex()&&(this._preventFocus?this.element.removeAttribute("tabindex"):this.element.setAttribute("tabindex","-1")),this.isInputElement&&(this.element.disabled=!this.enabled),this._drawLabel(this.label)}},_elementNeedsTabIndexRegex:{value:/INPUT|TEXTAREA|A|SELECT|BUTTON|LABEL/},_elementNeedsTabIndex:{value:function(){return null===this.element.tagName.match(this._elementNeedsTabIndexRegex)}}})}});