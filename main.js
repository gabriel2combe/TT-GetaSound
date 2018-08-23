$(document).ready(function(){ 
    counter();
    $('#message').keyup(counter); 
    $('#message').keydown(counter);
    $('.card').click(selector);
    
});

counter = function() {
    let value = $('#message').val();
    let max = 123;
    let wordCount = 0;
    let regex = /\s+/gi;

    if ($('#message').val().length) {    
       wordCount = value.trim().replace(regex, ' ').split(' ').length;
    }

   if (wordCount >= max) {
        $('#wordLeft').text(max - wordCount + ' mots');
        $('#wordLeft').css('color', 'red');           
    } else {
        let ch = max - wordCount;
        $('#wordLeft').text(ch + ' mots');
        $('#wordLeft').css('color', 'blue');      
    }
};


selector = function() {
    if ($(this).hasClass("cible")) {
        $(".cible").removeClass("border border-primary");
        $(this).addClass("border border-primary");

        if ($(this).hasClass("B2B")) {
            $("#B2B").css('display','block');
            $("#B2C").css('display','none');
        }
        if ($(this).hasClass("B2C")) {
            $("#B2C").css('display','block');
            $("#B2B").css('display','none');
        }
    }

    $(".acteur img").removeClass("border border-primary");

    if ($(this).hasClass("acteur")) {
        $(this).children().addClass("border border-primary");
    }
    if ($(".acteur img").hasClass("border border-primary")) {
        $("#textBox").css('display','block');
    } else {
        $("#textBox").css('display','none');
    }
};