montageDefine("60ecd96","http-apps/chain",{dependencies:[],factory:function(e,t,n){function i(e){var t=Object.create(i.prototype);return t.end=e||function(e){return e},t}n.exports=i,i.prototype.use=function(e){if(!e)throw Error("App is not defined after "+this.app);var t=Array.prototype.slice.call(arguments,1),n=this;return this.end=function(i){return function r(a){if(n.end!==r&&!a)throw Error("App chain is broken after "+e);return i(e.apply(null,[a].concat(t)))}}(this.end),this.app=e,this}}});