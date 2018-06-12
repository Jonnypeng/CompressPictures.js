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
