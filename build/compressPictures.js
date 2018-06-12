class compressPictures{
	constructor(imgData,ratio = 0.5,encoder = "image/png"){
		this.imgData = imgData;
		this.ratio = ratio;
		this.encoder = encoder;
		this.size = {
			natural:{width:imgData.naturalWidth,height:imgData.naturalHeight},
			compress:{width:imgData.naturalWidth*this.ratio,height:imgData.naturalHeight*this.ratio}
		};
		this.canvas = document.createElement("canvas");
		this.ctx = this.canvas.getContext("2d");
		this.DataURL;
		this.init();
	}
	init(){
		this.canvas.setAttribute("width",this.size.compress.width);
		this.canvas.setAttribute("height",this.size.compress.height);
		this.canvas.style.display = "none";
		document.body.append(this.canvas);
	}
	compress(){
		this.ctx.drawImage(
			this.imgData,
			0,
			0,
			this.size.natural.width,
			this.size.natural.height,
			0,
			0,
			this.size.compress.width,
			this.size.compress.height);
		this.DataURL = this.canvas.toDataURL(this.encoder);
		return this.DataURL;
	}
}
