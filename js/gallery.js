/**
 * Created by 24327 on 2018/6/12.
 */
function chg(e) {
    var $img = $(e.srcElement || e.target);         //添加对 IE的支持，并封装为JQuery对象
    if($img.attr("class")!="pic")
        return;
    if($img.width()==218) {                         //根据图片大小调整
        $img.width("250px");
        $img.height("250px");
    } else {
        $img.width("218px");
        $img.height("218px");
    }

}
