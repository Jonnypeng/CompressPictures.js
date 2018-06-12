# CompressPictures.js
通过canvas压缩原始图片的尺寸，从而实现压缩图片的目的；
## 如何使用
1.导入 compressPictures.js
2.创建一个变量接收数据，通过 new compressPictures("需要压缩的图片／DOM元素","压缩比例／取值范围 0 ~ 1","编码方式 / 'image/jpeg' 或 'image/png'"); 后面两个参数在缺省状态下，比例为0.5，编码方式为png；
3.压缩图片，变量.compress()；

例如：
	var data = new compressPictures(tempImg,0.3,"image/jpeg");  //接收数据
  var imgUrl = data.compress();    //执行压缩,返回图片的base64编码，通过src进行接收

## License

This library is available under the MIT license.
