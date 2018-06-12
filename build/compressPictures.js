class compressPictures{
	constructor(imgData,scale = 0.5,encoder = "image/png"){
		this.imgData = imgData;
		this.scale = scale;
		this.encoder = encoder;
		this.size = {
			natural:{width:imgData.naturalWidth,height:imgData.naturalHeight},
			compress:{width:imgData.naturalWidth*this.scale,height:imgData.naturalHeight*this.scale}
		};
		this.canvas = document.createElement("canvas");
		this.ctx = this.canvas.getContext("2d");
		this.DataURL;
		this.orientation = this.init();
	}
	init(){
		var img = this.imgData;
		var orient;
		EXIF.getData(img, function () {
			orient = EXIF.getTag(this, 'Orientation');
		});
		return orient;
	}
	get compress(){
		this.canvas.style.display = "none";
		document.body.append(this.canvas);
		if(this.orientation==1 || this.orientation==undefined){
			this.canvas.setAttribute("width",this.size.compress.width);
			this.canvas.setAttribute("height",this.size.compress.height);
			this.ctx.drawImage( this.imgData, 0, 0, this.size.natural.width, this.size.natural.height, 0, 0, this.size.compress.width, this.size.compress.height);
			this.DataURL = this.canvas.toDataURL(this.encoder);
			document.body.removeChild(this.canvas);
			return this.DataURL;
		}else if(this.orientation==6){
			this.canvas.setAttribute("height",this.size.compress.width);
			this.canvas.setAttribute("width",this.size.compress.height);
			this.ctx.setTransform(1,0,0,1,0,0);
			this.ctx.rotate((Math.PI/180)*90);
			this.ctx.translate(0,this.size.compress.height*-1);
			this.ctx.drawImage( this.imgData, 0, 0, this.size.natural.width, this.size.natural.height, 0, 0, this.size.compress.width, this.size.compress.height);
			this.DataURL = this.canvas.toDataURL(this.encoder);
			document.body.removeChild(this.canvas);
			return this.DataURL;
		}else{
			return false;
		};
	}
};
