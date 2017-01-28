$(function () {
    $(".closet img").draggable({
        drag: function (e) {
            $(e.target).css("z-index", "100");
        },
        stop: function (e) {
            console.log(e.target)
            $(e.target).css("z-index", "1");
        }
    });
    $(".closet img").click(function (){
        $(this).css("z-index", "100");
    });
});