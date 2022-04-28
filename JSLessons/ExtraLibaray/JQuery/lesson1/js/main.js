// $(function () {}); 

// $(document).ready(function () {});

// $(function () {
//     $('ne ile').nece(function(){ 
//         $('neyi').etsin();
//     })
// });



// $(function () {
//     $('.b').click(function(){ 
//         // $('#a').hide(1000);
//         // $('#a').show(1000);
//         // $('#a').toggle(1000);
        
//         // $('*').hide();
//         // $(this).hide();
//     })
// });

$(function(){
    $('button').click(function(){
        // $('#a').animate({left:"500px",width:"500px"},1000);var div = $("div");
        let div = $("#a");
    div.animate({height: '300px', opacity: '0.4'}, "slow");
    div.animate({width: '300px', opacity: '0.8'}, "slow");
    div.animate({height: '100px', opacity: '0.4'}, "slow");
    div.animate({width: '100px', opacity: '0.8'}, "slow");
        // $("#a").slideDown(1000)
        // $("#a").slideUp(1000)
        // $("#a").slideToggle(1000)
        // $("#a").fadeOut(1000)
        // $("#a").fadeIn(1000)
        // $("#a").fadeToggle(1000)
        // $("#a").fadeTo(1000,.5)
        // $('#a').toggle(1000,()=>{
        //     alert('hadise bitdi')
        // });
        // $('#a').toggleClass('j');
        // $('#a').addClass('j');
        // $('#a').removeClass('left-nav');
        // $("#a").css('background-color','red')
        // $("#a").css({'background-color':'red',  "transform": "translateX(200px)"})

    })
})