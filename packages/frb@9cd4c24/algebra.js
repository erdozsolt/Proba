function solve(e,t){return solve.semantics.solve(e,t)}module.exports=solve,solve.semantics={solve:function(e,t){for(;;){for(;this.simplifiers.hasOwnProperty(e.type);){var n=this.simplifiers[e.type](e);if(!n)break;e=n}var i=this.rotateTargetToSource.hasOwnProperty(e.type),r=this.rotateSourceToTarget.hasOwnProperty(t.type);if(!i&&!r)break;i?(t=this.rotateTargetToSource[e.type](e,t),e=e.args[0]):r&&(e=this.rotateSourceToTarget[t.type](e,t),t=t.args[0])}return[e,t]},simplifiers:{not:function(e){var t=e.args[0];return"not"===t.type?t.args[0]:void 0},add:function(e){var t=e.args[0];return"literal"===t.type&&""===t.value?{type:"toString",args:[e.args[1]]}:void 0},someBlock:function(e){return{type:"not",args:[{type:"everyBlock",args:[e.args[0],{type:"not",args:[e.args[1]]}]}]}}},rotateTargetToSource:{reflect:function(e,t){return{type:e.type,args:[t]}},invert:function(e,t,n){return{type:n,args:[t,e.args[1]]}},toNumber:function(e,t){return this.reflect(e,t)},toString:function(e,t){return this.reflect(e,t)},not:function(e,t){return this.reflect(e,t)},neg:function(e,t){return this.reflect(e,t)},add:function(e,t){return this.invert(e,t,"sub")},sub:function(e,t){return this.invert(e,t,"add")},mul:function(e,t){return this.invert(e,t,"div")},div:function(e,t){return this.invert(e,t,"mul")},pow:function(e,t){return this.invert(e,t,"root")},root:function(e,t){return this.invert(e,t,"pow")},join:function(e,t){return this.invert(e,t,"split")},split:function(e,t){return this.invert(e,t,"join")}},rotateSourceToTarget:{rangeContent:function(e,t){return"rangeContent"===e.type?e:{type:t.type,args:[e]}}}};