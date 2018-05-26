function ulOut() {
    // alert();
    if ($(this).attr('class') != null) {
        var className = $(this).attr('class');
        $('.secUlDiv').css('display', 'block');
        $(".secUlDiv div").each(function () {
            if ($(this).hasClass(className)) {
                $(this).css('display', 'block').siblings().css('display', 'none');
                ;
            }
        });
        // $('.secUlDiv .'+className).css('display','block');
    }
}

function ulHind() {
    // alert();


    $('.secUlDiv').css('display', 'none');
    $('.secUlDiv div').css('display', 'none');


}