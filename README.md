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
<div class="col-xs-12 col-md-12">
  <h4>构造：</h4>
  <p>
    new compressPictures(imgData,ratio,encoder);
  </p>
<table class="table table-bordered">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>imgData</td>
<td>HTML Img Element	</td>
<td>需要压缩的DOM图片元素</td>
</tr>
<tr>
<td>ratio</td>
<td>Number</td>
<td>默认为0，最大值为1</td>
</tr>
<tr>
<td>encoder</td>
<td>String</td>
<td>默认值为"images/png",可以为"image/jpeg"</td>
</tr>
</tbody>
</table>
<h4>压缩方法：</h4>
<p>
compress();
</p>
<h4>举例:</h4>
<p>
var data = new compressPictures(tempImg,0.3,"image/jpeg");<br>
img.setAttribute("src",data.compress());
</p>
</div>
This library is available under the MIT license.
