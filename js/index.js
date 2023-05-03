

$(document).ready(function(){
    $(".back").css("background","url('http://api.btstu.cn/sjbz/?lx=dongman')  center center no-repeat")

    $(".head").attr("src","http://q1.qlogo.cn/g?b=qq&nk=1145787499&s=640")
    
    // 每日一句   (√)

    $.ajax({
        url:"https://v1.hitokoto.cn",
        method:"get",
        success:function (data){
            var sentence="弱小和无知不是生存的障碍 傲慢才是 -- 《三体》"
            if(data.hitokoto){
                sentence=data.hitokoto;
                if(data.from_who&&data.from_who!=null){
                    sentence=sentence+" --"+data.from_who;
                }
            }
            $(".stences span").html(sentence);
        }
    })
});


