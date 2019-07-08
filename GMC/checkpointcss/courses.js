
// document.querySelector("#l1").addEventListener("click",function(){
//     document.querySelector("#aaa").style.fontWeight="bold";
// })
// document.querySelector("#l2").addEventListener("click",function(){
//     document.querySelector("#aaa").style.fontStyle="italic";
// })
// document.querySelector("#l3").addEventListener("click",function(){
//     document.querySelector("#aaa").style.textDecoration="underline";
// })
// var a=document.getElementById("aaa");
var b=document.getElementById("size");
var f=document.getElementById("fam");
var a=document.getElementById("aaa");
// function bo(){
//     a.style.fontWeight="bold";
    
// }
// function i(){
//     a.style.fontStyle="italic";
// }
// function u(){
//     a.style.textDecoration="underline";
// }
 
// function ft(){
//     a.style.fontSize=b.value;
// }
// function ff(){
//     a.style.fontFamily=f.value;
// }
// function bo(){
// if (a.style.fontWeight=="bold"){
//     a.style.fontWeight="normal";
// }
// else{
//     a.style.fontWeight="bold";
// }
// }
$("#l14").click(function(){
    $("#comment").fadeOut("1000");
});
$("#l2").click(function(){
$("#comment").css("font-style","italic");
});
$("#l1").click(function(){
    if ($("#comment").css('font-weight')==700)
    {  
        $("#comment").css("font-weight","normal") 
    }else{
        $("#comment").css("font-weight","bold")
    }
});
$("#l3").click(function(){
    $("#comment").css("textDecoration","underline")
});
$("#fam").change(function(){
    $("#comment").css("fontFamily",$("#fam").val())
});
$("#size").change(function(){
    $("#comment").css("fontSize",$("#size").val())
});
$("#ko").mouseover(function(){
$(".bot").show();
$("#ko").css("opacity","0.7")
})
$("#ko").mouseleave(function(){
    $(".bot").hide();
    $("#ko").css("opacity","1")
    })
$("#ka").mouseleave(function(){
    $(".bot2").hide();
    $("#ka").css("opacity","1")
    })
$("#ka").mouseover(function(){
        $(".bot2").show();
        $("#ka").css("opacity","0.7")
        })   
$("#ke").mouseover(function(){
        $(".bot3").show();
        $("#ke").css("opacity","0.7")
        })
 $("#ke").mouseleave(function(){
            $(".bot3").hide();
            $("#ke").css("opacity","1")
            })       
$("#kz").mouseleave(function(){
            $(".bot4").hide();
            $("#kz").css("opacity","1")
            })
 $("#kz").mouseover(function(){
                $(".bot4").show();
                $("#kz").css("opacity","0.7")
                })           
 $("#kq").mouseover(function(){
                $(".bot5").show();
                $("#kq").css("opacity","0.7")
                })
                $("#kq").mouseleave(function(){
                    $(".bot5").hide();
                    $("#kq").css("opacity","1")
                    })                

$("#ks").mouseleave(function(){
                          $(".bot6").hide();
                            $("#ks").css("opacity","1")
                            })  
                            $("#ks").mouseover(function(){
                                $(".bot6").show();
                                $("#kS").css("opacity","0.7")
                                })  
$("#kd").mouseleave(function(){
                        $(".bot7").hide();
                        $("#kd").css("opacity","1")
                        })  
                        $("#kd").mouseover(function(){
                            $(".bot7").show();
                            $("#kd").css("opacity","0.7")
                            })               
$("#kf").mouseleave(function(){
                            $(".bot8").hide();
                            $("#kf").css("opacity","1")
                            })
                            $("#kf").mouseover(function(){
                                $(".bot8").show();
                                $("#kf").css("opacity","0.7")
                                })
 $("#kg").mouseleave(function(){
                                $(".bot9").hide();
                                $("#kg").css("opacity","1")
                                })  
                                $("#kg").mouseover(function(){
                                    $(".bot9").show();
                                    $("#kg").css("opacity","0.7")
                                    })                        