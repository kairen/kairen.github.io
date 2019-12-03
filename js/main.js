(function($){
    var toTop = ($('#sidebar').height() - $(window).height()) + 60;
    // Caption
    $('.article-entry').each(function(i) {
        $(this).find('img').filter(function (element) {
            return $(this).hasClass('');
        }).each(function() {
            // add image caption
            if (this.alt && !(!!$.prototype.justifiedGallery && $(this).parent('.justified-gallery').length)) {
                $(this).after('<span class="caption">' + this.alt + '</span>');
            }

            if ($(this).parent().prop("tagName") !== 'A') {
                $(this).wrap('<a href="' + ($(this).attr("data-imgbig") ? $(this).attr("data-imgbig") : this.src) + '" title="' + this.alt + '" class="gallery-item"></a>');
            }
        });
    });
    if (typeof lightGallery != 'undefined') {
        var options = {
            selector: '.gallery-item'
        };
        $('.article-entry').each(function(i, entry) {
            lightGallery(entry, options);
        });
        lightGallery($('.article-gallery')[0], options);
    }
    if (!!$.prototype.justifiedGallery) {  // if justifiedGallery method is defined
        var options = {
            rowHeight: 140,
            margins: 4,
            lastRow: 'justify'
        };
        $('.justified-gallery').justifiedGallery(options);
    }

    // Toc
    var toc = document.getElementById('toc')
    if (toc != null) {
        window.addEventListener("scroll", scrollcatelogHandler);
        var tocPosition = toc.offsetTop;
        function scrollcatelogHandler(e) {
            var event = e || window.event,
                target = event.target || event.srcElement;
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            if (scrollTop > tocPosition) {
                toc.classList.add("toc-fixed");
            } else {
                toc.classList.remove("toc-fixed");
            }
        }
    }

    // Profile card
    $(document).on('click', function () {
        $('#profile').removeClass('card');
    }).on('click', '#profile-anchor', function (e) {
        e.stopPropagation();
        $('#profile').toggleClass('card');
    }).on('click', '.profile-inner', function (e) {
        e.stopPropagation();
    });

    // To Top
    if ($('#sidebar').length) {
        $(document).on('scroll', function () {
            if(($(this).scrollTop() > toTop) && ($(this).scrollTop() > 0)) {
                $('#toTop').addClass("show")
            } else {
                $('#toTop').removeClass("show")
            }
        })
    }

    $('#toTop').click(function() {
        $('#toTop').addClass("launch")
        $('body, html').animate({
            scrollTop: 0
         }, 1000, function() {
            $('#toTop').removeClass("show launch")
         });
         return false;
    })

})(jQuery);
