<div class="col-xs-12 col-md-12">
<h4>起步：</h4>
<p>
本项目只适用于移动设备，因为移动设备可以获取exif信息，才能正确对图片方向进行取正;
  先导入外部的<a href="https://github.com/exif-js/exif-js">exif.js<a>,这是读取图片exif数据的库，在这里我们主要获取照片的方向；
  然后导入build的compressPictures.js;
</p>
  <h4>起步：</h4>
  <p>
    先导入外部的<a href="https://github.com/exif-js/exif-js">exif.js<a>,这是读取图片exif数据的库，在这里我们主要获取照片的方向,如果方向为1，为正；如果方向为6，则需要旋转;
    然后导入build的compressPictures.js;
  </p>
  <h4>构造：</h4>
  <p>
    new compressPictures(imgData,scale,encoder);
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
        <td>scale</td>
        <td>Number</td>
        <td>默认为0，最大值为1</td>
      </tr>
      <tr>
        <td>encoder</td>
        <td>String</td>
        <td>默认值为"image/png",可以为"image/jpeg"</td>
      </tr>
    </tbody>
  </table>
  <h4>属性</h4>
  <p>
    compress; #这就是一个已经压缩的base64编码；
  </p>
  <h4>举例:</h4>
  <p>
    var data = new compressPictures(tempImg,0.3,"image/jpeg");<br>
    img.setAttribute("src",data.compress);
  </p>
</div>
