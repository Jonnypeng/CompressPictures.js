"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var compressPictures = function () {
	function compressPictures(imgData) {
		var scale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.5;
		var encoder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "image/png";

		_classCallCheck(this, compressPictures);

		this.imgData = imgData;
		this.scale = scale;
		this.encoder = encoder;
		this.size = {
			natural: { width: imgData.naturalWidth, height: imgData.naturalHeight },
			compress: { width: imgData.naturalWidth * this.scale, height: imgData.naturalHeight * this.scale }
		};
		this.canvas = document.createElement("canvas");
		this.ctx = this.canvas.getContext("2d");
		this.DataURL;
		this.orientation = this.init();
	}

	_createClass(compressPictures, [{
		key: "init",
		value: function init() {
			var img = this.imgData;
			var orient;
			EXIF.getData(img, function () {
				orient = EXIF.getTag(this, 'Orientation');
			});
			return orient;
		}
	}, {
		key: "compress",
		get: function get() {
			this.canvas.style.display = "none";
			document.body.append(this.canvas);
			if (this.orientation == 1 || this.orientation == undefined) {
				this.canvas.setAttribute("width", this.size.compress.width);
				this.canvas.setAttribute("height", this.size.compress.height);
				this.ctx.drawImage(this.imgData, 0, 0, this.size.natural.width, this.size.natural.height, 0, 0, this.size.compress.width, this.size.compress.height);
				this.DataURL = this.canvas.toDataURL(this.encoder);
				document.body.removeChild(this.canvas);
				return this.DataURL;
			} else if (this.orientation == 6) {
				var offset = (this.size.compress.height - this.size.compress.width) * 0.5;
				this.canvas.setAttribute("width", this.size.compress.height);
				this.canvas.setAttribute("height", this.size.compress.width);
				transform.call(this, offset, 90);
				this.ctx.drawImage(this.imgData, 0, 0, this.size.natural.width, this.size.natural.height, this.size.compress.width * 0.5 * -1 - offset, this.size.compress.height * 0.5 * -1 - offset, this.size.compress.width, this.size.compress.height);
				this.DataURL = this.canvas.toDataURL(this.encoder);
				document.body.removeChild(this.canvas);
				return this.DataURL;
			}if (this.orientation == 8) {
				var offset = (this.size.compress.height - this.size.compress.width) * 0.5;
				this.canvas.setAttribute("width", this.size.compress.height);
				this.canvas.setAttribute("height", this.size.compress.width);
				transform.call(this, offset, -90);
				this.ctx.drawImage(this.imgData, 0, 0, this.size.natural.width, this.size.natural.height, this.size.compress.width * 0.5 * -1 + offset, this.size.compress.height * 0.5 * -1 + offset, this.size.compress.width, this.size.compress.height);
				this.DataURL = this.canvas.toDataURL(this.encoder);
				document.body.removeChild(this.canvas);
				return this.DataURL;
			}if (this.orientation == 3) {
				var offset = (this.size.compress.height - this.size.compress.width) * 0.5;
				this.canvas.setAttribute("height", this.size.compress.height);
				this.canvas.setAttribute("width", this.size.compress.width);
				transform.call(this, offset, -180);
				this.ctx.drawImage(this.imgData, 0, 0, this.size.natural.width, this.size.natural.height, this.size.compress.width * 0.5 * -1, this.size.compress.height * 0.5 * -1, this.size.compress.width, this.size.compress.height);
				this.DataURL = this.canvas.toDataURL(this.encoder);
				document.body.removeChild(this.canvas);
				return this.DataURL;
			} else {
				return false;
			};

			function transform(offset, angle) {
				this.ctx.setTransform(1, 0, 0, 1, 0, 0);
				this.ctx.translate(this.size.compress.width * 0.5, this.size.compress.height * 0.5);
				this.ctx.rotate(Math.PI / 180 * angle);
			};
		}
	}]);

	return compressPictures;
}();

;
