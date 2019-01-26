jQuery(document).ready(function ($) {
    // THE BOX JS

    // CATALOGUE BG


    var contentIsShown = false;

    $(document).ready(function () {
        var activeClass = 'active',
            sel = {
                book: '.book,.bookshopLocation',
                //location: '.location',
                title: '.book-title',
                content: '.book-content'
            };

            $(sel.title).on('click', function( event ) {
                if ( $( this ).hasClass( activeClass ) ) {
                    $( this ).parent( ).find( sel.content ).hide( );
                    $( this ).removeClass( activeClass );

                    return event.preventDefault( );
                }

                $( this ).addClass( activeClass );
                $( this ).parent( ).find( sel.content ).show( );
            } );

        //$(sel.book).on('click', function (event) {
        // $(sel.title).on('mouseover', function (event) {
        //     if ($(this).hasClass(activeClass)) {

        //         $(this).parent().find(sel.content).hide();
        //         //$(this).parent().find(sel.content).removeClass(activeClass);
        //         $(this).removeClass(activeClass);

        //         return event.preventDefault(); // this code will prevent actions in case you will use <a> tag, or other elements instead of <li>
        //     }

        //     $(this).addClass(activeClass);
        //     $(this).parent().find(sel.content).show();
        //     //$(this).parent().find(sel.content).addClass(activeClass);

        // }); 

        // Make the DIV element draggable
        dragElement(document.getElementById("title"));
    });


    //var degrees = 0, seconds = 0, previousRotation = 0;

    //$(".documentationContainer").click(function () {
    //    previousRotation = degrees;
    //    degrees += parseInt(Math.random() * 360 + 180);
    //    //you should adjust this formula
    //    miliseconds = parseInt((degrees - previousRotation)) * 5;
    //    $("#seconds").text(miliseconds);
    //    $("#degrees").text(degrees);
    //    $(this).css({
    //        "-webkit-transform": "rotate(" + degrees + "deg)",
    //        "-webkit-transition-duration": miliseconds + "ms"
    //    });
    //});

    //$('.close').click(function () {
    //    $(".poster").fadeOut(300);
    //});
    //$(".poster").on('blur', function () {
    //    $(this).fadeOut(300);
    //});


    // play video
    setTimeout(function () {
        var video_bkg = document.getElementById('bgvid');
        if (video_bkg !== null) {
            const playPromise = video_bkg.play();
            if (playPromise !== null) {
                //playPromise.catch(() => { video_bkg.play(); });
            }
        }
    }, 250);

});

function bkgVideoPlay() {
    var video_bkg = document.getElementById('bgvid');
    if (video_bkg !== null) video_bkg.play();
}

var sloganID = 1;
var sloganCount = 8;

function toggleSlogan() {
    // check max slogan
    if (sloganID >= sloganCount) sloganID = 1;
    // null current slogan
    $('.slogan').toggleClass('shown', false);
    // increse id
    sloganID++;
    // set current slogan
    //setTimeout(function () {
    // set current slogan
    $('#Slogan-' + sloganID).toggleClass('shown', true);
    //}, 250);
}

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}