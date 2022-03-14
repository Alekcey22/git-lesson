//var button = document.getElementById('button');

//button.onclick = function () {
//	var text = document.querySelector('p');
//	text.classList.add('blue');
//	var img = document.querySelector('.photo')
	//img.style.display = 'none';
	//var img = document.querySelector('.container h2')
	//img.style.display = 'none';
	//document.querySelector('.container h2').style.marginleft = '1000px';
//}
	

    $(window).scroll(function() {
        $('.logo1').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+900) {
                $(this).addClass("animate__animated animate__backInLeft");
            }
        });
    });

    $(window).scroll(function() {
        $('.logo2').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+900) {
                $(this).addClass("animate__animated animate__backInUp");
            }
        });
    });

    $(window).scroll(function() {
        $('.logo3').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+900) {
                $(this).addClass("animate__animated animate__backInRight");
            }
        });
    });
    $(window).scroll(function() {
        $('.E-mail').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+900) {
                $(this).addClass("animate__animated animate__backInLeft");
            }
        });
    });
    $(window).scroll(function() {
        $('.button2').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+900) {
                $(this).addClass("animate__animated animate__rotateInUpRight");
            }
        });
    });

       $(window).scroll(function() {
        $('.footer p').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+900) {
                $(this).addClass("animate__animated animate__zoomIn");
            }
        });
    });

