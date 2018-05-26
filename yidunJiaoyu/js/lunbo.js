
    var mIndex = 0;
    var adTimer = null;
    var items = $(".fixBigDiv  #jsItems a");
    // alert(items.length);
    // var changeDiv = $("#theimgsGoDiv");
    var count = items.length;
    // alert(count)
    items.bind('click',function () {
        mIndex = items.index(this);
        changeImg(mIndex);
    }).eq(0).trigger('click');

    //滑入 停止动画，滑出开始动画.
    // alert();
    // $("#theimgsGoDiv").hover(function () {
    //     // alert("in");
    //     if (adTimer) {
    //         clearInterval(adTimer);
    //     }
    // }, function () {
    //     // alert("out");
        adTimer = setInterval(function () {
            // alert("计时"+mIndex);
            changeImg(mIndex);
            mIndex++;
            if (mIndex == count) {
                mIndex = 0;
            }
        }, 2000);
    // }).trigger("mouseleave");

    function changeImg(index) {
        // alert("change,index="+index);
        $(" .frame a ").find("img").eq(index).stop(true, true).fadeIn().siblings().fadeOut();
        $("  #jsItems a").removeClass("chos").eq(index).addClass("chos");
    }

