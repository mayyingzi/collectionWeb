function selectFileImage(fileObj) {
    var file = fileObj.files['0'];
    var Orientation = null;
    $('.loading_bg').fadeIn();
    if (file) {
        console.log("正在上传,请稍后...");
        var rFilter = /^(image\/jpeg|image\/png)$/i; // 检查图片格式
        if (!rFilter.test(file.type)) {
            //showMyTips("请选择jpeg、png格式的图片", false);
            return;
        }
        // var URL = URL || webkitURL;
        //获取照片方向角属性，用户旋转控制
        EXIF.getData(file, function () {
            // alert(EXIF.pretty(this));
            EXIF.getAllTags(this);
            //alert(EXIF.getTag(this, 'Orientation'));
            Orientation = EXIF.getTag(this, 'Orientation');
            //return;
        });

        var oReader = new FileReader();
        oReader.onload = function (e) {
            //var blob = URL.createObjectURL(file);
            //_compress(blob, file, basePath);
            var image = new Image();
            image.src = e.target.result;
            image.onload = function () {
                var expectWidth = this.naturalWidth;
                var expectHeight = this.naturalHeight;

                if (this.naturalWidth > this.naturalHeight && this.naturalWidth > 800) {
                    expectWidth = 800;
                    expectHeight = expectWidth * this.naturalHeight / this.naturalWidth;
                } else if (this.naturalHeight > this.naturalWidth && this.naturalHeight > 1200) {
                    expectHeight = 1200;
                    expectWidth = expectHeight * this.naturalWidth / this.naturalHeight;
                }
                var canvas = document.createElement("canvas");
                var ctx = canvas.getContext("2d");
                canvas.width = expectWidth;
                canvas.height = expectHeight;
                ctx.drawImage(this, 0, 0, expectWidth, expectHeight);
                var u = navigator.userAgent;
                //修复ios
                if (u.match(/iphone/i)) {
                    console.log('iphone');
                    //如果方向角不为1，都需要进行旋转 added by lzk
                    if (Orientation != "" && Orientation != 1) {
                        console.log('旋转处理');
                        switch (Orientation) {
                            case 6://需要顺时针（向左）90度旋转
                                console.log('需要顺时针（向左）90度旋转');
                                rotateImg(this, 'left', canvas);
                                break;
                            case 8://需要逆时针（向右）90度旋转
                                console.log('需要逆时针（向右）90度旋转');
                                rotateImg(this, 'right', canvas);
                                break;
                            case 3://需要180度旋转
                                console.log('需要180度旋转');
                                rotateImg(this, 'right', canvas);//转两次
                                rotateImg(this, 'right', canvas);
                                break;
                        }
                    }
                    //base64 在外定义为全局变量
                    //下面base64为得到旋转后的base64图片
                    base64 = canvas.toDataURL("image/jpeg", 0.8);
                    var type = 'jpeg';
                    var fixtype = function (type) {
                        type = type.toLocaleLowerCase().replace(/jpg/i, 'jpeg');
                        var r = type.match(/png|jpeg|bmp|gif/)[0];
                        return 'image/' + r;
                    };
                    base64 = base64.replace(fixtype(type), 'image/jpeg');
                    // saveFile(base64, '111')  此处是如果想要保存当前图片到本地的话;

                    //这里是把已经旋转过的图片路径赋值到img中
                    $(".fileimg").attr("src", base64);
                }
                else if (u.indexOf('Android') > -1 || u.indexOf('Adr') > -1) {// android可以直接不变
                    $(".fileimg").attr("src", e.target.result);
                    //如果安卓收到ios拍摄的照片，可以按PC端方式判断
                }
                else {
                    //修复PC端上上传ios拍出来的图片
                    if (Orientation != "" && Orientation != 1) {
                        //alert('旋转处理');
                        switch (Orientation) {
                            case 6://需要顺时针（向左）90度旋转
                                console.log('需要顺时针（向左）90度旋转');
                                rotateImg(this, 'left', canvas);
                                break;
                            case 8://需要逆时针（向右）90度旋转
                                console.log('需要逆时针（向右）90度旋转');
                                rotateImg(this, 'right', canvas);
                                break;
                            case 3://需要180度旋转
                                console.log('需要180度旋转');
                                rotateImg(this, 'right', canvas);//转两次
                                rotateImg(this, 'right', canvas);
                                break;
                        }
                    }
                    base64 = canvas.toDataURL("image/jpeg", 0.8);
                    var type = 'jpeg';
                    var fixtype = function (type) {
                        type = type.toLocaleLowerCase().replace(/jpg/i, 'jpeg');
                        var r = type.match(/png|jpeg|bmp|gif/)[0];
                        return 'image/' + r;
                    };
                    base64 = base64.replace(fixtype(type), 'image/jpeg');
                    // saveFile(base64, '111');
                    $(".fileimg").attr("src", base64);
                }

            };
        };
        oReader.readAsDataURL(file);
    }
}


//将图片保存到本地
var saveFile = function (data, filename) {
    var link = document.createElement('a');
    link.href = data;
    link.download = filename;
    var event = document.createEvent('MouseEvents');
    event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    link.dispatchEvent(event);
}


//对图片旋转处理 added by lzk
function rotateImg(img, direction, canvas) {
    //alert(img);
    //最小与最大旋转方向，图片旋转4次后回到原方向
    var min_step = 0;
    var max_step = 3;
    //var img = document.getElementById(pid);
    if (img == null) return;
    //img的高度和宽度不能在img元素隐藏后获取，否则会出错
    var height = img.height;
    var width = img.width;
    //var step = img.getAttribute('step');
    var step = 2;
    if (step == null) {
        step = min_step;
    }
    if (direction == 'right') {
        step++;
        //旋转到原位置，即超过最大值
        step > max_step && (step = min_step);
    } else {
        step--;
        step < min_step && (step = max_step);
    }
    //旋转角度以弧度值为参数
    var degree = step * 90 * Math.PI / 180;
    var ctx = canvas.getContext('2d');
    switch (step) {
        case 0:
            canvas.width = width;
            canvas.height = height;
            ctx.drawImage(img, 0, 0);
            break;
        case 1:
            canvas.width = height;
            canvas.height = width;
            ctx.rotate(degree);
            ctx.drawImage(img, 0, -height);
            break;
        case 2:
            canvas.width = width;
            canvas.height = height;
            ctx.rotate(degree);
            ctx.drawImage(img, -width, -height);
            break;
        case 3:
            canvas.width = height;
            canvas.height = width;
            ctx.rotate(degree);
            ctx.drawImage(img, -width, 0);
            break;
    }
}