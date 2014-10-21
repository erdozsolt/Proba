var Montage=require("montage").Montage,Component=require("montage/ui/component").Component,AbstractButton=require("montage/ui/base/abstract-button").AbstractButton;exports.VideoControl=Montage.create(Component,{constructor:{value:function(){Component.constructor.call(this),this.addPathChangeListener("videoController.status",this,"handleControllerStatusChange"),this.defineBinding("_controlTrack.value",{"<->":"videoController.position",source:this}),this.defineBinding("_controlTrack.max",{"<-":"videoController.duration",source:this}),this.defineBinding("_controlTrack.time",{"<-":"videoController.position",source:this})}},handlePlayAction:{value:function(){this.videoController.status===this.videoController.PLAYING?this.videoController.pause():this.videoController.status===this.videoController.PAUSED?this.videoController.unpause():this.videoController.play()}},handleFullScreenAction:{value:function(){this.video.toggleFullScreen()}},videoController:{value:null},handleControllerStatusChange:{value:function(e){this.videoController&&(e===this.videoController.PLAYING?this.classList.add("digit-VideoControl--playing"):this.classList.remove("digit-VideoControl--playing"))}},_controlTrack:{value:null}}),exports.Button=Montage.create(AbstractButton,{hasTemplate:{value:!1}});