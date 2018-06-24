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
			var offset = (this.size.compress.height - this.size.compress.width)*0.5;
			this.canvas.setAttribute("width",this.size.compress.height);
			this.canvas.setAttribute("height",this.size.compress.width);
			transform.call(this,offset,90);
			this.ctx.drawImage(this.imgData, 0, 0, this.size.natural.width, this.size.natural.height, this.size.compress.width*0.5*-1 - offset, this.size.compress.height*0.5*-1 - offset, this.size.compress.width, this.size.compress.height);
			this.DataURL = this.canvas.toDataURL(this.encoder);
			document.body.removeChild(this.canvas);
			return this.DataURL;
		}else if(this.orientation==8){
			var offset = (this.size.compress.height - this.size.compress.width)*0.5;
			this.canvas.setAttribute("width",this.size.compress.height);
			this.canvas.setAttribute("height",this.size.compress.width);
			transform.call(this,offset,-90);
			this.ctx.drawImage(this.imgData, 0, 0, this.size.natural.width, this.size.natural.height, this.size.compress.width*0.5*-1 + offset, this.size.compress.height*0.5*-1 + offset, this.size.compress.width, this.size.compress.height);
			this.DataURL = this.canvas.toDataURL(this.encoder);
			document.body.removeChild(this.canvas);
			return this.DataURL;
		}else if(this.orientation==3){
			var offset = (this.size.compress.height - this.size.compress.width)*0.5;
			this.canvas.setAttribute("height",this.size.compress.height);
			this.canvas.setAttribute("width",this.size.compress.width);
			transform.call(this,offset,-180);
			this.ctx.drawImage(this.imgData, 0, 0, this.size.natural.width, this.size.natural.height, this.size.compress.width*0.5*-1,this.size.compress.height*0.5*-1, this.size.compress.width, this.size.compress.height);
			this.DataURL = this.canvas.toDataURL(this.encoder);
			document.body.removeChild(this.canvas);
			return this.DataURL;
		}else{
			return false;
		};

		function transform(offset,angle){
			this.ctx.setTransform(1,0,0,1,0,0);
			this.ctx.translate(this.size.compress.width*0.5,this.size.compress.height*0.5);
			this.ctx.rotate((Math.PI/180)*angle);
		};
	}
};
