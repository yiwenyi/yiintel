/**
 * Created by Zyra on 2016/4/14.
 */
$('[data-toggle="mask"]').hover(function () {
    $(this).animate({top:0});
}, function () {
    $(this).animate({top:'80%'});
});

var $imgs = $('img');
//console.log($imgs);
var n = $imgs.length;
var picCount = 0;
$imgs.each(function () {
    var $img = $(this);
    //console.log($img[0])
    $img[0].onload = function () {
        picCount++;
        // console.log(picCount)
        if (n == picCount) {
            var rows = $('.row-height');
            for (var i = 0; i < rows.length; i++) {
                //console.log(rows[i]);
                var rowheight = $(rows[i]).height();
                var picheight = $('.pic-height-' + i).height();
                var textheight = $('.set-top-' + i).innerHeight();
                //console.log(rowheight);
                //console.log(picheight);
                var height = (rowheight - picheight - textheight) / 2;
                console.log(height)
                $('.set-top-' + i).css({'margin-top': height,'padding-left':'1em'});
            }
        }
    }
});
