/**
 * Created by 24327 on 2018/6/12.
 */
function chg(e) {
    var $img = $(e.srcElement || e.target);         //��Ӷ� IE��֧�֣�����װΪJQuery����
    if($img.attr("class")!="pic")
        return;
    if($img.width()==218) {                         //����ͼƬ��С����
        $img.width("250px");
        $img.height("250px");
    } else {
        $img.width("218px");
        $img.height("218px");
    }

}
