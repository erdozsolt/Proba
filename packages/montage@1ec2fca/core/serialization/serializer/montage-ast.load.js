montageDefine("1ec2fca","core/serialization/serializer/montage-ast",{dependencies:["../../core","mousse/serialization/ast"],factory:function(e,t){var n=e("../../core").Montage,r=e("mousse/serialization/ast").Value,i=n.specialize.call(r,{constructor:{value:function i(){}},initWithRootAndId:{value:function(e,t){return r.call(this,e,t),this}},_getSerializationValue:{value:function(){return{"#":this.value}}}}),a=n.specialize.call(r,{constructor:{value:function a(){}},initWithRootAndModuleId:{value:function(e,t){return r.call(this,e,t),this}},_getSerializationValue:{value:function(){return{"%":this.value}}}});t.ElementReference=i,t.ModuleReference=a}});