montageDefine("1ec2fca","composer/composer",{dependencies:["../core/core","../core/target"],factory:function(e,n){var t=(e("../core/core").Montage,e("../core/target").Target);n.Composer=t.specialize({_component:{value:null},component:{get:function(){return this._component},set:function(e){this._component=e}},_element:{value:null},element:{get:function(){return this._element},set:function(e){this._element=e}},lazyLoad:{value:!1},_needsFrame:{value:!1},needsFrame:{set:function(e){this._needsFrame!==e&&(this._needsFrame=e,this._component&&e&&this._component.scheduleComposer(this))},get:function(){return this._needsFrame}},frame:{value:function(){}},_resolveDefaults:{value:function(){null==this.element&&null!=this.component&&(this.element=this.component.element)}},_load:{value:function(){this.element||this._resolveDefaults(),this.load()}},load:{value:function(){}},unload:{value:function(){}},deserializedFromTemplate:{value:function(){this.component&&this.component.addComposer(this)}}})}});