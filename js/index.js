function changeFrameHeight(){
    var ifm= document.getElementById("mainiframe");
    ifm.height=document.documentElement.clientHeight-56;
}


$(document).ready(function(){
    var header = $('.header');
    var menu = $('.menu');
    var hamb = $('.hamburger');
    var menuActive = false;
    var navbar = document.getElementById("nav");

    changeFrameHeight();

    setHeader();

    $(window).on('resize',function() {

        setHeader();
        changeFrameHeight();

        if(window.innerWidth >= 1280) {
            document.getElementById("menuBtn").style.visibility="hidden";
            navbar.style.visibility = "visible";
            closeMenu();
        } else {
            navbar.style.visibility = "hidden";
            document.getElementById("menuBtn").style.visibility="visible";
        }
    });

    $(document).on('scroll', function(){
        setHeader();
    });

    initMenu();

    function setHeader()
    {
        if($(window).scrollTop()>91){
            header.addClass('scrolled');
        } else {
            header.removeClass('scrolled');
        }
        if(window.innerWidth >= 1280) {
            document.getElementById("menuBtn").style.visibility="hidden";
            navbar.style.visibility = "visible";
            closeMenu();
        } else {
            navbar.style.visibility = "hidden";
            document.getElementById("menuBtn").style.visibility="visible";
        }
    }

    function initMenu()
    {
        if(hamb.length && menu.length)
        {
            hamb.on('click', function() {
                if(!menuActive) {
                    openMenu();
                } else {
                    closeMenu();
                }
            });
        }
    }

    function openMenu()
    {
        document.getElementById("nav").style.visibility = "hidden";
        menu.addClass("active");
        menuActive = true;
    }

    function closeMenu()
    {
        menu.removeClass("active");
        menuActive = false;
	if(window.innerWidth >= 1280) {
		document.getElementById("nav").style.visibility = "visible";
	}
        
    }
});



function changeIframe(page_name) {
    var ifm= document.getElementById("mainiframe");
    ifm.setAttribute("src",("./sub_pages/" + page_name + ".html"));
}

