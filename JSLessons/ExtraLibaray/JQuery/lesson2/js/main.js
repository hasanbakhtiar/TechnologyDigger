// var a = $.noConflict();


$(function() {
    $('#btn').click(function() {
        // $('#text').fadeOut(1000);
        // $('#text').fadeIn(1000);
        // $('#text').fadeToggle(1000);
        // $('#text').fadeTo(1000,.1);
        // $('#text').slideDown(1000);
        // $('#text').slideUp(1000);
        // $('#text').slideToggle(1000);
        // $('#text').css("color", "green").slideUp(2000).slideDown(2000);
    //    document.querySelector('#stop').innerHTML = $('#text').text();
    //    document.querySelector('#stop').innerHTML = $('#text').html();
    alert(

        // $('input').val()
        $('input').attr('type')
        
    )
    });

    $('#stop').click(function(){
        $('#text').stop();

    })
})