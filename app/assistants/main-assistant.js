function MainAssistant() { }

MainAssistant.prototype.setup = function() {
	this.controller.enableFullScreenMode(false);
    var attr = {
	virtualpagewidth: this.controller.window.innerWidth,
	//virtualpagewidth: Mojo.Environment.DeviceInfo.screenWidth,
    virtualpageheight: this.controller.window.innerHeight, 
    //virtualpageheight: Mojo.Environment.DeviceInfo.screenHeight,
		useMouseEvents: true,
		showClickedLink: false, 
		url: "http://m.here.net"
	};
	this.controller.setupWidget('MapWebContainer',attr, this.MapWebContainerModel = {} ); 
};
